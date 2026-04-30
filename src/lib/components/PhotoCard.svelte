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
        /* Usiamo il rapporto originale di Figma per coerenza */
        aspect-ratio: 664 / 400; 
        overflow: hidden;
        border-radius: var(--radius-md);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 8px 16px rgba(65, 133, 153, 0.25);
    }

    .image-container {
        width: 100%;
        height: 100%;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease, filter 0.4s ease;
        will-change: transform, filter;
    }

    .card:hover .image {
        transform: scale(1.05);
        filter: brightness(0.72);
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.55));
        transition: background 0.4s ease;
    }

    .card:hover .overlay {
        background: 
            linear-gradient(
                to bottom,
                rgba(65, 133, 153, 0.18) 0%,
                rgba(65, 133, 153, 0.10) 40%,
                rgba(0, 0, 0, 0.65) 100%
            );
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
        color: white;
        transition: color 0.3s ease;
    }

    .year {
        font-family: var(--font-secondary);
        font-size: var(--font-size-14);
        opacity: 0.8;
        margin: 0;
        color: white;
        transition: color 0.3s ease;
    }

    .card:hover .title {
        color: #a8d4de;
    }

    .card:hover .year {
        color: #a8d4de;
    }

    .arrow {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 24px;
        height: 24px;
        position: relative;
        transition: color 0.3s ease;
    }

    .card:hover .arrow {
        color: #a8d4de;
    }

    .arrow svg {
        position: absolute;
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.35s ease;
        transform: translateY(120%);
        opacity: 0;
    }

    .card:hover .arrow svg {
        transform: translateY(0);
        opacity: 1;
    }

    /* --- SOLUZIONE PER L'IPAD MINI (744px) --- */

    /* Applichiamo il cambio a 1 colonna a partire da 800px per coprire l'iPad Mini */
    @media (max-width: 800px) {
        /* Usiamo :global se la classe .grid è definita in un altro componente */
        :global(.grid) {
            grid-template-columns: 1fr !important; 
            padding: 0 var(--spacing-6) !important;
            gap: var(--spacing-6) !important;
        }

        .card {
            /* Adattiamo l'aspect-ratio per renderlo armonioso a colonna singola */
            aspect-ratio: 1.5 / 1; 
            max-width: 100%;
        }
    }

    @media (max-width: 402px) {
        :global(.grid) {
            padding: 0 var(--spacing-4) !important;
            gap: var(--spacing-4) !important;
        }
    }
</style>