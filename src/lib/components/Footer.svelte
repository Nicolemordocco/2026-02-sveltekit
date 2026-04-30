<footer class="footer">
	<div class="footer-inner">
		<img 
			src="https://www.figma.com/api/mcp/asset/5bf540a6-d744-4c02-b381-1c5d6c10b8a5"
			alt="Politecnico Milano logo" 
			class="footer-logo"
		/>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		padding: var(--spacing-3) var(--spacing-10);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--footer-bg);
	}

	:global(.light-mode) .footer {
		--footer-bg: #ffffff;
	}

	:global(.dark-mode) .footer {
		--footer-bg: #0d0d0d;
	}

	@media (prefers-color-scheme: dark) {
		.footer { --footer-bg: #0d0d0d; }
	}

	@media (prefers-color-scheme: light) {
		.footer { --footer-bg: #ffffff; }
	}

	.footer-inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 1200px;
	}

	.footer-logo {
		height: auto;
		max-width: 400px;
		width: 100%;
		transition: opacity 0.3s ease, filter 0.3s ease;
	}

	.footer-logo:hover {
		opacity: 0.8;
	}

	:global(.light-mode) .footer-logo {
		filter: brightness(0);
	}

	:global(.dark-mode) .footer-logo {
		filter: brightness(0) invert(1);
	}

	@media (prefers-color-scheme: light) {
		.footer-logo { filter: brightness(0); }
	}

	@media (prefers-color-scheme: dark) {
		.footer-logo { filter: brightness(0) invert(1); }
	}

	@media (max-width: 1024px) {
		.footer {
			padding: var(--spacing-3) var(--spacing-7);
		}

		.footer-logo {
			max-width: 320px;
		}
	}

	@media (max-width: 744px) {
		.footer {
			padding: var(--spacing-4) var(--spacing-5);
		}

		.footer-logo {
			max-width: 280px;
		}
	}

	@media (max-width: 402px) {
		.footer {
			padding: var(--spacing-4) var(--spacing-4);
		}

		.footer-logo {
			max-width: 220px;
		}
	}
</style>