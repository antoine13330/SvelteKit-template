<script>
	import '../app.postcss';
	import '../app.scss';
	import Navbar from '$lib/interface/components/layout/navbar/navbar.component.svelte';
</script>

<Navbar />
<slot />

<p class="text-red-500">hello</p>
