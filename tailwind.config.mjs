/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				roboto : ['Roboto', 'sans-serif'],
				"roboto-slab" : ["Roboto Slab"]
			},
			colors : {
				rose : '#FFBDBD',
				violet : '#3A1BFF',
				"bleu-ciel" : '#0CC4FF' ,
				jaune : '#FFE700',
				vert : '#00FD93',
				"noir-100" : '#010409',
				"noir-80" : '#1A1A1A',
				"noir-60" : '#161616',
				"jaune-transparent" : '#FFE70010',
				"violet-transparent" : "#3A1BFF10"
			}
		},
	},
	plugins: [],
}
