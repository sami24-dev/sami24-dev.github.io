/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				'10xl': '8rem', // Añade un tamaño de fuente personalizado '7xl'
				'12xl': '10rem', // Añade otro tamaño de fuente personalizado '8xl'
			  },
			  fontFamily: {
				JetBrains: ['JetBrains Mono', 'monospace'],
				poppins: ['Poppins', 'sans-serif'],
			  },
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
				},
				dark: '#38304b',
				dark900: '#4f446b',
				dark700: '#745fa3',
				light: '#f4f3fa',
				light400: '#a9a1d8',
				light500: '#9789cb',
			},
			width: {
				19: '4.375rem',
				18: '4.0625rem',
				15: '3.75rem',
				13: '3.125rem'
			},
			height: {
				13: '3.125rem',
				19: '4.375rem',
				150: '69.5rem'
			},
			left: {
				'left-61': '60%'
			}
		}
	},
	plugins: []
}
