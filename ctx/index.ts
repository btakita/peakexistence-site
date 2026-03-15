import {
	AboutPage_id_ref_,
	ContactPage_id_ref_,
	Organization_id_ref_,
	site__author_id_ref_a1_,
	WebSite_id_ref_
} from '@btakita/domain--server--peakexistence/jsonld'
import { sticky__top__nav_class } from '@btakita/ui--server--peakexistence/sticky'
import { post_mod_a1__set } from '@rappstack/domain--any--blog/post'
import { post_path_prefix__set } from '@rappstack/domain--any--blog/post'
import { blog_site__set, type blog_site_T, site__post_mod_a1_ } from '@rappstack/domain--server--blog/site'
import { marked__set } from '@rappstack/ui--any/md'
import { breadcrumbs__nav_class__set } from '@rappstack/ui--server--blog/breadcrumb'
import { app_marked_ } from '@rappstack/ui--server/md'
import { type middleware_ctx_T } from 'rebuildjs/server'
import { request_ctx__ensure, request_, request_url_ } from 'relysjs/server'
export type peakexistence_request_ctx__ensure_config_T = {
	blog_site:blog_site_T
}
/**
 * Ensures a request context is created for Elysia routes with site config.
 *
 * Uses relysjs/server request_ctx__ensure directly (Elysia-based) instead of
 * blog_request_ctx__ensure which depends on rhonojs/server (Hono-based).
 * Eagerly initializes request_ and request_url_ so the be entries exist
 * before any other code can create conflicting versions.
 */
export function peakexistence_request_ctx__ensure(
	middleware_ctx:middleware_ctx_T,
	context:{
		request:Request
		store:{ [x:string]:unknown }
	},
	config:peakexistence_request_ctx__ensure_config_T
) {
	const ctx = request_ctx__ensure(middleware_ctx, context)
	// Eagerly populate request bes with Elysia-based implementations
	request_(ctx)
	request_url_(ctx)
	blog_site__set(ctx, config.blog_site)
	post_mod_a1__set(ctx, site__post_mod_a1_(ctx))
	post_path_prefix__set(ctx, 'articles')
	marked__set(ctx, app_marked_(ctx))
	breadcrumbs__nav_class__set(ctx, sticky__top__nav_class)
	site__author_id_ref_a1_(ctx)
	WebSite_id_ref_(ctx)
	Organization_id_ref_(ctx)
	AboutPage_id_ref_(ctx)
	ContactPage_id_ref_(ctx)
	return ctx
}
