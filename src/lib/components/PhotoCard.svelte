<script lang="ts">
	type Props = {
		title?: string;
		year?: string;
		image?: string;
	};

	let {
		title = "",
		year = "",
		image = ""
	}: Props = $props();
</script>

<div class="card">
	<div class="image-container">
		<img src={image} alt={title} class="image" />
		<div class="overlay"></div>
	</div>

	<div class="content">
		<div class="text-content">
			<p class="title">{title}</p>
			<p class="year">/ {year}</p>
		</div>

		<div class="arrow">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7 17L17 7M17 7H7M17 7V17"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		width: 100%;
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		cursor: pointer;
	}

	.card:hover {
		transform: scale(1.02);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.image-container {
		width: 100%;
		height: 100%;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease, filter 0.3s ease;
		will-change: transform, filter;
	}

	.card:hover .image {
		transform: scale(1.1);
		filter: brightness(1.05);
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
		transition: background 0.3s ease;
	}

	.card:hover .overlay {
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
	}

	.content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: var(--spacing-4);
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.text-content {
		flex: 1;
	}

	.title {
		font-family: var(--font-primary);
		font-size: var(--font-size-18);
		font-weight: var(--font-weight-bold);
		margin: 0;
		transition: color 0.3s ease;
	}

	.year {
		font-family: var(--font-secondary);
		font-size: var(--font-size-14);
		opacity: 0.8;
		margin: 0;
		transition: color 0.3s ease;
	}

	.card:hover .title,
	.card:hover .year {
		color: var(--color-accent-primary);
	}

	.arrow {
		color: white;
		transition: transform 0.3s ease;
	}

	.card:hover .arrow {
		transform: rotate(45deg);
	}
</style>