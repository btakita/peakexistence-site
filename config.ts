import { fa_waves_sine_ } from '@btakita/ui--server--peakexistence/icon'
import { type site_T } from '@rappstack/domain--server/site'
import { type social_T } from '@rappstack/domain--server/social'
import { import_meta_env_ } from 'ctx-core/env'
import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { app_ctx, cwd__set, port__set, src_path__set } from 'relysjs/server'
relement__use(server__relement)
export const site:site_T = {
	website: 'https://peakexistence.com',
	author: 'Dr. Manny Emenike',
	description: 'Experience Your Peak Existence',
	title: 'Peak Existence',
	og_image: '' + fa_waves_sine_(),
}
export const social_a1:social_T[] = []
export function config__init() {
	const port = parseInt(import_meta_env_().PEAKEXISTENCE_PORT) || 4102
	cwd__set(app_ctx, process.cwd())
	src_path__set(app_ctx, process.cwd())
	port__set(app_ctx, port)
	relement__use(server__relement)
}

