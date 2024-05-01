import { full_body_scan_with_low_dose_radiation } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { type request_ctx_T } from 'rebuildjs/server'
import { sticky__dl_tree_props_ } from '../../sticky/index.js'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...full_body_scan_with_low_dose_radiation,
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## The Purpose`, [
		`The scan stands on the frontline of preventive medicine. Its mission? Early detection of health anomalies. Among the array of conditions it can reveal are:`,
		`- Early-stage cancers`,
		`- Cardiac diseases`,
		`- Bone irregularities`].join(nl)],
	[`## How It Works`, [
		`During the procedure, you'll lie on a scanning table that slides through the machine. The machine rotates around you, capturing numerous X-ray images.  A computer then processes these images to create detailed cross-sections of your body, allowing doctors to examine your organs, bones, & blood vessels for potential issues. The entire process is swift, often concluding within mere minutes.`].join(nl)],
	[`## The Benefits`, [
		`1. Early Detection: Pinpoints diseases in their nascent stages, when they're most amenable to treatment.`,
		`2. Comprehensive Insight: Delivers a holistic health snapshot, potentially uncovering hidden issues.`,
		`3. Non-Invasive: Simple & straightforward, the scan requires no incisions or extended hospital stays.`].join(nl)],
	[`## What is a Full Body Scan?`, [
		`A full body scan is a sophisticated medical imaging technique. It employs low-dose radiation to craft detailed visuals. Of the internal architecture of the human body, encompassing bones, organs, & tissues. The brilliance lies in its "low-dose" approach. Balancing minimal radiation exposure with the acquisition of high-quality images.`].join(nl)],
	[`## Considerations`, [
		`| **Pros**                                  | **Cons**                                            |`,
		`|:------------------------------------------|:----------------------------------------------------|`,
		`| Quick & painless                        | Not a replacement for routine health screenings     |`,
		`| Identifies a broad spectrum of conditions | May lead to unwarranted worry or additional testing |`,
		`| Provides peace of mind                    | Accessibility & cost may be prohibitive for some  |`].join(nl)],
	[`## Who Should Consider It?`, [
		`The scan is particularly beneficial for individuals with a moderate to high risk of certain conditions, owing to genetic predispositions, lifestyle factors, or age. Nonetheless, it's imperative to engage in a dialogue with a healthcare professional to ascertain the appropriateness of a full body scan in your health regimen.`].join(nl)],
	[`## How to Prepare`, [
		`Preparatory steps are straightforward. Potential prerequisites include:`,
		`- Fasting for a few hours pre-scan.`,
		`- Removing metallic objects to prevent image distortion.`].join(nl)],
	[`## Conclusion`, [
		`Full body scans with low-dose radiation stand at the forefront of preventive healthcare, offering a lens into the body's internal state & the potential to catch diseases early. While considerations exist, the value of these scans in a comprehensive health strategy is undeniable. Conversations with healthcare providers can illuminate whether this innovative procedure aligns with your health journey. In the pursuit of wellness, armed with knowledge, we navigate towards a healthier future.`].join(nl)],
])
// @formatter:on
