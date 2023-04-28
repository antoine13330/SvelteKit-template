<script lang="ts">
	import '@src/app.scss';
	import Navbar from '$lib/interface/components/layout/navbar/navbar.component.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte/internal';
	import { navigating } from '$app/stores';
	import { fly } from 'svelte/transition';
	export let data: PageData;
	let mounted: boolean = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if !mounted || $navigating}
	<!-- do something -->
{/if}

<Navbar {data} />

<slot />

