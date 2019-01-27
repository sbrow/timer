import { ActionTypes } from "../const"
import { Action } from "../global"

/**
 * Creates a new Action with the given type.
 *
 * @param {ActionTypes} type
 * @returns {Action}
 */
function NewAction(type: ActionTypes): Action {
  return { actionType: type }
}

export let TickAction = NewAction(ActionTypes.Tick)

export let StartAction = NewAction(ActionTypes.Start)

export let StopAction = NewAction(ActionTypes.Stop)

export let ClearAction = NewAction(ActionTypes.Clear)
