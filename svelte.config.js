import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],
    preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md']})],
    compilerOptions: {
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
    },
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Modificato: permette a Netlify di gestire le rotte
            precompress: false,
            strict: true
        })
    }
};

export default config;