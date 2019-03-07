import { EventEmitter } from "events"
import { Dispatcher } from "flux";

import { TickAction } from "../actions/Actions"
import { TCState } from "../components/TimerController"
import { ActionTypes } from "../const"
import { Action, Millisecond } from "../global"

export class TimerStore extends EventEmitter {
  public dispatcher: Dispatcher<Action>
  protected time: Millisecond
  protected started: Millisecond | null
  protected step: Millisecond
  protected interval: NodeJS.Timeout | null

  constructor(dispatcher: Dispatcher<Action>) {
    super()
    this.dispatcher = dispatcher
    this.time = 0
    this.started = null
    this.step = 360
    this.interval = null
  }

  public getState(): TCState {
    let time = this.time
    if (this.started !== null) {
      time += Date.now() - this.started
    }
    return {
      on: (this.interval !== null),
      step: this.step,
      time,
    }
  }

  public actionHandler = (payload: Action) => {
    switch (payload.actionType) {
      case ActionTypes.Tick:
        this.tick()
        break
      case ActionTypes.Start:
        this.start()
        break
      case ActionTypes.Stop:
        this.stop()
        break
      case ActionTypes.Clear:
        this.clear()
        break
    }
  }

  /**
   * Increases time by step.
   *
   * @emits 'change'.
   *
   * @memberof TimerStore
   */
  protected tick(): void {
    this.emit("change")
  }

  protected start = (): void => {
    // Don't start if already started.
    if (this.interval === null) {
      this.interval = setInterval(() => { this.dispatcher.dispatch(TickAction) }, this.step)
      if (this.started === null) {
        this.started = Date.now()
      }
      this.emit("change")
    }
  }

  protected stop = (): void => {
    // Don't stop if timer not running.
    if (this.interval !== null) {
      clearInterval(this.interval)
      this.interval = null
      if (this.started !== null) {
        this.time += Date.now() - this.started
      }
      this.started = null
      this.emit("change")
    }
  }

  protected clear = (): void => {
    // Don't emit change if store is already clear.
    if (this.time === 0 && this.started === null) {
      return
    }
    this.time = 0
    if (this.interval === null) {
      this.started = null
    } else {
      this.started = Date.now()
    }
    this.emit("change")
  }
}
