import { bone_marrow_aspiration } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { md__raw_ } from '@rappstack/ui--any/md'
import { nl } from '@rappstack/ui--any/string'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'rebuildjs/server'
import { mobile_hidden__span_ } from '../../responsive/index.js'
import { sticky__dl_tree_props_ } from '../../sticky/index.js'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...bone_marrow_aspiration,
	title: 'Understanding Bone Marrow Aspiration',
	description: `Bone marrow aspiration offers a window into the body's inner workings at a cellular level. This procedure is a critical tool in diagnosing a range of hematological conditions. From leukemia to various forms of anemia & beyond. `
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ md__raw_(ctx,[
	`Bone marrow aspiration is a diagnostic procedure. That involves extracting a small sample of the bone marrow. The soft, spongy tissue found within the cavities of certain bones. This tissue is a vital component of the body's hematopoietic system. Responsible for producing blood cells:`,
	`- red blood cells`,
	`- white blood cells`,
	`- platelets`].join(nl))
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## Why Bone Marrow Aspiration is Done`, [
		`Doctors may order a bone marrow aspiration to:`,
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Diagnose Blood Disorders`, [
				`Helps identify problems with the production of red blood cells, white blood cells, or platelets. Examples include anemia, leukemia, & other blood cancers.`].join(nl)],
			[`### Detect Cancer`, [
				`It can reveal if cancer from another area of the body has spread to the bone marrow.`].join(nl)],
			[`### Monitor Treatment Effectiveness`, [
				`Assess how well treatments for blood disorders or cancers are working.`].join(nl)],
			[`### Investigate ${mobile_hidden__span_([`Unexplained `])}Symptoms`, [
				`It's often used when other tests cannot identify the cause of fevers, fatigue, or weakness.`].join(nl)],
			[`### Diagnostic Clarity`, [
				`The primary purpose of bone marrow aspiration is diagnostic. The procedure allows for the detailed examination of marrow cells. Aiding in the diagnosis of a wide array of diseases affecting the blood & bone marrow. It identifies conditions such as:`,
				`- leukemia`,
				`- lymphoma`,
				`- multiple myeloma`,
				`- myelodysplastic syndromes`,
				``,
				`The procedure also plays a crucial role in detecting infections. And the presence of other abnormal cells.`].join(nl)],
			[`### Monitoring & Management`, [
				`Bone marrow aspiration enables monitoring the progress of known conditions. And measuring the effectiveness of treatments. For patients undergoing chemotherapy or other targeted therapies. Periodic aspirations can provide a clear picture of response & recovery. Guiding further treatment decisions & adjustments.`].join(nl)],
		])
	].join(nl)],
	[`## The Procedure: A Closer Look`, [
		`Performed by a specialized medical professional. The procedure often targets the marrow within the hipbone or breastbone. Under local anesthesia to minimize discomfort. A needle inserted into the bone draws out a sample of marrow. The process is swift, usually completed within a few minutes. It provides invaluable insights into the health & functionality of the patient's marrow.`,
		dl_tree_({
			ctx,
			dl_class: '[counter-reset:_order]',
			dt_class: class_('[&>h3]:before:[counter-increment:order]', '[&>h3]:before:content-[counter(order)_\'._\']')
		}, ()=>[
			[`### Location`, [
				`Commonly performed on the back of the hip bone (pelvis), less often on the breastbone (sternum).`].join(nl)],
			[`### Numbing`, [
				`The area is thoroughly cleaned, & local anesthetic numbs the skin & the outer surface of the bone.`].join(nl)],
			[`### Aspiration`, [
				`A special needle inserted through the bone into the bone marrow cavity. A syringe withdraws a small amount of liquid bone marrow.`].join(nl)],
			[`### Biopsy`, [
				`Often a bone marrow biopsy is also done. This involves removing a tiny, solid core of bone marrow tissue.`].join(nl)],
		])].join(nl)],
	[`## What to Expect`, [
		`Despite its importance, a bone marrow aspiration procedure may evoke apprehension. Understanding what to expect:`,
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Preparation`, [
				`Bone Marrow Aspiration requires little preparation. Though certain medications should be avoided before the procedure.`].join(nl)],
			[`### During the Procedure`, [
				`The area around the aspiration site is numbed. While patients may feel pressure, pain is typically minimal.`].join(nl)],
			[`### Post-Procedure`, [
				`Recovery is quick, with patients able to resume most activities shortly after. Some soreness at the site of aspiration may occur but generally subsides within a few days.`].join(nl)],
			[`### Results`, [
				`Sample analysis occurs in a lab. Your doctor will discuss the results with you, usually within a week or two.`].join(nl)],
		])
	].join(nl)],
	[`## What the Results Can Reveal`, [
		`Bone marrow aspiration provides crucial information about your blood cells & bone marrow function. Aiding in the diagnosis, management, & monitoring of various conditions.`].join(nl)],
	[`## Innovations & Advances${mobile_hidden__span_([` in Bone Marrow Aspiration`])}`, [
		`The field of bone marrow aspiration is evolving. With advances in technique & technology. Enhancing both the efficacy & comfort of the procedure. Improved needle designs & aspiration methods have reduced discomfort. And increased the yield of viable cells for analysis. Developments in molecular & genetic testing of marrow samples enable personal medicine. Allowing tailored treatments with unprecedented precision & efficacy.`].join(nl)],
	[`## Conclusion`, [
		`Bone marrow aspiration provides a direct glimpse into the marrow's function. This procedure plays an indispensable role in diagnosing, monitoring, & managing hematological diseases. Bone marrow aspiration continues to refine our understanding of blood disorders. Guiding the way to more effective treatments & saving lives.`].join(nl)],
])
// @formatter:on
