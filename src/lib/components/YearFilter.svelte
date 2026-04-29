<script>
	let selectedYear = $state("2026");
	const years = ["2026", "2025", "2024"];
</script>

<div class="year-filter">
	{#each years as year}
		<button
			class="filter-btn"
			class:selected={selectedYear === year}
			onclick={() => (selectedYear = year)}
		>
			{year}
		</button>
	{/each}
</div>

<style>
	.year-filter {
		display: flex;
		gap: var(--spacing-5);
		align-items: center;
		padding: 0 var(--spacing-10);
		margin-bottom: var(--spacing-7);
	}

	.filter-btn {
		padding: var(--spacing-2) var(--spacing-4);
		border-radius: var(--radius-full);
		border: none;
		background-color: var(--color-filter-background-default);
		color: var(--color-filter-content-default);
		font-family: var(--font-primary);
		font-size: var(--font-size-24);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-tight);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.filter-btn.selected {
		background-color: var(--color-filter-background-selected);
		color: var(--color-filter-content-selected);
	}

	.filter-btn:hover:not(.selected) {
		opacity: 0.8;
		transform: scale(1.05);
		background-color: var(--color-overlay-soft-light);
	}

	@media (max-width: 768px) {
		.year-filter {
			gap: var(--spacing-4);
			padding: 0 var(--spacing-5);
			margin-bottom: var(--spacing-5);
		}

		.filter-btn {
			padding: var(--spacing-2) var(--spacing-4);
			font-size: var(--font-size-20);
		}
	}
</style>
