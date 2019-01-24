import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TimerController } from './components/TimerController'
import { AppDispatcher } from './dispatcher/AppDispatcher';
import { ATimerStore } from './stores/TimerStore';

AppDispatcher.register(ATimerStore.actionHandler)

ReactDOM.render(<TimerController store={ATimerStore} dispatcher={ATimerStore.dispatcher}/>, document.querySelector('#timer'))