/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				martinique: {
					50: '#f4f3fa',
					100: '#e8e8f7',
					200: '#d7d6ef',
					300: '#bfbce5',
					400: '#a9a1d8',
					500: '#9789cb',
					600: '#8770bb',
					700: '#745fa3',
					800: '#5e4f84',
					900: '#4f446b',
					950: '#38304b'
				}
			},
			width: {
				19: '4.375rem',
				18: '4.0625rem',
				15: '3.75rem',
				13: '3.125rem'
			},
			height: {
				13: '3.125rem',
				19: '4.375rem'
			},
			left: {
				'left-61': '60%'
			}
		}
	},
	plugins: []
}
