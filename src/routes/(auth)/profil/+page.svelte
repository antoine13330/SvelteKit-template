<script lang="ts">
    import type { PageData } from './$types';
    export let data : PageData;
</script>


<form action="?/logout" method="post">
    <button type="submit">Logout</button>
</form>