import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { TimerController } from './components/TimerController'
import { ATimerStore} from  './app'

ReactDOM.render(<TimerController store={ATimerStore} dispatcher={ATimerStore.dispatcher}/>, document.querySelector('#timer'))