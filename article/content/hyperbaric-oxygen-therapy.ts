import { hyperbaric_oxygen_therapy } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { type request_ctx_T } from 'rebuildjs/server'
import { mobile_hidden__span_ } from '../../responsive/index.js'
import { sticky__dl_tree_props_ } from '../../sticky/index.js'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...hyperbaric_oxygen_therapy,
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## Benefits${mobile_hidden__span_([` of Exercise with Oxygen Therapy`])}`, [
		`HBOT enhances the body’s immune response to fight bacterial & fungal infections. Aiding in the recovery from severe soft tissue infections.`].join(nl)],
	[`## Conditions Treated${mobile_hidden__span_([` with HBOT`])}`, [
		`HBOT has shown remarkable benefits in treating various medical conditions. Including but not limited to:`,
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Radiation Injuries`, [
				`HBOT can alleviate the side effects of radiation therapy in cancer patients. Promoting tissue healing & reducing inflammation.`].join(nl)],
			[`### Chronic Wounds`, [
				`HBOT stimulates the growth of new blood vessels. And enhances the body’s ability to heal chronic wounds, such as:`,
				`- diabetic foot ulcers`,
				`- non-healing surgical wounds`,
				`- radiation-induced tissue injuries`].join(nl)],
			[`### Carbon Monoxide Poisoning`, [
				`HBOT helps eliminate carbon monoxide from the bloodstream. Reducing the risk of long-term complications associated with carbon monoxide poisoning.`].join(nl)],
			[`### Non-Healing Bone Fractures`, [
				`HBOT aids in bone repair & regeneration. Accelerating the healing process for non-healing bone fractures.`].join(nl)],
		])
	].join(nl)],
	[`## Your HBOT Experience:`, [
		`During your HBOT sessions at Dr. Manny Emenike’s Internal Medicine practice, you can expect a warm & supportive atmosphere. Our team will guide you through the entire process, addressing any questions or concerns you may have.`,
		``,
		`HBOT sessions last between 60 & 90 minutes. During which you can relax inside the hyperbaric chamber. Many patients find this time to be an excellent opportunity to unwind, read, or listen to music.`,
		``,
		`The number of HBOT sessions varies on your specific medical condition & response to treatment. Dr. Manny Emenike will create your personalized treatment plan. To ensure the best possible outcome for you.`,
		`Athletes have found tremendous benefits in HBOT treatments. Professional athletes & sports organizations incorporate hyperbaric chambers into their training regiment. The increased oxygen promotes blood flow & waste removal, expediting recovery time. The heightened oxygen levels enhance brain function & decision-making abilities. Providing athletes with improved focus & quicker decision-making during games. HBOT’s elevated oxygen levels accelerate healing time from injuries. Enabling athletes a swift return to training & competition.`,
		``,
		`Prominent athletes regularly use hyperbaric chambers for recovery, training, enhancement, & well-being. Such as:`,
		`- Steve Weatherford (NFL)`,
		`- Terrell Owens (NFL)`,
		`- Rashad Jennings (NFL)`,
		`- Matt Kemp (MLB)`,
		`- Adrian Beltre (MLB)`,
		`- Tiger Woods (PGA)`,
		`- Urijah Faber (UFC)`,
		`- Michael Phelps (Olympic Swimmer)`].join(nl)],
])
// @formatter:on
