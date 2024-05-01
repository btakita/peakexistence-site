import { intercostal_nerve_block } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { md__raw_ } from '@rappstack/ui--any/md'
import { nl } from '@rappstack/ui--any/string'
import { type request_ctx_T } from 'rebuildjs/server'
import { sticky__dl_tree_props_ } from '../../css/index.js'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...intercostal_nerve_block
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ md__raw_(ctx,
	`An Intercostal Nerve Block is a non-surgical procedure. A simple injection. It targets pain. This pain stems from the chest or upper abdominal area. Doctors use this block to diagnose or treat pain.`)
+	dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
		[`## What Is It?`, [
			`An Intercostal Nerve Block involves local anesthetics & Corticosteroids. This medicine gets injected near the ribs. It numbs nerve pain in the chest or abdomen.`].join(nl)],
		[`## How Does It Work?`, [
			`The block targets intercostal nerves. These nerves lie between the ribs. They send pain signals to the brain. The injection stops these signals. Thus, it reduces pain.`].join(nl)],
		[`## Why Use It?`, [
			`Patients seek this treatment for various reasons:`,
			`- To manage chest wall pain.`,
			`- To alleviate pain from shingles.`,
			`- To reduce pain after surgery in the chest or upper abdomen.`].join(nl)],
		[`## Benefits`, [
			`- Pain relief: Effective for acute pain from rib fractures, chest wall injuries, or shingles (postherpetic neuralgia).`,
			`- Pain management after surgery: Helps manage pain after chest or upper abdominal surgeries.`,
			`- Diagnostic tool: Can help pinpoint the source of chronic pain.`].join(nl)],
		[`## Risks`, [
			`- Infection.`,
			`- Bleeding.`,
			`- Rarely, lung puncture.`].join(nl)],
		[`## Conclusion`, [
			`An Intercostal Nerve Block offers a path to relief for those battling a persistent chest or abdominal pain. It's simple & effective. Yet, it's not without risks. Discuss with your doctor.`,
			``,
			`Remember, this procedure is a tool. It's part of a broader pain management strategy. Always consider the full spectrum of your health needs.`].join(nl)],
	])
// @formatter:on
