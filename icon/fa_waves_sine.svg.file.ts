import { fa_waves_sine_ } from '@btakita/ui--server--peakexistence/icon'
import { raw_, relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { style_ } from 'relementjs/svg'
relement__use(server__relement)
export default '' + fa_waves_sine_({}, [
	style_(raw_(`path { stroke: black }; @media (prefers-color-scheme: dark) { path { stroke: white } }`))
])
