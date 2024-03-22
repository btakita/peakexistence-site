import { blog_request_ctx__ensure, type blog_request_ctx__ensure_config_T } from '@rappstack/domain--server--blog/ctx'
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
	return ctx
}
