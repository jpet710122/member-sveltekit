<script lang="ts">
  import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	// import { Amplify } from 'aws-amplify';
  // import { getCurrentUser } from 'aws-amplify/auth';
  // import awsmobile from '../aws-exports';
  // import pkg from '@aws-crypto/sha256-js';
  //
  // const { Sha256 } = pkg;
  // Amplify.configure(awsmobile);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  // import type { AfterNavigate } from '@sveltejs/kit';
  // import { afterNavigate } from '$app/navigation';
  import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	let { data = page, children } = $props();
	
  //   const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
  //   const elemPage = document.querySelector('#page');
  //   if (isNewPage && elemPage !== null) {
  //       elemPage.scrollTop = 0;
  //   }
  // });
</script>

<!-- App Shell -->
<AppShell>
	{#snippet header()}
	
			<!-- App Bar -->
			<AppBar
	      gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end"
	      class="border border-primary-400-500-token border-b-2 border-r-0 border-l-0 border-t-0 border-gray-400">
				{#snippet lead()}
					
						<strong class="text-xl text-primary-700-200-token">whereiswill</strong>
					
					{/snippet}
	      <strong class="text-2xl text-primary-700-200-token">Member</strong>
				{#snippet trail()}
					
						<a class="btn variant-filled-primary" href={data.signInUrl}>Sign in (or sign up)</a>
						{#if data.email}
							<p>Logged in as {data.email}</p>
						{/if}
						<LightSwitch />
		      
					{/snippet}
			</AppBar>
		
	{/snippet}
  {#snippet sidebarLeft()}
	
	    <!-- Hidden below Tailwind's large breakpoint -->
	    <AppRail class="hidden md:block">
	        <AppRailAnchor href="/" target="_blank" title="Home" class="text-primary-700-200-token">
	          {#snippet lead()}
							
		            <Icon icon="mdi:home" width="36" />
		          
							{/snippet}
	          <span>Home</span>
	        </AppRailAnchor>
	        <AppRailAnchor href="/profileForm" target="_blank" title="Profile" class="text-primary-700-200-token">
	          {#snippet lead()}
							
		            <Icon icon="mdi:person" width="36" />
		          
							{/snippet}
	          <span>Profile</span>
	        </AppRailAnchor>
	      <AppRailAnchor href="/records" target="_blank" title="Records" class="text-primary-700-200-token">
	        {#snippet lead()}
							
		          <Icon icon="vaadin:records" width="36" />
		        
							{/snippet}
	        <span>Records</span>
	      </AppRailAnchor>
	    </AppRail>
	  
	{/snippet}
	{#snippet footer()}
	
	<!--		 Mobile-->
			<div class="md:hidden block border border-primary-400-500-token border-b-0 border-r-0 border-l-0 border-t-2 border-gray-400 mx-auto">
				<TabGroup
					justify="justify-center"
					active="bg-grey-200-700-token"
					rounded=""
					hover="bg-grey-200-700-token"
					borderWidth="2"
					class="bg-surface-50-850-token w-full"
				>
					<TabAnchor href="/" selected={$page.url.pathname === '/'} class="text-primary-700-200-token">
						{#snippet lead()}
									
								<Icon icon="mdi:home" width="36" />
							
									{/snippet}
						<span>Home</span>
					</TabAnchor>
					<TabAnchor href="/profile" selected={$page.url.pathname === '/profile'} class="text-primary-700-200-token">
							<Icon icon="mdi:person" width="36" />
						<span>Profile</span>
					</TabAnchor>
					<TabAnchor href="/records" selected={$page.url.pathname === '/records'} class="text-primary-700-200-token">
							<Icon icon="vaadin:records" width="36" />
						<span>Records</span>
					</TabAnchor>
				</TabGroup>
			</div>
		
	{/snippet}
	<!-- <svelte:fragment slot="footer">
		<div class="flex justify-center items-center ">
			<span>&copy; whereiswill Group Pty Ltd. All rights reserved.</span>
    </div>
  </svelte:fragment> -->

	<!-- Page Route Content -->
  {@render children?.()}
</AppShell>

