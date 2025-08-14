<script>
	import { goto } from '$app/navigation';
	import { logout, me } from '../rpc/auth/auth.remote';
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 text-center shadow-md">
		{#await me()}
			<div class="flex items-center justify-center space-x-2">
				<div
					class="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
				></div>
				<p class="text-gray-600">Loading...</p>
			</div>
		{:then user}
			{#if user}
				<p class="text-lg font-semibold text-gray-800">Hello, {user.name} 👋</p>
				<div class="flex items-center justify-center space-x-2">
					<form {...logout}>
						<button
							class="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
							type="submit"
						>
							Logout
						</button>
					</form>
					<button
						class="rounded-md bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
					>
						Lihat
					</button>
				</div>
			{:else}
				<p class="text-gray-600">Not logged in</p>
				<button
					onclick={() => goto('/login')}
					class="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
				>
					Login
				</button>
			{/if}
		{:catch err}
			<p class="rounded-md bg-red-100 px-4 py-2 text-red-700">
				⚠ {err.message}
			</p>
		{/await}
	</div>
</div>
