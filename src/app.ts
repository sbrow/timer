import { Dispatcher } from "flux";
import { Action } from "./actions/Actions";
import { TimerStore } from "./stores/TimerStore";

export var AppDispatcher: Dispatcher<Action> = new Dispatcher<Action>()
export var ATimerStore = new TimerStore(AppDispatcher)

AppDispatcher.register(ATimerStore.actionHandler)