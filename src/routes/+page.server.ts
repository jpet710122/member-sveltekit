// @ts-expect-error This is not typed yet.
import type { PageServerLoad } from '$lib/$types';
// @ts-expect-error This is not typed yet.
import { COGNITO_BASE_URI, COGNITO_CLIENT_ID } from '$env/static/private';
// @ts-expect-error This is not typed yet.
import { getRedirectUrl } from '$lib/server/helpers';

export const load = (async ({ locals }) => {
	const signInUrl = _getSignInUrl();

	return { signInUrl, email: locals.user?.email };
}) satisfies PageServerLoad;

/**
 * Generate the URL to redirect the user to for signing in.
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/login-endpoint.html
 */
export function _getSignInUrl(): string {
	const baseUrl = COGNITO_BASE_URI;
	const clientId = COGNITO_CLIENT_ID;

	// The login api endpoint with the required parameters.
	const loginUrl = new URL("/login", baseUrl);
	loginUrl.searchParams.set("response_type", "code");
	loginUrl.searchParams.set("client_id", clientId);
	loginUrl.searchParams.set("redirect_uri", getRedirectUrl());
	loginUrl.searchParams.set("scope", "email openid phone");

	return loginUrl.toString();
}
