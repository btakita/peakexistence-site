import { psychedelic_therapy } from '@btakita/domain--server--peakexistence/feature'
import { post_meta__validate } from '@rappstack/domain--any--blog/post'
import { site__author_, site__author_img_url_ } from '@rappstack/domain--server/site'
import { md__raw_ } from '@rappstack/ui--any/md'
import { type request_ctx_T } from 'rebuildjs/server'
export const meta_ = (ctx:request_ctx_T)=>post_meta__validate({
	author: site__author_(ctx)!,
	author_img_url: site__author_img_url_(ctx)!,
	pub_date: '2024-03-22T20:42:15.614Z',
	...psychedelic_therapy,
})

// @formatter:off
// language=md
export default (ctx:request_ctx_T)=>md__raw_(`
## What is Psychedelic Therapy?

Psychedelic Exercise Therapy combines physical activity and carefully administered psychedelic substances. To improve mental health and overall well-being. Dr. Manny Emenike addresses the mind and body for comprehensive healing. As a medical doctor specializing in internal medicine.

Psychedelic therapy is also known as psychedelic-assisted psychotherapy (PAP).  Psychedelic therapy is a psychiatric practice. Involving the controlled use of psychedelic substances as part of a psychotherapeutic process.

Psychedelic therapy combines the ingestion of consciousness-altering psychedelics. With talk therapy to address various mental health conditions and promote therapeutic benefits. Several psychedelics are under research for their therapeutic potential. In clinical and nonclinical settings.

Including, plant-derived:
- psilocybin
- DMT
- peyote
- ayahuasca
- ibogaine

And chemical compounds:
- ketamine
- MDMA
- LSD

## Why Choose Psychedelic Therapy?

### Holistic Healing

Dr. Emenike treats the root causes of ailments with treating symptoms. Combining exercise and psychedelic therapy addresses mental, emotional, and physical health. Promoting a truly holistic healing experience

### Safe and Professional Environment

Dr. Emenike ensures a safe and controlled environment for your psychedelic sessions. Dr. Emenike is a licensed medical professional. Adhering to medical best practices and ethical standards. Prioritizing patient well-being.

### Personalized Treatment Plans

Dr. Manny Emenike tailors treatment plans to suit each patient’s:

- unique needs
- medical history
- therapeutic goals

Dr. Emenike maintains a patient-centric approach, emphasizing collaboration and understanding.

### Cutting-edge Research

Dr. Emenike continually integrates evidence-based research and best practices into his treatment protocols. Offering patients the most effective and up-to-date care. Dr. Emenike's brings expert discresion with avid interest in the latest scientific advancements. Bringing the best up to date care to you.
`)
