<script lang="ts">
	import { qAllAnimes } from '../../rpc/anime/anime.remote';
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 p-6">
	<h1
		class="mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent"
	>
		🔥 Anime List
	</h1>

	{#await qAllAnimes()}
		<!-- Loading Spinner -->
		<div class="flex min-h-[200px] flex-col items-center justify-center">
			<div
				class="h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"
			></div>
			<span class="mt-3 text-lg font-medium text-gray-600">Loading your anime...</span>
		</div>
	{:then anime}
		<!-- Anime Grid -->
		<ul class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each anime.data as animes}
				<li
					class="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
				>
					<!-- Image -->
					<div class="relative overflow-hidden">
						<img
							src={animes.images.jpg.image_url}
							alt={animes.title}
							class="h-72 w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<!-- Hover Overlay -->
						<div
							class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<p class="line-clamp-3 text-sm text-white">
								{animes.synopsis ?? 'No synopsis available'}
							</p>
						</div>
						<!-- Badge Score -->
						<span
							class="absolute top-3 left-3 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg"
						>
							⭐ {animes.score ?? 'N/A'}
						</span>
					</div>

					<!-- Content -->
					<div class="p-4">
						<h2
							class="line-clamp-2 text-lg font-bold text-gray-800 transition-colors duration-300 group-hover:text-pink-500"
						>
							{animes.title}
						</h2>
						<p class="mt-1 text-sm text-gray-500 italic">
							{animes.type} • {animes.episodes ?? '??'} eps
						</p>

						<!-- Hover Button -->
						<button
							class="mt-3 w-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-2 font-semibold text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 hover:shadow-lg"
						>
							Details
						</button>
					</div>
				</li>
			{/each}
		</ul>
	{:catch err}
		<!-- Error State -->
		<p class="rounded-lg bg-red-100 p-3 text-red-500 shadow-sm">
			⚠ {err.message}
		</p>
	{/await}
</div>
