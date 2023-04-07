/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF'
		},
		fontFamily: {
			base: "'Inter', Arial, sans-serif"
		},
		fontSize: {
			cartouche: [
				'3rem',
				{
					lineHeight: '3.6rem',
					fontWeight: '700'
				}
			]
		}
	},
	plugins: []
};
