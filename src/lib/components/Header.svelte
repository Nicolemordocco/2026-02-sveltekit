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
	}

	.logo {
		font-family: var(--font-primary);
		font-size: var(--font-size-24);
		font-weight: var(--font-weight-bold);
		line-height: var(--line-height-tight);
		color: var(--color-link-default);
		margin: 0;
		white-space: nowrap;
		transition: color 0.2s ease;
	}

	.logo-link:hover .logo {
		color: var(--color-accent-primary);
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

	@media (max-width: 1024px) {
		.header {
			padding: var(--spacing-5) var(--spacing-7);
		}

		.nav-links {
			gap: var(--spacing-4);
		}

		.nav-link {
			font-size: var(--font-size-22);
		}
	}

	@media (max-width: 744px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-4);
			padding: var(--spacing-5) var(--spacing-5);
			height: auto;
		}

		.nav-links {
			flex-wrap: wrap;
			gap: var(--spacing-3);
		}

		.nav-link {
			font-size: var(--font-size-20);
		}
	}

	@media (max-width: 402px) {
		.header {
			padding: var(--spacing-4) var(--spacing-4);
		}

		.logo {
			font-size: var(--font-size-20);
		}

		.nav-links {
			width: 100%;
			justify-content: flex-start;
			gap: var(--spacing-2);
		}

		.nav-link {
			font-size: var(--font-size-18);
			padding: var(--spacing-1) var(--spacing-1);
		}
	}
</style>
