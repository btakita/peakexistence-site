import './index.css'
import { csrf_403_response_ } from '@rappstack/domain--server--auth/auth'
import { site_request_ctx__ensure } from '@rappstack/domain--server/ctx'
import { Elysia } from 'elysia'
import { middleware_ } from 'rebuildjs/server'
import { html_response__new } from 'relysjs/server'
import { logo_image, site, social_a1 } from '../config.js'
export default middleware_(middleware_ctx=>
	new Elysia({
		name: 'root_routes'
	})
		.get('/', async context=>{
			const ctx = site_request_ctx__ensure(middleware_ctx, context, {
				logo_image,
				site,
				social_a1
			})
			if (csrf_403_response_(ctx)) {
				return csrf_403_response_(ctx)
			}
			return html_response__new(
				'<h1 class="font-bold">Hello<h1/>')
		}))
