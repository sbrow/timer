import { EventEmitter } from 'events'
import { Millisecond } from '../types'
import { TCState } from '../components/TimerController';
import { Action, TickAction, ActionTypes } from '../actions/Actions';
import { Dispatcher } from 'flux';

export class TimerStore extends EventEmitter {
  dispatcher: Dispatcher<Action>
  time: Millisecond
  step: Millisecond
  interval: NodeJS.Timeout | null

  constructor(dispatcher: Dispatcher<Action>) {
    super()
    this.dispatcher = dispatcher
    this.time = 0
    this.step = 360
    this.interval = null
  }

  getState(): TCState {
    return {
      time: this.time,
      step: this.step,
      on: (this.interval !== null),
    }
  }
  
  actionHandler = (payload: Action) => {
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
      default:
      // Do nothing
    }
  }
  tick(): void {
    this.time += this.step
    this.emitChange()
  }

  start = (): void => {
    this.interval = setInterval(() => { this.dispatcher.dispatch(TickAction) }, this.step)
    this.emitChange()
  }

  stop = (): void => {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
      this.emitChange()
    }
  }

  clear = (): void => {
    this.time = 0
    this.emitChange()
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback: () => any) {
    this.on('change', callback);
  }

  removeChangeListener(callback: () => any) {
    this.removeListener('change', callback);
  }
}