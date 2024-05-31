import '../index.css'
import { tag__doc_html_, tags__doc_html_ } from '@btakita/ui--server--peakexistence/tag'
import { tag__set } from '@rappstack/domain--server--blog/tag'
import { Elysia } from 'elysia'
import { middleware_ } from 'rebuildjs/server'
import { html_response__new } from 'relysjs/server'
import { blog_site } from '../../config.js'
import { peakexistence_request_ctx__ensure } from '../../ctx/index.js'
export default middleware_(middleware_ctx=>
	new Elysia({
		name: 'root_routes'
	})
		.get('/tags', async context=>{
			const ctx = peakexistence_request_ctx__ensure(
				middleware_ctx,
				context,
				{ blog_site })
			return html_response__new(tags__doc_html_({ ctx }))
		})
		.get('/tags/:tag', async context=>{
			const { params: { tag } } = context
			const ctx = peakexistence_request_ctx__ensure(
				middleware_ctx,
				context,
				{ blog_site })
			tag__set(ctx, tag)
			return html_response__new(tag__doc_html_({ ctx }))
		}))
