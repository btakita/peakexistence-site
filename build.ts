import { preprocess } from '@ctx-core/preprocess'
import { rebuild_tailwind_plugin_ } from '@rebuildjs/tailwindcss'
import cssnano from 'cssnano'
import { import_meta_env_ } from 'ctx-core/env'
import { is_entry_file_ } from 'ctx-core/fs'
import { type Plugin } from 'esbuild'
import esmfile_ from 'esbuild-plugin-esmfile'
import { object_store_asset_esbuild_plugin_ } from 'esbuild-plugin-object-store-asset'
import { esmcss_esbuild_plugin_ } from 'esmcss'
import { readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import {
	type relysjs__build_config_T,
	relysjs__ready__wait,
	relysjs_browser__build,
	relysjs_server__build, run
} from 'relysjs/server'
import { config__init } from './config.js'
export async function build(config?:relysjs__build_config_T) {
	config__init()
	const rebuild_tailwind_plugin = rebuild_tailwind_plugin_({
		postcss_plugin_a1_: tailwindcss_plugin=>[
			tailwindcss_plugin as never,
			cssnano({ preset: 'default' })
		],
	})
	const preprocess_plugin = preprocess_plugin_()
	const esmfile = esmfile_()
	const object_store_asset = object_store_asset_esbuild_plugin_({
		asset_base_url: import_meta_env_().ASSET_BASE_URL,
	})
	await Promise.all([
		run(async ()=>{
			try {
				return relysjs_browser__build({
					...config ?? {},
					publicPath: '/',
					conditions: ['style'],
					plugins: [
						object_store_asset,
						esmfile,
						rebuild_tailwind_plugin,
						preprocess_plugin,
					],
				})
			} finally {
				console.info('relysjs_browser__build|done')
			}
		}),
		run(async ()=>{
			try {
				return relysjs_server__build({
					...config ?? {},
					target: 'es2022',
					external: await server_external_(),
					minify: false,
					publicPath: '/',
					conditions: ['style'],
					plugins: [
						object_store_asset,
						esmfile,
						esmcss_esbuild_plugin_(),
						rebuild_tailwind_plugin,
						preprocess_plugin,
					],
				})
			} finally {
				console.info('relysjs_server__build|done')
			}
		}),
		relysjs__ready__wait(300_000),
	])
}
async function server_external_() {
	const app_dir = dirname(new URL(import.meta.url).pathname)
	const root_nm = join(app_dir, '..', '..', 'node_modules')
	const local_nm = join(app_dir, 'node_modules')
	const [root_files, local_files] = await Promise.all([
		readdir(root_nm).catch(()=>[]),
		readdir(local_nm).catch(()=>[]),
	])
	const all_files = [...new Set([...root_files, ...local_files])]
	return [
		...all_files
			.filter(file=>file !== '@btakita' && file !== '@rappstack')
			.map(file=>file[0] === '@' ? file + '/*' : file),
		'bun',
		'bun:*'
	]
}
if (is_entry_file_(import.meta.url, process.argv[1])) {
	build({
		rebuildjs: { watch: false },
		relysjs: { app__start: false }
	}).then(()=>process.exit(0))
		.catch(err=>{
			console.error(err)
			process.exit(1)
		})
}
function preprocess_plugin_():Plugin {
	return {
		name: 'preprocess',
		setup(build) {
			if (import_meta_env_().NODE_ENV !== 'production') {
				build.onLoad({ filter: /(\/ctx-core\/?.*|\/hyop\/?.*)$/ }, async ({ path })=>{
					const source = await Bun.file(path).text()
					return {
						contents: preprocess(
							source,
							{ DEBUG: '1' },
							{ type: 'js' }),
						loader: 'ts'
					}
				})
			}
		}
	}
}
