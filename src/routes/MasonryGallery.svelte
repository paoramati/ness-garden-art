<script>
	import Masonry from 'svelte-bricks';
	import { images } from './images';
	import Tile from './Tile.svelte';

	let nItems = 30;
	$: items = images;

	let [minColWidth, maxColWidth, gap] = [200, 250, 20];
	let [width, height] = [330, 500];
	// let width, height;
</script>

Masonry size: <span>{width}px</span> &times; <span>{height}px</span> (w &times; h)

<Masonry {items} {minColWidth} {maxColWidth} {gap} let:item bind:width bind:height>
	<Tile imageUrl={item.imageUrl} width={minColWidth} />
</Masonry>
