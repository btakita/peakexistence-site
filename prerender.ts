import { cloudflare_export_ } from 'relysjs/server/export/cloudflare'
const base_url = process.env.PRERENDER_BASE || 'http://localhost:4103'
const { exported, errors } = await cloudflare_export_({
	base_url,
	site_url: 'https://pe.briantakita.me',
	out_dir: 'dist/browser',
	sitemap: true,
	extra_routes: ['/robots.txt'],
	wrangler: { name: 'peakexistence' },
})
console.info(`Exported ${exported.length} files`)
const fatal_errors = errors.filter((e: string) => !e.includes('404'))
if (fatal_errors.length > 0) {
	console.error(`${fatal_errors.length} fatal errors:`, fatal_errors)
	process.exit(1)
}
if (errors.length > 0) {
	console.warn(`${errors.length} non-fatal errors (404s):`, errors)
}
