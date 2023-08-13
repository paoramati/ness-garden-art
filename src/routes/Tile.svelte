<script lang="ts">
	export let imageUrl: string;
	export let imageDescription: string = '';
</script>

<img src={imageUrl} alt={imageDescription} loading="lazy" />
