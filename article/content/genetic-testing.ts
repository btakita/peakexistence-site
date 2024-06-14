import { genetic_testing } from '@btakita/domain--server--peakexistence/feature'
import { sticky_h2__dl_tree_props_ } from '@btakita/ui--server--peakexistence/sticky'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { footnote__sup_, footnote__sup__sort } from '@rappstack/ui--server--blog/footnote'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...genetic_testing,
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky_h2__dl_tree_props_ }, ()=>[
	[`# What is Genetic Testing?`, [
		`Genetic testing analyzes DNA. The chemical database that carries instructions for the body's functions. It can reveal alterations in genes that may cause illness or disease. From predicting the risk of chronic diseases to uncovering family heritage.`,
		nl,
		`Genetic testing examines changes in chromosomes, genes, or proteins to:`,
		nl,
		`- identify genetic disorders`,
		`- predict risks of disease`,
		`- inform treatment strategies`,
		nl,
    `It can be performed on a sample of blood, hair, skin, amniotic fluid, or other tissue. The results of genetic tests can help${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx)])}:`,
		nl,
		`- diagnose conditions`,
		`- guide decisions about medical care`,
		`- determine treatment plans`,]],
	[`# Types of Genetic Testing`, ()=>[
		[`## Diagnostic Testing`, [
			`Genetic Testing Identifies specific genetic conditions if symptoms suggest a particular disorder. It confirms or rules out a suspected genetic disorder in symptomatic individuals. It provides a definitive diagnosis. And it can be crucial in determining the appropriate management & treatment of the condition${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx)])}.`,]],
		[`## Predictive & Presymptomatic Testing`, [
			`Genetic Testing detects gene mutations associated with disorders that appear after birth. Often later in life. They can be particularly valuable for individuals with a family history of a genetic disorder but no current symptoms. This testing helps in taking preventive measures. Or planning for the future healthcare needs${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx)])}.`,]],
		[`## Pharmacogenomics`, [
			`Genetic testing for pharmacogenomics predicts how an individual will respond to specific medications. Helping healthcare providers choose the most effective & least harmful treatment options. This personalized approach improves patient care. Reducing the trial-and-error process often associated with prescribing medications${ref_g1_4_footnote__sup_(ctx)}.`,]],
		[`## Carrier Testing`, [
			`Offered to individuals who have a family history of a genetic disorder. Or belong to certain ethnic groups that are at a higher risk for specific genetic conditions. Carrier testing can determine whether a person carries a copy of a gene mutation. That could be passed on to their children. Helping couples make informed reproductive choices${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx)])}.`,]],
		[`## Prenatal Testing & Newborn Screening`, [
			`Prenatal testing is used to detect changes in a fetus's genes or chromosomes before birth. This type of testing can help expectant parents make decisions about pregnancy management. Or prepare for the birth of a child with a genetic condition. Newborn screening is the most widespread use of genetic testing. It is mandated in many countries to identify genetic disorders that can be treated early in life${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx),ref_g1_4_footnote__sup_(ctx)])}.`,]],
		[`## Forensic Testing`, [
			`Genetic forensic testing uses DNA sequences to identify an individual for legal purposes. It can be used to${footnote__sup__sort([ref_g1_1_footnote__sup_(ctx),ref_g1_2_footnote__sup_(ctx)])}:`,
			nl,
			`- identify crime or catastrophe victims`,
			`- rule out or implicate a crime suspect`,
			`- establish biological relationships, such as paternity`,]],]],
	[`# Benefits of Genetic Testing`, [
		`The benefits of genetic testing extend beyond diagnosing diseases. It provides a sense of relief from uncertainty & helps people make informed decisions. About managing their health care${ref_g1_7_footnote__sup_(ctx)}.`,
		nl,
		`- A positive result can direct a person toward available prevention, monitoring, & treatment options.`,
		`- A negative result can eliminate the need for unnecessary checkups & screening tests.`,
		nl,
		()=>[
			[`## Personalized Medicine`, [
				`Tailors treatment plans to the individual's genetic makeup.`,]],
			[`## Preventive Measures`, [
				`Identifies risks early, allowing for lifestyle changes or interventions.`,]],
			[`## Family Planning`, [
				`Informs couples about potential genetic disorders in offspring.`,]],],]],
	[`# Challenges & Considerations`, [
		`Genetic testing carries potential risks & limitations. The accuracy of tests can vary. Not all genetic tests can detect every mutation that causes a particular disorder. Moreover, genetic testing can have emotional, social, & financial consequences. It is essential to undergo genetic counseling before & after testing. To understand the potential outcomes & implications of the results${footnote__sup__sort([ref_g1_5_footnote__sup_(ctx),ref_g1_6_footnote__sup_(ctx)])}.`,
		nl,
		()=>[
			[`## Pros`, [
				`- Offers detailed health insights`,
				`- Can guide personalized healthcare`,
				`- Help family planning & risk assessment`,]],
			[`## Cons`, [
				`- Potential for emotional distress`,
				`- Privacy concerns regarding genetic information`,
				`- It may lead to discrimination by insurers or employers`,]],],]],
	[`# Who Should Consider Genetic Testing?`, [
		`Individuals with:`,
		`- a family history of certain genetic conditions`,
		`- those planning to start a family`,
		`- anyone curious about their genetic makeup could benefit from genetic testing`,]],
	[`# How to Proceed`, ()=>[
		[`## Consultation`, [
			`Speak with a genetic counselor or healthcare provider. To understand which tests are suitable.`,]],
		[`## Testing`, [
			`It Involves collecting a sample of blood, saliva, or tissue.`,]],
		[`## Results & Counseling`, [
			`Discuss the results with a professional to understand the implications.`,]],]],
	[`# Conclusion`, [
		`Genetic illuminates the path to understanding our deepest biological secrets. Genetic testing holds the promise of personalized healthcare. Offering insights that enable more precise & personalized healthcare. As technology advances, the scope & accuracy of genetic testing will continue to improve. Further integrating genetics into everyday medical practice & helping individuals make better-informed health decisions.`,]],
])
// @formatter:on
function ref_g1_1_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_1'
	}, [
		tb_a_({
			href: 'https://medlineplus.gov/genetics/understanding/testing/uses/',
			nofollow: true,
			wrap: true,
		}, 'What are the uses of genetic testing?'),
	])
}
function ref_g1_2_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_2'
	}, [
		tb_a_({
			href: 'https://www.ncbi.nlm.nih.gov/books/NBK115571/',
			nofollow: true,
			wrap: true,
		}, 'APPENDIX G: GENETIC TESTING (nih)'),
	])
}
function ref_g1_4_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_4'
	}, [
		tb_a_({
			href: 'https://www.mayoclinic.org/tests-procedures/genetic-testing/about/pac-20384827',
			nofollow: true,
			wrap: true,
		}, 'Genetic testing (mayoclinic)'),
	])
}
function ref_g1_5_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_5'
	}, [
		tb_a_({
			href: 'https://www.testing.com/genetic-testing-benefits-risks-and-future/',
			nofollow: true,
			wrap: true,
		}, 'Genetic Testing: Benefits, Risks and the Future'),
	])
}
function ref_g1_6_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_6'
	}, [
		tb_a_({
			href: 'https://childrenswi.org/medical-care/genetics-and-genomics-program/medical-genetics/uses-of-genetic-testing',
			nofollow: true,
			wrap: true,
		}, 'Uses of genetic testing'),
	])
}
function ref_g1_7_footnote__sup_(ctx:request_ctx_T) {
	return footnote__sup_({
		ctx,
		id: 'g1_7'
	}, [
		tb_a_({
			href: 'https://medlineplus.gov/genetics/understanding/testing/benefits/',
			nofollow: true,
			wrap: true,
		}, 'What are the benefits of genetic testing?'),
	])
}
