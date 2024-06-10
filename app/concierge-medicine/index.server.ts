import '../index.css'
import { concierge_medicine__doc_html_ } from '@btakita/ui--server--peakexistence/concierge-medicine'
import { Elysia } from 'elysia'
import { middleware_ } from 'rebuildjs/server'
import { html_response__new } from 'relysjs/server'
import { blog_site } from '../../config.js'
import { peakexistence_request_ctx__ensure } from '../../ctx/index.js'
export default middleware_(middleware_ctx=>
	new Elysia({
		name: 'concierge-medicine_routes'
	})
		.get('/concierge-medicine', async context=>{
			const ctx = peakexistence_request_ctx__ensure(middleware_ctx, context, { blog_site })
			return html_response__new(concierge_medicine__doc_html_({ ctx }))
		}))
