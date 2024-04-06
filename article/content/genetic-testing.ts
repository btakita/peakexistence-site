import { genetic_testing } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--server--blog/post'
import { md__raw_ } from '@rappstack/ui--any/md'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate(ctx, {
	pub_date: '2024-03-22T20:42:15.614Z',
	...genetic_testing,
})

// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>md__raw_(`
## What is Genetic Testing?
Genetic testing analyzes DNA. The chemical database that carries instructions for the body's functions. It can reveal alterations in genes that may cause illness or disease. From predicting the risk of chronic diseases to uncovering family heritage. The scope of genetic testing is vast and varied.

## Types of Genetic Testing
- **Diagnostic Testing:** Identifies specific genetic conditions if symptoms suggest a particular disorder.
- **Predictive and Presymptomatic Testing:** Detects gene mutations associated with disorders that appear later in life.
- **Carrier Testing:** Determines if you carry a gene variant that could lead to a genetic disorder in your children.
- **Prenatal Testing:** Assesses the health of a fetus.
- **Newborn Screening:** The most widespread form, it screens for genetic disorders early in life.

## The Benefits
1. **Personalized Medicine:** Tailors treatment plans to the individual's genetic makeup.
2. **Preventive Measures:** Identifies risks early, allowing for lifestyle changes or interventions.
3. **Family Planning:** Informs couples about potential genetic disorders in offspring.

## Considerations

| **Pros**                                     | **Cons**                                            |
|----------------------------------------------|-----------------------------------------------------|
| Offers detailed health insights              | Potential for emotional distress                    |
| Can guide personalized healthcare            | Privacy concerns regarding genetic information      |
| Helps in family planning and risk assessment | May lead to discrimination by insurers or employers |

## Who Should Consider Genetic Testing?
Individuals with:
- a family history of certain genetic conditions
- those planning to start a family
- anyone curious about their genetic makeup could benefit from genetic testing

## How to Proceed
1. **Consultation**: Speak with a genetic counselor or healthcare provider. To understand which tests are suitable.
2. **Testing**: Involves collecting a sample of blood, saliva, or tissue.
3. **Results and Counseling**: Discussing the results with a professional to understand the implications.

## Conclusion
Genetic illuminates the path to understanding our deepest biological secrets. Genetic testing holds the promise of personalized healthcare.
`)
