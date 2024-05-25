import tailwindcss_forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
const { paddingLeft, paddingRight } = (typography() as any).config.theme.typography.base.css[0]['thead th']
const config = <Config>{
	content: [],
	theme: {
		textColor: {
			skin: {
				base: rgb_('--color-text-base'),
				light: rgb_('--color-text-light'),
				accent: rgb_('--color-accent'),
				invert: rgb_('--color-fill'),
			},
		},
		backgroundColor: {
			skin: {
				fill: rgb_('--color-fill'),
				accent: rgb_('--color-accent'),
				invert: rgb_('--color-text-base'),
				card: rgb_('--color-card'),
				'card-muted': rgb_('--color-card-muted'),
			},
		},
		outlineColor: {
			skin: {
				fill: rgb_('--color-accent'),
			},
		},
		borderColor: {
			skin: {
				line: rgb_('--color-border'),
				fill: rgb_('--color-text-base'),
				accent: rgb_('--color-accent'),
			},
			transparent: 'transparent',
		},
		fill: {
			skin: {
				base: rgb_('--color-text-base'),
				accent: rgb_('--color-accent'),
			},
			transparent: 'transparent',
		},
		extend: {
			colors: {
				gray: {
					100: '#FBFBFB',
					200: '#EAEAEA',
					300: '#DFDFDF',
					400: '#999999',
					500: '#7F7F7F',
					600: '#666666',
					700: '#4C4C4C',
					800: '#333333',
					900: '#191919',
				},
				blue: {
					100: '#E6F0FD',
					200: '#CCE2FC',
					300: '#99C5FA',
					400: '#66A9F7',
					500: '#338CF5',
					600: '#0070F4',
					700: '#0064DA',
					800: '#0059C2',
					900: '#004391',
				},
				teal: {
					100: '#E6FFFA',
					200: '#B2F5EA',
					300: '#81E6D9',
					400: '#4FD1C5',
					500: '#3ABAB4',
					600: '#319795',
					700: '#2C7A7B',
					800: '#285E61',
					900: '#234E52',
				},
			},
			boxShadow: {
				xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
				sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
				default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
				md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
				lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
				xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
				inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
				outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
				none: 'none',
			},
			spacing: {
				'9/16': '56.25%',
				'3/4': '75%',
				'1/1': '100%',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.625rem',
				'5xl': '3.25rem',
				'6xl': '5.5rem',
			},
			inset: {
				'1/2': '50%',
				'full': '100%',
			},
			letterSpacing: {
				tighter: '-0.02em',
				tight: '-0.01em',
				normal: '0',
				wide: '0.01em',
				wider: '0.02em',
				widest: '0.4em',
			},
			lineHeight: {
				none: '1',
				tighter: '1.125',
				tight: '1.25',
				snug: '1.375',
				normal: '1.5',
				relaxed: '1.625',
				loose: '2',
				'3': '.75rem',
				'4': '1rem',
				'5': '1.2rem',
				'6': '1.5rem',
				'7': '1.75rem',
				'8': '2rem',
				'9': '2.25rem',
				'10': '2.5rem',
			},
			minWidth: {
				'10': '2.5rem',
				'48': '12rem',
			},
			opacity: {
				'90': '0.9',
			},
			scale: {
				'98': '.98'
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)', },
					'50%': { transform: 'translateY(-5%)', },
				},
			},
			zIndex: {
				'-1': '-1',
			},
			typography: {
				DEFAULT: {
					css: {
						'a': {
							color: 'rgb(var(--color-accent))',
							fontWeight: '500',
							overflowWrap: 'break-word',
							textDecorationStyle: 'dotted',
							textUnderlineOffset: '4px',
						},
						'blockquote': {
							borderLeftColor: 'rgb(var(--color-accent))',
							borderOpacity: '.5',
							fontStyle: 'italic',
							opacity: '.8'
						},
						'code': {
							borderRadius: '.25rem',
							color: 'rgb(var(--color-text-base))',
							display: 'inline-block',
							fontFamily: 'JetBrains Mono,monospace',
							padding: '.25rem',
							wordWrap: 'nowrap'
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						'em': {
							fontStyle: 'italic'
						},
						'figcaption': {
							color: 'rgb(var(--color-text-base))',
							opacity: '.75'
						},
						'figure': {
							marginLeft: 'auto',
							marginRight: 'auto',
						},
						'h1': {
							fontSize: '1.875rem',
							lineHeight: '3rem',
							color: 'rgb(var(--color-text-base))',
							marginBottom: '.75rem'
						},
						'h2': {
							fontSize: '1.5rem',
							lineHeight: '2rem',
							marginTop: '0',
							color: 'rgb(var(--color-text-base))',
							marginBottom: '.5rem'
						},
						'h3': {
							fontSize: '1.25rem',
							lineHeight: '1.75rem',
							color: 'rgb(var(--color-text-base))',
							marginTop: '.25rem',
							marginBottom: '.5rem'
						},
						'h4': {
							fontSize: '1.125rem',
							lineHeight: '1.75rem',
							color: 'rgb(var(--color-text-base))',
							marginTop: '.25rem',
							marginBottom: '.5rem'
						},
						'h5': {
							color: 'rgb(var(--color-text-base))',
							marginTop: '.25rem',
							marginBottom: '.5rem'
						},
						'h6': {
							color: 'rgb(var(--color-text-base))',
							marginTop: '.25rem',
							marginBottom: '.5rem'
						},
						'hr': {
							borderColor: 'rgb(var(--color-border))',
						},
						'img': {
							borderColor: 'rgb(var(--color-border))',
							borderWidth: '2px',
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '.5rem',
						},
						'li': {
							color: 'rgb(var(--color-text-base))',
						},
						'ul > li::marker': {
							color: 'rgb(var(--color-accent))',
						},
						'ol': {
							paddingLeft: '1.5rem',
							color: 'rgb(var(--color-text-base))',
						},
						'p': {
							color: 'rgb(var(--color-text-base))',
						},
						'pre': {
							fontFamily: 'JetBrains Mono,monospace',
							color: 'rgb(var(--color-text-base))',
						},
						'strong': {
							color: 'rgb(var(--color-text-base))',
							fontWeight: '500',
						},
						'summary': {
							color: 'rgb(var(--color-text-base))',
							cursor: 'pointer',
						},
						'table': {
							color: 'rgb(var(--color-text-base))',
						},
						'td': {
							borderColor: 'rgb(var(--color-border))',
							borderWidth: '1px',
						},
						'th': {
							borderColor: 'rgb(var(--color-border))',
							borderWidth: '1px',
							color: 'rgb(var(--color-text-base))',
						},
						'thead th:first-child': { paddingLeft },
						'thead th:last-child': { paddingRight },
						'tbody td:first-child, tfoot td:first-child': { paddingLeft },
						'tbody td:last-child, tfoot td:last-child': { paddingRight },
						'ul': {
							overflowX: 'clip',
							paddingLeft: '2rem',
							color: 'rgb(var(--color-text-base))',
						}
					}
				}
			}
		},
	},
	plugins: [
		tailwindcss_forms,
		typography,
	],
}
export default config
function rgb_(variable_name:string) {
	return `rgb(var(${variable_name}))`
}
