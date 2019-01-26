import { Dispatcher } from "flux"
import * as React from "react"
import * as ReactDOM from "react-dom"

import { TimerController } from "./components/TimerController"
import { Action } from "./global"
import { TimerStore } from "./stores/TimerStore";

let AppDispatcher: Dispatcher<Action> = new Dispatcher<Action>()
let Timer = new TimerStore(AppDispatcher)

AppDispatcher.register(Timer.actionHandler)

ReactDOM.render(<TimerController store={Timer} />, document.querySelector("#timer"))
