<script>
	import { login } from '../../../rpc/auth/auth.remote';
</script>

<form {...login}>
	<input type="text"  name="name" />
	<button type="submit">Login</button>
</form>
