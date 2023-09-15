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
				"color-1": "#e7dacd",
				"color-2": "#cca071",
				"color-3": "#a07a65",
				"color-4": "#885b43",
				"color-5": "#d4af88",
				"color-6": "#f4dcb3",
			},
		},
	},
	plugins: [],
};
