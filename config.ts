import { type blog_site_T } from '@rappstack/domain--server--blog/site'
import { type author_T } from '@rappstack/domain--server/site'
import { app_marked__set } from '@rappstack/ui--server/md'
import { import_meta_env_ } from 'ctx-core/env'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import hljs from 'highlight.js'
import js from 'highlight.js/lib/languages/javascript'
import sh from 'highlight.js/lib/languages/shell'
import ts from 'highlight.js/lib/languages/typescript'
import { Marked } from 'marked'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { markedHighlight } from 'marked-highlight'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app_ctx, cwd__set, port__set, src_path__set } from 'relysjs/server'
import { post_mod_a1 } from './article/index.js'
import fa_waves_sine_svg from './icon/fa_waves_sine.svg.file.js'
relement__use(server__relement)
const website = 'https://pe.briantakita.me'
export const dr_manny_emenike = <author_T>{
	'@type': 'Person',
	'@id': url__join(website, '#dr-manny-emenike-Person'),
	name: 'Dr. Manny Emenike',
	url: url__join(website, 'about#dr-manny-emenike'),
	image: 'https://placehold.co/48x48.webp',
	sameAs: [
		'https://www.mannyemenikemd.com'
	],
}
export const brian_takita = <author_T>{
	'@type': 'Person',
	'@id': url__join(website, '#brian-takita-Person'),
	name: 'Brian Takita',
	url: 'https://briantakita.me',
	image: 'https://gravatar.com/avatar/a0599814ceddc2e283792f4e47c57f5e',
	sameAs: [
		'https://briantakita.me#Person',
	],
	a_target_blank: true,
}
export const blog_site:blog_site_T = {
	website,
	author_a1: [dr_manny_emenike, brian_takita],
	description: 'Experience Your Peak Existence',
	title: 'Peak Existence',
	phone: '+18189066900',
	font__meta_props_a1: [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 1 },
		{
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=fallback',
			rel: 'stylesheet'
		},
	],
	favicon: {
		type: 'image/svg+xml',
		href: fa_waves_sine_svg,
	},
	social_image_url: fa_waves_sine_svg,
	color_scheme_vars: {
		light: {
			'--color-fill': '251,251,251',
			'--color-text-base': '25,25,25',
			'--color-text-light': '102,102,102',
			'--color-accent': '0,108,172',
			'--color-accent-light': '0,130,206',
			'--color-card': '230,230,230',
			'--color-card-muted': '205,205,205',
			'--color-border': '223,223,223',
		},
		dark: {
			'--color-fill': '25,25,25',
			'--color-text-base': '234,237,243',
			'--color-text-light': '153,153,153',
			'--color-accent': '255,107,1',
			'--color-accent-light': '204,86,1',
			'--color-card': '52,63,96',
			'--color-card-muted': '138,51,2',
			'--color-border': '76,76,76',
		},
	},
	google_site_verification: import_meta_env_().PUBLIC_GOOGLE_SITE_VERIFICATION,
	gtag_id: 'G-F2F171MSE3',
	body_class: class_(),
	post_mod_a1,
	social_a1: [],
	page__post_count: 10,
	home__post_count: 1,
}
export function config__init() {
	const port = parseInt(import_meta_env_().PEAKEXISTENCE_PORT) || 4103
	cwd__set(app_ctx, process.cwd())
	src_path__set(app_ctx, process.cwd())
	port__set(app_ctx, port)
	marked__init()
	relement__use(server__relement)
}
function marked__init() {
	hljs.registerLanguage('js', js)
	hljs.registerLanguage('sh', sh)
	hljs.registerLanguage('shell', sh)
	hljs.registerLanguage('ts', ts)
	const marked = new Marked(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang, info) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext'
				return hljs.highlight(code, { language }).value
			}
		}))
	marked.use(gfmHeadingId())
	app_marked__set(app_ctx, marked)
}
