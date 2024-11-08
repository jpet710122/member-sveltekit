// @ts-ignore
import type { RequestHandler } from '$lib/$types';
// @ts-ignore
import { getTokens } from '$lib/server/helpers';
import { error, redirect } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get("code");

	if (!code) {
		throw error(500, "No code provided");
	}

	let tokens = null;
	try {
		tokens = await getTokens({ code });
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify(e), { status: 500 });
	}

	if (tokens && tokens.access_token && tokens.id_token && tokens.refresh_token) {
		// Set the expire time for the refresh token
		// This is set in the Cognito console to 30 days by default
		// so we'll use 29 days here.
		// When the refresh token expires, the user will
		// have to log in again
		const refreshExpire = new Date();
		refreshExpire.setDate(refreshExpire.getDate() + 29);
		cookies.set("refresh_token", tokens.refresh_token, {
			path: "/",
			expires: refreshExpire
		});

		// Get the expire time for the id token
		// and set a cookie.
		const idExpires = new Date();
		idExpires.setSeconds(idExpires.getSeconds() + tokens.expires_in);
		cookies.set("id_token", tokens.id_token, { path: "/", expires: idExpires });

		// Redirect back to the home page
		throw redirect(307, "/");
	} else {
		return new Response(JSON.stringify(tokens), { status: 500 });
	}
};
