<script lang="ts">
    import { onMount } from "svelte";

    let mode = "dark";
    let headerHeight = 88;

    const getInitialMode = () => {
        if (typeof window === "undefined") return "dark";
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const updateRootClass = (value: string) => {
        document.documentElement.classList.remove("light-mode", "dark-mode");
        document.documentElement.classList.add(value === "dark" ? "dark-mode" : "light-mode");
    };

    const setTheme = (value: string) => {
        mode = value;
        updateRootClass(value);
        localStorage.setItem("theme", value);
    };

    const toggleMode = () => setTheme(mode === "dark" ? "light" : "dark");

    let headerEl: HTMLElement;

    const updateHeaderHeight = () => {
        if (headerEl) {
            headerHeight = headerEl.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        }
    };

    onMount(() => {
        setTheme(getInitialMode());
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    });
</script>

<header class="header" bind:this={headerEl}>
    <div class="logo-link">
        <p class="logo">W-D</p>
    </div>
    
    <nav class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#instagram" class="nav-link">@webdesign_ddc</a>
        <button type="button" class="theme-toggle" on:click={toggleMode} aria-label={mode === "light" ? "Passa a dark mode" : "Passa a light mode"} title={mode === "light" ? "Passa a dark mode" : "Passa a light mode"}>
            {#if mode === "light"}
                <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 2a7 7 0 1 0 7 7c0 3.866-3.134 7-7 7a7 7 0 0 1 0-14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            {:else}
                <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" />
                    <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            {/if}
        </button>
    </nav>
</header>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-5) var(--spacing-10);
        height: 88px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: transparent;
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
        white-space: nowrap;
    }

    .nav-link:hover {
        color: var(--color-accent-primary);
    }

    .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border-radius: 9999px;
        border: 1px solid currentColor;
        background: transparent;
        color: var(--color-content-primary);
        cursor: pointer;
        transition: background 0.2s ease, transform 0.2s ease;
    }

    .theme-toggle:hover {
        background: var(--color-overlay-soft-light);
        transform: translateY(-1px);
    }

    .theme-toggle svg {
        width: 22px;
        height: 22px;
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

    /* Fix per iPad Mini e Mobile: mantieni tutto su una riga */
    @media (max-width: 800px) {
        .header {
            flex-direction: row; /* Forza l'affiancamento */
            justify-content: space-between;
            height: 88px;
            padding: 0 var(--spacing-5);
        }

        .nav-links {
            gap: var(--spacing-3);
        }

        .nav-link {
            font-size: 16px; /* Ridotto per evitare sovrapposizioni */
        }

        .logo {
            font-size: 20px;
        }

        .theme-toggle {
            width: 38px;
            height: 38px;
        }
    }

    @media (max-width: 402px) {
        .header {
            padding: 0 var(--spacing-4);
        }
        .nav-links {
            gap: var(--spacing-2);
        }
        .nav-link {
            font-size: 14px;
        }
    }
</style>
