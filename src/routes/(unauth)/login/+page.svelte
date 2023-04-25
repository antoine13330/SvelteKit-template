<script>
	import { enhance } from "$app/forms";
</script>
<h1>Login</h1>

<form action="?/login" method="POST" use:enhance={() =>{  
        return async ({ result }) => {
            if ( result.status === 302 ) {
                window.location.href = '/';
            } else {
                alert(result.data.error.message)
            }
        };
    }}>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required />
    <button type="submit">Login</button>
</form>