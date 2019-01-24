
export enum ActionTypes {
  Tick,
  Start,
  Stop,
  Clear,
}

/**
 * @property {actionType}
 *
 * @interface Action
 */
export interface Action {
  actionType: ActionTypes
}

export var TickAction: any = {
  actionType: ActionTypes.Tick,
}

export var StartAction: Action = {
  actionType: ActionTypes.Start
}

export var StopAction: Action = {
  actionType: ActionTypes.Stop
}

export var ClearAction: Action = {
  actionType: ActionTypes.Clear
}