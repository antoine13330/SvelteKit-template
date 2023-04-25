<script>
	import { enhance } from "$app/forms";
</script>
<h1>Login</h1>

<form action="?/login" method="POST" use:enhance={() =>{  
        return async ({ result }) => {
            console.log(result)        
        };
    }}>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required />
    <button type="submit">Login</button>
</form>