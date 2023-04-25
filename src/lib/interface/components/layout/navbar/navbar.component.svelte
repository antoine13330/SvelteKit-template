<script lang="ts">
	import type { PageData } from "../../../../../routes/$types";
	export let data : PageData;
    $: console.log("data changes navbar" , data)
</script>

<nav class="flex gap-4 py-4 px-4 text-lg text-bold">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
   
        {#if !data.user.session}
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        {:else}
            <a href="/dashboard">Dashboard</a>
            <a href="/profil">Profil</a>
            <span>Hello {data.user.user.username}</span>
        {/if}
</nav>
