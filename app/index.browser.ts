import 'aos/dist/aos.css'
import * as home__hyops from '@btakita/ui--browser--peakexistence/home/hyop'
import * as layout__hyops from '@btakita/ui--browser--peakexistence/layout/hyop'
import AOS from 'aos'
import { hyop } from 'relementjs/browser/hy'
window.addEventListener('load', async ()=>{
	hyop(document, {
		...home__hyops,
		...layout__hyops,
	})
})
AOS.init({
	once: true,
	disable: 'phone',
	duration: 700,
	easing: 'ease-out-cubic',
})
