import 'aos/dist/aos.css'
import * as layout__hyops from '@btakita/ui--browser--peakexistence/layout/hyop'
import * as plan__hyops from '@btakita/ui--browser--peakexistence/plan/hyop'
import AOS from 'aos'
import { hyop } from 'relementjs/browser/hy'
window.addEventListener('load', async ()=>{
	hyop(document, {
		...layout__hyops,
		...plan__hyops,
	})
})
AOS.init({
	once: true,
	disable: 'phone',
	duration: 700,
	easing: 'ease-out-cubic',
})
