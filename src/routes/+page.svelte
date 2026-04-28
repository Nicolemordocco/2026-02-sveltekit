<script>
	import Header from "$lib/components/Header.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import YearFilter from "$lib/components/YearFilter.svelte";
	import PhotoGrid from "$lib/components/PhotoGrid.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { photos } from "$lib/data/photos.js";
</script>

<div class="page">
	<Header />
	<Hero />
	<div class="content">
		<YearFilter />
		<PhotoGrid {photos} />
	</div>
	<Footer />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-background-primary);
		color: var(--color-content-primary);
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: var(--spacing-7);
	}
</style>

