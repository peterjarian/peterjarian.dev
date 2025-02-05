<script lang="ts">
	import { browser } from '$app/environment';
	import { navigating } from '$app/state';
	import { Loader } from '$lib/components/global/loader';
	import '../app.css';
	let { children } = $props();
</script>

{#if !browser}
	<Loader />
{:else}
	{@render children()}
{/if}
