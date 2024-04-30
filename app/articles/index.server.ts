import '../index.css'
import './index.css'
import { post__doc_html_, posts__doc_html_ } from '@btakita/ui--server--peakexistence/post'
import { page_num_ } from '@rappstack/domain--server--blog/page'
import { blog_post_slug_or_page_num__set } from '@rappstack/domain--server--blog/post'
import { blog_post__estimate_read_minutes__wait } from '@rappstack/ui--server--blog/post'
import { Elysia } from 'elysia'
import { html_response__new, middleware_ } from 'relysjs/server'
import { blog_site } from '../../config.js'
import { sticky__breadcrumbs__nav_class } from '../../css/index.js'
import { peakexistence_request_ctx__ensure } from '../../ctx/index.js'
export default middleware_(middleware_ctx=>
	new Elysia({
		name: 'articles_routes'
	})
		.get('/articles', async context=>{
			const ctx = peakexistence_request_ctx__ensure(
				middleware_ctx,
				context,
				{ blog_site })
			return html_response__new(posts__doc_html_({ ctx }))
		})
		.get('/articles/:slug_or_page_num', async context=>{
			const { params: { slug_or_page_num } } = context
			const ctx = peakexistence_request_ctx__ensure(
				middleware_ctx,
				context,
				{ blog_site })
			blog_post_slug_or_page_num__set(ctx, slug_or_page_num)
			return html_response__new(
				page_num_(ctx)
					? posts__doc_html_({ ctx })
					: await blog_post__estimate_read_minutes__wait(ctx)
						.then(()=>post__doc_html_({ ctx, breadcrumbs__nav_class: sticky__breadcrumbs__nav_class })))
		}))
