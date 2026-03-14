import './index.css'
import { server__relement } from 'relementjs/server'
import { relement__use } from 'relementjs'
relement__use(server__relement)
import { home__doc_html_ } from '@btakita/ui--server--peakexistence/home'
import { sitemap__xml_ } from '@btakita/ui--server--peakexistence/sitemap'
import { text_response__new, xml_response__new } from '@rappstack/domain--server/response'
import { Elysia } from 'elysia'
import { middleware_ } from 'rebuildjs/server'
import { html_response__new } from 'relysjs/server'
import { blog_site } from '../config.js'
import { peakexistence_request_ctx__ensure } from '../ctx/index.js'
const robots_txt = `
User-agent: *
Allow: /
Sitemap: ${new URL('sitemap.xml', blog_site.website).href}
`.trim()
export default middleware_(middleware_ctx=>
	new Elysia({
		name: 'root_routes'
	})
		.get('/', async context=>{
			const ctx = peakexistence_request_ctx__ensure(middleware_ctx, context, { blog_site })
			return html_response__new(home__doc_html_({ ctx }))
		})
		.get('/robots.txt', ()=>
			text_response__new(robots_txt))
		.get('/sitemap.xml', async context=>{
			const ctx = peakexistence_request_ctx__ensure(
				middleware_ctx,
				context,
				{ blog_site })
			return xml_response__new(sitemap__xml_({ ctx }))
		})
)
