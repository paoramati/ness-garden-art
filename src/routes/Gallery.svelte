<script lang="ts">
	import Tile from './Tile.svelte';
	import { getImagesRandomOrder, images } from './images';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each getImagesRandomOrder() as { imageUrl, imageDescription }}
		<div class="p-6">
			<Tile {imageUrl} {imageDescription} />
		</div>
	{/each}
</div>
