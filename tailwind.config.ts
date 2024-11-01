import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [],
} satisfies Config
