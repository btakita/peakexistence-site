import { type blog_site_T } from '@rappstack/domain--server--blog/site'
import { import_meta_env_ } from 'ctx-core/env'
import { class_ } from 'ctx-core/html'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app_ctx, cwd__set, port__set, src_path__set } from 'relysjs/server'
import fa_waves_sine_svg from './icon/fa_waves_sine.svg.file.js'
import { post_mod_a1 } from './article/index.js'
relement__use(server__relement)
export const blog_site:blog_site_T = {
	website: 'https://pe.peakexistence.com',
	author: 'Dr. Manny Emenike',
	author_img_url: 'https://placehold.co/48x48.webp',
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
		href: fa_waves_sine_svg
	},
	social_image_url: fa_waves_sine_svg,
	light_and_dark_mode: true,
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
	relement__use(server__relement)
}

