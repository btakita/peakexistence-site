import { transcranial_magnetic_stimulation } from '@btakita/domain--server--peakexistence/feature'
import { sticky_h2__dl_tree_props_ } from '@btakita/ui--server--peakexistence/sticky'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { footnote__sup_, footnote__sup__sort } from '@rappstack/ui--server--blog/footnote'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...transcranial_magnetic_stimulation,
	title: 'Transcranial Magnetic Stimulation (TMS): A Modern Approach to Treating Depression & Other Disorders',
	description: `Transcranial Magnetic Stimulation (TMS) is a noninvasive brain stimulation technique. That has gained significant attention for its effectiveness in treating various neuropsychiatric conditions. Particularly major depressive disorder (MDD) and treatment-resistant depression (TRD). This article delves into the mechanisms, clinical applications, efficacy, & safety of TMS. Highlighting its role as a promising therapeutic modality.`
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky_h2__dl_tree_props_ }, ()=>[
	[`## Mechanism of Action`, [
		`TMS operates by generating a rapidly changing magnetic field. Through an electromagnetic coil placed against the scalp. This magnetic field induces small electric currents in the brain. Targeting the superficial layers of the cerebral cortex. These currents modulate neuronal activity, leading to changes in brain function. The repeated stimulation is known as repetitive TMS (rTMS). TMS can produce lasting changes in brain activity. Through mechanisms akin to synaptic plasticity. Such as long-term potentiation${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx),ref_1_5_footnote__sup_(ctx)])}.`]],
	[`## Clinical Applications`, ()=>[
		[`### Major Depressive Disorder (MDD)`, [
			`TMS is FDA-approved for the treatment of MDD. Particularly in patients who have not responded to conventional treatment like antidepressants & psychotherapy. The treatment involves daily sessions over several weeks. With each session lasting between 20 to 50 minutes. The electromagnetic coil is typically positioned over the dorsolateral prefrontal cortex. A brain region implicated in mood regulation${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}.`]],
		[`### Obsessive-Compulsive Disorder (OCD)`, [
			`TMS has received FDA approval for treating OCD. The deep TMS (dTMS) variant uses a different coil to stimulate deeper brain regions. Showing promise in alleviating OCD symptoms${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_2_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}.`]],
		[`### Other Potential Uses`, [
			[
				`Research is ongoing to explore the efficacy of TMS in treating other conditions such as:`,
				``,
				`- migraines`,
				`- smoking cessation`,
				`- bipolar disorder`,
				`- post-traumatic stress disorder (PTSD)`,
				`- epilepsy`,
				``,
				`While these applications are still under investigation, preliminary results are encouraging${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}.`,
			].join(nl),]],]],
	[`## Efficacy`, [
		`Clinical studies show TMS reduces depressive symptoms. About 50% to 60% of patients with treatment-resistant depression. With approximately one-third achieving full remission. These effects, while not permanent, can last for several months. Many patients opt for maintenance sessions to prolong the benefits${footnote__sup__sort([ref_1_3_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx),ref_1_5_footnote__sup_(ctx)])}.`]],
	[`## Safety & Side Effects`, [
		[
			`TMS is generally well-tolerated. The most common side effects are mild headaches & scalp discomfort during or after the procedure. Serious side effects, such as seizures, are rare but can occur. Particularly in individuals with a history of epilepsy or other neurological conditions. Unlike electroconvulsive therapy (ECT), TMS${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx),ref_1_5_footnote__sup_(ctx)])}:`,
			``,
			`- does not require anesthesia`,
			`- does not cause memory loss`,
			`- does not cause cognitive impairment`,
		].join(nl),]],
	[`## Future Directions`, [
		`The field of TMS is rapidly evolving. With ongoing research aimed at optimizing treatment protocols & expanding its clinical applications. Recent innovations include:`,
		``,
    `- synchronizing TMS with patients' intrinsic brain oscillatory rhythms`,
    `- using neuroimaging biomarkers to predict treatment response`,
		``,
    `These advancements hold the potential to enhance the efficacy & precision of TMS. Making TMS a more versatile tool in the treatment of neuropsychiatric disorders${footnote__sup__sort([ref_1_2_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx),ref_1_5_footnote__sup_(ctx)])}.`,]],
	[`## Concussion`, [
		`Transcranial Magnetic Stimulation (TMS) represents a significant advancement. In the treatment of depression & other neuropsychiatric conditions. Its noninvasive & provides relief for patients who have not responded to traditional therapies. Making TMS a valuable addition to the therapeutic arsenal. TMS is poised to play an increasingly important role in mental health care.`]],
])
// @formatter:on
function ref_1_1_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'r1_1'
	}, [
		tb_a_({
			href: 'https://www.mayoclinic.org/tests-procedures/transcranial-magnetic-stimulation/about/pac-20384625',
			nofollow: true,
			wrap: true,
		}, 'Transcranial magnetic stimulation')
	])
}
function ref_1_2_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'r1_2'
	}, [
		tb_a_({
			href: 'https://journals.lww.com/practicalpsychiatry/fulltext/2020/09000/transcranial_magnetic_stimulation__a_clinical.11.aspx',
			nofollow: true,
			wrap: true,
		}, 'Transcranial Magnetic Stimulation: A Clinical Primer for Nonexperts')
	])
}
function ref_1_3_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'r1_3'
	}, [
		tb_a_({
			href: 'https://www.health.harvard.edu/blog/transcranial-magnetic-stimulation-for-depression-2018022313335',
			nofollow: true,
			wrap: true,
		}, 'Transcranial magnetic stimulation (TMS): Hope for stubborn depression')
	])
}
function ref_1_4_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'r1_4'
	}, [
		tb_a_({
			href: 'https://focus.psychiatryonline.org/doi/10.1176/appi.focus.20210021',
			nofollow: true,
			wrap: true,
		}, 'Psychiatric Applications of Repetitive Transcranial Magnetic Stimulation')
	])
}
function ref_1_5_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'r1_5'
	}, [
		tb_a_({
			href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6592198/',
			nofollow: true,
			wrap: true,
		}, 'Transcranial magnetic stimulation: A review of its evolution and current applications')
	])
}
