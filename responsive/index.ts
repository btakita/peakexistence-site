import { class_ } from 'ctx-core/html'
import { fragment_, type tag_dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
export function mobile_hidden__span_(
	mobile_hidden_mobile_inline_pair:[tag_dom_T]|[tag_dom_T, tag_dom_T],
	class_pair?:[string]|[string, string]
) {
	const [mobile_hidden, mobile_inline] = mobile_hidden_mobile_inline_pair
	const mobile_hidden_span = span_({
		class: class_pair?.[0] ?? class_('hidden', 'sm:inline')
	}, mobile_hidden)
	const mobile_inline_span = span_({
		class: class_pair?.[1] ?? class_('inline', 'sm:hidden')
	}, mobile_inline)
	return mobile_inline_span ? fragment_([mobile_hidden_span, mobile_inline_span]) : mobile_hidden_span
}
