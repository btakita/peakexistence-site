import 'aos/dist/aos.css'
import * as layout__hyops from '@btakita/ui--browser--peakexistence/layout/hyop'
import * as concierge_medicine__hyops from '@btakita/ui--browser--peakexistence/concierge-medicine/hyop'
import AOS from 'aos'
import { hyop } from 'relementjs/browser/hy'
window.addEventListener('load', async ()=>{
	hyop(document, {
		...layout__hyops,
		...concierge_medicine__hyops,
	})
})
AOS.init({
	once: true,
	disable: 'phone',
	duration: 700,
	easing: 'ease-out-cubic',
})
