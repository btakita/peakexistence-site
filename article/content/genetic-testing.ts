import { genetic_testing } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { type request_ctx_T } from 'rebuildjs/server'
import { sticky__dl_tree_props_ } from '../../sticky/index.js'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...genetic_testing,
})
// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>''
+ dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
	[`## What is Genetic Testing?`, [
		`Genetic testing analyzes DNA. The chemical database that carries instructions for the body's functions. It can reveal alterations in genes that may cause illness or disease. From predicting the risk of chronic diseases to uncovering family heritage. The scope of genetic testing is vast & varied.`].join(nl)],
	[`## Types of Genetic Testing`, [
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Diagnostic Testing`, [
				`Identifies specific genetic conditions if symptoms suggest a particular disorder.`].join(nl)],
			[`### Predictive & Presymptomatic Testing`, [
				`Detects gene mutations associated with disorders that appear later in life.`].join(nl)],
			[`### Carrier Testing`, [
				`Determine if you carry a gene variant that could lead to a genetic disorder in your children.`].join(nl)],
			[`### Prenatal Testing`, [
				`Assesses the health of a fetus.`].join(nl)],
			[`### Newborn Screening`, [
				`The most widespread form, it screens for genetic disorders early in life.`].join(nl)],
		])].join(nl)],
	[`## The Benefits`, [
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Personalized Medicine`, [
				`Tailors treatment plans to the individual's genetic makeup.`].join(nl)],
			[`### Preventive Measures`, [
				`Identifies risks early, allowing for lifestyle changes or interventions.`].join(nl)],
			[`### Family Planning`, [
				`Informs couples about potential genetic disorders in offspring.`].join(nl)],
		])].join(nl)],
	[`## Considerations`, [
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Pros`, [
				`- Offers detailed health insights`,
				`- Can guide personalized healthcare`,
				`- Help family planning & risk assessment`,
			].join(nl)],
			[`### Cons`, [
				`- Potential for emotional distress`,
				`- Privacy concerns regarding genetic information`,
				`- May lead to discrimination by insurers or employers`,
			].join(nl)],
		])].join(nl)],
	[`## Who Should Consider Genetic Testing?`, [
		`Individuals with:`,
		`- a family history of certain genetic conditions`,
		`- those planning to start a family`,
		`- anyone curious about their genetic makeup could benefit from genetic testing`].join(nl)],
	[`## How to Proceed`, [
		dl_tree_({ ctx, _: sticky__dl_tree_props_ }, ()=>[
			[`### Consultation`, [
				`Speak with a genetic counselor or healthcare provider. To understand which tests are suitable.`].join(nl)],
			[`### Testing`, [
				`It Involves collecting a sample of blood, saliva, or tissue.`].join(nl)],
			[`### Results & Counseling`, [
				`Discuss the results with a professional to understand the implications.`].join(nl)],
		])].join(nl)],
	[`## Conclusion`, [
		`Genetic illuminates the path to understanding our deepest biological secrets. Genetic testing holds the promise of personalized healthcare.`].join(nl)],
])
// @formatter:on
