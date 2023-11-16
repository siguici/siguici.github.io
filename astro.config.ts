import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.svg',
			title: 'Sigui\'s work',
			social: {
				github: 'https://github.com/siguici',
			},
			editLink: {
				baseUrl: 'https://github.com/siguici/siguici.github.io/edit/0.x/src/content/docs/'
			},
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Getting started',
					items: [
						{ label: 'Quickstart', link: '/start/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});