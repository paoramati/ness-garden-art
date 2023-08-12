<script lang="ts">
	import Tile from './Tile.svelte';
	import { images } from './images';
</script>

<div class="grid grid-cols-3">
	{#each images as { imageUrl, imageDescription }}
		<div class="p-6">
			<Tile {imageUrl} {imageDescription} />
		</div>
	{/each}
</div>
