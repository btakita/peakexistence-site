import { sticky__top__nav_class } from '@btakita/ui--server--peakexistence/sticky'
import { post_path_prefix__set } from '@rappstack/domain--any--blog/post'
import { blog_request_ctx__ensure, type blog_request_ctx__ensure_config_T } from '@rappstack/domain--server--blog/ctx'
import { marked__set } from '@rappstack/ui--any/md'
import { breadcrumbs__nav_class__set } from '@rappstack/ui--server--blog/breadcrumb'
import { app_marked_ } from '@rappstack/ui--server/md'
import { type middleware_ctx_T } from 'rebuildjs/server'
export function peakexistence_request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	config:blog_request_ctx__ensure_config_T
) {
  const ctx = blog_request_ctx__ensure(middleware_ctx, context, config)
	post_path_prefix__set(ctx, 'articles')
	marked__set(ctx, app_marked_(ctx))
	breadcrumbs__nav_class__set(ctx, sticky__top__nav_class)
	return ctx
}
