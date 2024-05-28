import { traumatic_brain_injury_concussion_diagnostics_therapy } from '@btakita/domain--server--peakexistence/feature'
import { sticky__dl_tree_props_ } from '@btakita/ui--server--peakexistence/sticky'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { footnote__sup_, footnote__sup__sort } from '@rappstack/ui--server--blog/footnote'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...traumatic_brain_injury_concussion_diagnostics_therapy,
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## Understanding TBI & Concussions`, [
		[
			`A Traumatic Brain Injury (TBI) occurs when an external force causes brain dysfunction. Typically resulting from a:`,
			``,
			`- violent blow or jolt to the head or body`,
			`- from an object penetrating the skull`,
			``,
			`Concussions, a subset of TBI, are often referred to as mild TBIs & result from similar mechanisms. Both conditions can lead to a range of symptoms, including${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}:`,
			``,
			`- physical`,
			`- cognitive`,
			`- emotional`,
			`- sleep-related issues`,
		].join(nl),]],
		[`## Diagnostic Approaches`, ()=>[
			[`### Neurological Examination`, [
				[
					`Diagnosing TBI begins with a thorough neurological examination. This includes:`,
					``,
					`- assessing motor & sensory skills`,
					`- hearing & speech`,
					`- coordination & balance`,
					`- mental status`,
					`- changes in mood or behavior`,
					``,
					`Tools like the Acute Concussion Evaluation (ACE) form help assess individuals who have suffered a mild TBI. Tracking symptoms & recovery over time.`,
				].join(nl),]],
			[`### Imaging Techniques`, [
				`Imaging plays a crucial role in diagnosing TBIs, especially moderate to severe cases. Common imaging techniques include:`,
				``,
				()=>[
					[`#### Computed Tomography (CT) Scans`, [
						`Widely used to detect bleeding, bruising, or swelling in the brain. CT scans provide quick, detailed images that are essential in emergency settings${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_2_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}.`]],
					[`#### Magnetic Resonance Imaging (MRI)`, [
						[
							`Used for more detailed images of brain tissue. Particularly useful in detecting subtle changes & injuries not visible on CT scans. Advanced MRI techniques can identify microscopic injuries & bleeding${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}:`,
							``,
							`- diffusion tensor imaging`,
							`- susceptibility-weighted imaging`,
						].join(nl),]],
					[`### Blood Tests`, [
						`Innovative blood tests examine blood for proteins that indicate brain injury. Such as the Banyan Brain Trauma Indicator (BTI). These tests diagnose concussions & other mild TBIs${ref_1_2_footnote__sup_(ctx)}.`,]],
					[`### Neuropsychological Tests`, [
						[
							`These tests assess cognitive functions such as:`,
							``,
							`- memory`,
							`- concentration`,
							`- information processing`,
							`- executive functioning`,
							``,
							`They are often used alongside imaging to provide a comprehensive evaluation of brain function following a TBI${footnote__sup__sort([ref_1_1_footnote__sup_(ctx),ref_1_4_footnote__sup_(ctx)])}.`,
						].join(nl),]],],]],
			[`## Therapeutic Approaches`, ()=>[
				[`### Rest & Rehabilitation`, [
					`Treatment for TBIs varies based on severity. Mild TBIs often require rest & gradual return to normal activities. Rehabilitation, including physical, occupational, & speech therapies, is crucial for moderate to severe TBIs. To help patients regain function and improve quality of life${footnote__sup__sort([ref_1_2_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx),ref_1_5_footnote__sup_(ctx)])}.`,]],
				[`### Medications`, [
					[
						`Medications may be prescribed to manage symptoms and prevent complications. These include:`,
						``,
						()=>[
							[`#### Diuretics`, [
								`To reduce fluid retention in the brain.`,]],
							[`#### Anti-seizure Drugs`, [
								`To prevent seizures that can cause further brain damage.`,]],
							[`#### Anti-anxiety & Antidepressant Medications`, [
								`To manage emotional and psychological symptoms.`,]],
							[`#### Stimulants`, [
								`To improve attention & awareness in patients experiencing chronic fatigue${footnote__sup__sort([ref_1_2_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx)])}.`,]]
						],
					].join(nl)]],
				[`### Surgery`, [
					`In severe cases, surgery may be necessary to:`,
					``,
          `- address brain bleeds`,
          `- remove clots`,
          `- repair skull fractures`,
					``,
          `Surgical intervention aims to prevent further damage & stabilize the patient${footnote__sup__sort([ref_1_2_footnote__sup_(ctx),ref_1_3_footnote__sup_(ctx)])}.`,]],]],
			[`## Conclusion`, [
				[
					`Traumatic Brain Injury (TBI) & concussions require specialized diagnostic & therapeutic approaches. To manage their complex & varied symptoms. Diagnostics include:`,
					``,
					`- Advanced imaging techniques`,
					`- innovative blood tests`,
					`- comprehensive neuropsychological assessments`,
					``,
					`Treatment involves a combination of:`,
					``,
					`- rest`,
					`- rehabilitation`,
					`- medication`,
					`- in severe cases, surgery`,
				].join(nl),]],]],
])
// @formatter:on
function ref_1_1_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'ref_1_1'
	}, [
		tb_a_({
			href: 'https://www.ninds.nih.gov/health-information/disorders/traumatic-brain-injury-tbi',
			nofollow: true,
			wrap: true,
		}, 'Traumatic Brain Injury (TBI) (nih)')
	])
}
function ref_1_2_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'ref_1_2'
	}, [
		tb_a_({
			href: 'https://www.nyp.org/neuro/brain-spine-trauma/traumatic-brain-injury-tbi/treatment',
			nofollow: true,
			wrap: true,
		}, 'Traumatic Brain Injury (TBI) (NY Presbyterian)')
	])
}
function ref_1_3_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'ref_1_3'
	}, [
		tb_a_({
			href: 'https://my.clevelandclinic.org/health/diseases/8874-traumatic-brain-injury',
			nofollow: true,
			wrap: true,
		}, 'Traumatic Brain Injury (Cleveland Clinic)')
	])
}
function ref_1_4_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'ref_1_4'
	}, [
		tb_a_({
			href: 'https://www.asnr.org/patientinfo/conditions/tbi.shtml',
			nofollow: true,
			wrap: true,
		}, 'Traumatic Brain Injury (TBI) and Concussion')
	])
}
function ref_1_5_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'ref_1_5'
	}, [
		tb_a_({
			href: 'https://www.hennepinhealthcare.org/specialty/traumatic-brain-injury-center/',
			nofollow: true,
			wrap: true,
		}, 'Traumatic Brain Injury Center')
	])
}
