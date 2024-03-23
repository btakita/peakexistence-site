import { type post_mod_T } from '@rappstack/domain--any--blog/post'
export const post_mod_a1:post_mod_T[] = await Promise.all([
	import('./content/altitude-training.js'),
	import('./content/exercise-with-oxygen-therapy.js'),
])
