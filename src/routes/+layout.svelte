<script lang="ts">
	import '@src/app.scss';
	import Navbar from '$lib/interface/components/layout/navbar/navbar.component.svelte';
	import type { PageData } from './$types';
	export let data : PageData;
</script>
<Navbar {data} />

<slot />
