/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./layouts/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				mono: ["IBM Plex Mono", "monospace"],
				serif: ["Petrona", "serif"],
				display: ["Playfair Display", "serif"],
			},
			colors: {
				"color-1": "#bdac86",
				"color-2": "#8d7458",
				"color-3": "#a8835d",
				"color-3": "#81613b",
				"color-5": "#774c3a",
				"color-6": "#8f5e5f",
				"color-7": "#5a2827",
				"color-8": "#5b3630",
				"color-9": "#472f26",
				"color-10": "#43473e",
				"color-11": "#120f12",
				"color-12": "#f1edeb",
			},
		},
	},
	plugins: [],
};
