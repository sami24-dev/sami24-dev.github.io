/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
	theme: {
		extend: {
			fontSize: {
				'10xl': '8rem',
				'12xl': '10rem'
			},
			fontFamily: {
				JetBrains: ['JetBrains Mono', 'monospace'],
				poppins: ['Poppins', 'sans-serif'],
				Custom: ['Eczar', 'serif', 'Oswald', 'sans-serif']
			},
			colors: {
				'blue-zodiac': {
					50: '#eff8ff',
					100: '#dbeefe',
					200: '#bfe3fe',
					300: '#93d2fd',
					400: '#60b8fa',
					500: '#3b99f6',
					600: '#247cec',
					700: '#1d65d8',
					800: '#1e52af',
					900: '#1e478a',
					950: '#132546'
				},
				dark: '#132546',
				dark900: '#1e478a',
				dark800: '#1e52af',
				light: '#f4f3fa',
				light100: '#dbeefe',
				light400: '#60b8fa',
				light500: '#3b99f6',
				customTextLight: '#eff8ff',
				customTextDark: '#1e478a',
				customBorderLight:'#bfe3fe',
				customBorderDark: '#3b99f6',
				customBgLight: '#222436',
				customBgDark: '#1e2030',
				customShadowLight: '#222436',
				customShadowDark: '#1e2030',
			},
			width: {
				19: '4.375rem',
				18: '4.0625rem',
				15: '3.75rem',
				13: '3.125rem'
			},
			height: {
				13: '3.125rem',
				17: '4.2',
				19: '4.375rem',
				150: '69.5rem'
			},
			left: {
				'left-61': '60%'
			}
		}
	},
	plugins: [
		require('tailwindcss'),
    	require('autoprefixer'),
	]
}
