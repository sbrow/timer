import { Dispatcher } from "flux"

import { ActionTypes } from "./const"
import { TimerStore } from "./stores/TimerStore";

/**
 * @typedef {Millisecond} Documents that a time is in ms format.
 */
export type Millisecond = number

/**
 * Passed to dispatchers.
 * 
 * @property {actionType} The type of action being executed. 
 * @interface Action
 */
export interface Action {
  actionType: ActionTypes
}

/**
 * TimerProps contains arguments for the Timer View.
 *
 * @interface TimerProps
 */
interface TimerProps {
  time: Millisecond
}

interface ButtonProps {
  onClick: () => any
}

interface ToggleProps extends ButtonProps {
  on: boolean
}