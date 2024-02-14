<script>
    // we'll edit this later
    let user;
</script>

<svelte:head>
	<title>whereiswill Member App</title>
</svelte:head>

{#if !user}
    <button>Sign In</button>
{:else}
    <button>Sign Out</button>
{/if}
