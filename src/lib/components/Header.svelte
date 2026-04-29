<header class="header">
	<div class="logo-link">
		<p class="logo">W-D</p>
	</div>
	
	<nav class="nav-links">
		<a href="#about" class="nav-link">About</a>
		<a href="#instagram" class="nav-link">@webdesign_ddc</a>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-5) var(--spacing-10);
		height: 88px;
	}

	.logo-link {
		display: flex;
		gap: var(--spacing-1);
		align-items: center;
		justify-content: center;
		padding: var(--spacing-1) var(--spacing-2);
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.logo-link:hover {
		background-color: var(--color-overlay-soft-light);
	}

	.logo {
		font-family: var(--font-primary);
		font-size: var(--font-size-24);
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-tight);
		color: var(--color-link-default);
		margin: 0;
		white-space: nowrap;
	}

	.nav-links {
		display: flex;
		gap: var(--unit-32);
		align-items: center;
	}

	.nav-link {
		font-family: var(--font-primary);
		font-size: var(--font-size-24);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-tight);
		color: var(--color-link-default);
		text-decoration: none;
		padding: var(--spacing-1) var(--spacing-2);
		transition: color 0.2s ease;
	}

	.nav-link:hover {
		color: var(--color-accent-primary);
	}
</style>
