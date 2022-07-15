/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			backgroundImage: {
				blur: 'url(/src/assets/blur-background.png)'
			},
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},
			colors: {
				rose: {
					300: '#FF9F9F',
				},
				blue: {
					900: '#00002C',
					800: '#000032',
					500: '#81D8F7',
				},
				green: {
					300: '#00B37E',
					500: '#00875F',
					700: '#015F43',
				},
				gray: {
					100: '#E1E1E6',
					200: '#C4C4CC',
					300: '#CDCDC7',
					400: '#8D8D99',
					500: '#323238',
					600: '#202024',
					700: '#121214',
					900: '#09090A',
				},
			},
		},
	},
	plugins: [],
}
