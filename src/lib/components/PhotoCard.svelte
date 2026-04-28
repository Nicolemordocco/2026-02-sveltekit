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