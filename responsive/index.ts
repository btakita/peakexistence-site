import { class_ } from 'ctx-core/html'
import type { tag_dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
export function mobile_hidden__span_(...children:tag_dom_T[]) {
	return span_({ class: class_('hidden', 'sm:inline') }, ...children)
}
