<script context="module" lang="ts">
	export interface Photo {
		title: string;
		year: string;
		image: string;
	}
</script>

<script lang="ts">
	import PhotoCard from "./PhotoCard.svelte";

	type Props = {
		photos?: Photo[];
	};

	let { photos = [] }: Props = $props();
</script>

<div class="grid">
	{#each photos as photo}
		<PhotoCard title={photo.title} year={photo.year} image={photo.image} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--spacing-5);
		padding: 0 var(--spacing-10);
		width: 100%;
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>