<section class="hero">
	<p class="description">
		This archive collects the best memories captured with my digital camera over the past few years, special moments worth remembering. Photos and archive curated by Nicole Mordocco.
	</p>
</section>

<style>
	.hero {
		padding: var(--spacing-11) var(--spacing-10);
		height: 590px;
		display: flex;
		align-items: center;
	}

	.description {
		font-family: var(--font-primary);
		font-size: var(--font-size-40);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-tight);
		color: var(--color-content-primary);
		margin: 0;
		max-width: 893px;
	}

	@media (max-width: 1024px) {
		.hero {
			padding: var(--spacing-10) var(--spacing-7);
		}

		.description {
			font-size: var(--font-size-40);
			max-width: 720px;
		}
	}

	@media (max-width: 744px) {
		.hero {
			padding: var(--spacing-8) var(--spacing-5);
			height: auto;
			align-items: flex-start;
		}

		.description {
			font-size: var(--font-size-32);
			max-width: none;
		}
	}

	@media (max-width: 402px) {
		.hero {
			padding: var(--spacing-6) var(--spacing-4);
		}

		.description {
			font-size: var(--font-size-24);
			line-height: 1.3;
		}
	}
</style>
