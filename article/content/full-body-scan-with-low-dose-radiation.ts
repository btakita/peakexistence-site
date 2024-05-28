import { full_body_scan_with_low_dose_radiation } from '@btakita/domain--server--peakexistence/feature'
import { sticky__dl_tree_props_ } from '@btakita/ui--server--peakexistence/sticky'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { footnote__sup_, footnote__sup__sort } from '@rappstack/ui--server--blog/footnote'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...full_body_scan_with_low_dose_radiation,
	description: `Full-body scans using low-dose radiation use computed tomography (CT). To produce detailed images of the internal structures of the body. They are used for a variety of diagnostic & screening purposes. particularly in detecting hidden diseases at an early stage.`
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## What is a Full Body Scan?`, [
		`A full body scan is a sophisticated medical imaging technique. It employs low-dose radiation to craft detailed visuals. Of the internal architecture of the human body, encompassing bones, organs, & tissues. The brilliance lies in its "low-dose" approach. Balancing minimal radiation exposure with the acquisition of high-quality images.`].join(nl)],
	[`## Understanding Low-Dose Radiation Scans`, [
		`A low-dose radiation scan involves a lower amount of radiation. Compared to standard diagnostic CT scans. A low-dose CT scan for lung cancer screening might use about 1.4 millisieverts (mSv) of radiation. Less than the 7 mSv used in a regular diagnostic CT scan of the chest${footnote__sup__sort([ref_l1_7_footnote__sup_(ctx),ref_l1_14_footnote__sup_(ctx)])}. Reducing the radiation dose minimizes the risks associated with ionizing radiation. Which includes DNA damage that could lead to cancer.`].join(nl)],
	[`## The Purpose`, [
		`The scan stands on the front line of preventive medicine. Its mission? Early detection of health anomalies. Among the array of conditions it can reveal are:`,
		`- Early-stage cancers`,
		`- Cardiac diseases`,
		`- Bone irregularities`].join(nl)],
	[`## How It Works`, [
		`During the procedure, you'll lie on a scanning table that slides through the machine. The machine rotates around you, capturing numerous X-ray images.  A computer then processes these images to create detailed cross-sections of your body, allowing doctors to examine your organs, bones, & blood vessels for potential issues. The entire process is swift, often concluding within mere minutes.`].join(nl)],
	[`## The Benefits`, [
		[
			`Full-body scans use low-dose radiation to detect a wide range of diseases & conditions. Before symptoms appear. These scans identify early stages of diseases that are otherwise asymptomatic in their initial stages. Such as${footnote__sup__sort([ref_l1_4_footnote__sup_(ctx),ref_l1_9_footnote__sup_(ctx)])}:`,
			``,
			`- certain cancers`,
			`- vascular diseases`,
			`- musculoskeletal disorders`,
			``,
			`Early detection often allows for earlier treatment. Which can improve prognosis and, in some cases, lead to a cure.`,
			``
		].join(nl),
		()=>[
			[`### Early Detection`, [
				`Pinpoints diseases in their nascent stages when they're most amenable to treatment.`].join(nl)],
			[`### Comprehensive Insight`, [
				`Delivers a holistic health snapshot, potentially uncovering hidden issues.`].join(nl)],
			[`### Non-Invasive`, [
				`Simple & straightforward, the scan requires no incisions or extended hospital stays.`].join(nl)],
		]]],
	[`## Considerations`, ()=>[
		[`Pros`, [
			`- Quick & painless`,
			`- Identifies a broad spectrum of conditions`,
			`- Provides peace of mind`].join(nl)],
		[`Cons`, [
			`- Radiation Exposure`,
			`- May lead to unwarranted worry or additional testing`,
			`- Accessibility & cost may be prohibitive for some`].join(nl)]]],
	[`## Risks & Concerns`, [
		`Despite their benefits, full-body scans with low-dose radiation are not without risks. The main concern is the cumulative effect of radiation exposure. Even low doses of radiation can contribute to an increased risk of cancer over a person’s lifetime. According to studies, repeated exposure, even to low doses, can add up. Increasing the risk of developing cancer${footnote__sup__sort([ref_l1_5_footnote__sup_(ctx),ref_l1_10_footnote__sup_(ctx)])}. These scans can lead to false positives. Where the detection of benign conditions might lead to unnecessary follow-up tests & procedures. That carry their own risks${ref_l1_4_footnote__sup_(ctx)}.`
	].join(nl)],
	[`## Current Recommendations`, [
		`Given the risks associated with radiation. Medical guidelines generally do not recommend routine full-body scans for asymptomatic individuals. Without specific risk factors${footnote__sup__sort([ref_l1_4_footnote__sup_(ctx),ref_l1_10_footnote__sup_(ctx)])}. The use of these scans is advised only in certain circumstances. Where the benefits outweigh the risks. Such as in high-risk populations for specific cancers. Low-dose CT scans are recommended for lung cancer screening in older adults with a significant history of smoking${ref_l1_19_footnote__sup_(ctx)}.`].join(nl)],
	[`## Who Should Consider It?`, [
		`The scan is particularly beneficial for individuals with a moderate to high risk of certain conditions, owing to genetic predispositions, lifestyle factors, or age. Nonetheless, it's imperative to engage in a dialogue with a healthcare professional to ascertain the appropriateness of a full body scan in your health regimen.`].join(nl)],
	[`## Technological Advancements & Safety Measures`, [
		`Advancements in imaging technology continue to reduce the risks associated with radiation. Modern CT scanners & techniques, such as iterative reconstruction, allow for lower radiation doses. While maintaining image quality${footnote__sup__sort([ref_l1_15_footnote__sup_(ctx),ref_l1_16_footnote__sup_(ctx)])}. Medical facilities are adopting protocols to ensure that scans are justified & optimized. Performing scans only when necessary & with the minimum radiation dose required. To achieve diagnostic quality${footnote__sup__sort([ref_l1_6_footnote__sup_(ctx),ref_l1_18_footnote__sup_(ctx)])}.`].join(nl)],
	[`## How to Prepare`, [
		`Preparatory steps are straightforward. Potential prerequisites include:`,
		`- Fasting for a few hours pre-scan.`,
		`- Removing metallic objects to prevent image distortion.`].join(nl)],
	[`## Conclusion`, [
		`Full-body scans using low-dose radiation offer significant benefits in detecting diseases early. But it comes with potential risks. Patients & healthcare providers must consider the justification for such scans. Taking into account individual risk factors & the potential for cumulative radiation exposure. As imaging technology advances, ongoing research & updated guidelines will be essential. In maximizing the benefits of these scans. While minimizing their risks.`].join(nl)],
])
// @formatter:on
function ref_l1_4_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_4'
	}, [
		tb_a_({
			href: 'https://www.healthline.com/health/cancer/full-body-scan-for-cancer',
			nofollow: true,
			wrap: true,
		}, 'Is a Full-Body Scan Effective at Detecting Cancer?'),
	])
}
function ref_l1_5_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_5'
	}, [
		tb_a_({
			href: 'https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/what-are-radiation-risks-ct',
			nofollow: true,
			wrap: true,
		}, 'What are the Radiation Risks from CT?'),
	])
}
function ref_l1_6_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_6'
	}, [
		tb_a_({
			href: 'https://www.mskcc.org/news/scan-safety-radiation-reality-check',
			nofollow: true,
			wrap: true,
		}, 'CT Scan Safety: A Radiation Reality Check'),
	])
}
function ref_l1_7_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_7'
	}, [
		tb_a_({
			href: 'https://americanhealthimaging.com/what-is-the-difference-between-a-low-dose-ct-scan-and-a-regular-ct-scan/',
			nofollow: true,
			wrap: true,
		}, 'What is the difference between a low-dose CT scan and a regular CT scan?'),
	])
}
function ref_l1_9_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_9'
	}, [
		tb_a_({
			href: 'https://ezra.com/blog/full-body-scan',
			nofollow: true,
			wrap: true,
		}, 'Full-Body Scan: Benefits and What To Expect'),
	])
}
function ref_l1_10_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_10'
	}, [
		tb_a_({
			href: 'https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/full-body-ct-scans-what-you-need-know',
			nofollow: true,
			wrap: true,
		}, 'Full-Body CT Scans - What You Need to Know'),
	])
}
function ref_l1_14_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_14'
	}, [
		tb_a_({
			href: 'https://www.cancercenter.com/cancer-types/lung-cancer/diagnosis-and-detection/low-dose-ct-scan',
			nofollow: true,
			wrap: true,
		}, 'Low-dose CT scan'),
	])
}
function ref_l1_15_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_15'
	}, [
		tb_a_({
			href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8635628/',
			nofollow: true,
			wrap: true,
		}, 'Ultra-Low-Dose Whole-Body Computed Tomography Protocol Optimization for Patients With Plasma Cell Disorders: Diagnostic Accuracy and Effective Dose Analysis From a Reference Center'),
	])
}
function ref_l1_16_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_16'
	}, [
		tb_a_({
			href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7783892/',
			nofollow: true,
			wrap: true,
		}, 'Whole Body Low Dose Computed Tomography Using Third-Generation Dual-Source Multidetector With Spectral Shaping: Protocol Optimization and Literature Review'),
	])
}
function ref_l1_18_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_18'
	}, [
		tb_a_({
			href: 'https://www.hss.edu/condition-list_eos-imaging.asp',
			nofollow: true,
			wrap: true,
		}, 'EOS Imaging'),
	])
}
function ref_l1_19_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'l1_19'
	}, [
		tb_a_({
			href: 'https://www.lung.org/lung-health-diseases/lung-disease-lookup/lung-cancer/saved-by-the-scan',
			nofollow: true,
			wrap: true,
		}, 'Saved By The Scan'),
	])
}
