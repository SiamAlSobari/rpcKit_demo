<script>
	import { login } from '../../../rpc/auth/auth.remote';
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<form {...login} class="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-md">
		<h2 class="text-center text-2xl font-semibold text-gray-800">Login</h2>

		<input
			type="text"
			name="name"
			placeholder="Enter your name"
			class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
		{#if login.result?.error}
			<p class="text-red-500">{login.result.error}</p>
		{/if}
		<button
			type="submit"
			class="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
		>
			Login
		</button>
	</form>
</div>
