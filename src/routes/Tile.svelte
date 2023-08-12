<script lang="ts">
	export let imageUrl: string;
	export let imageDescription: string = '';
	export let width;
</script>

<img src={imageUrl} alt={imageDescription} {width} />
