import * as React from 'react'
import { ATimerStore, TimerStore } from '../stores/TimerStore'
import { Millisecond } from '../types';
import { ActionTypes, StopAction, Action, StartAction, ClearAction } from '../actions/Actions';
import { Dispatcher } from 'flux';
import { Toggle, Timer, Restart } from './TimerView';

var int: NodeJS.Timeout

export class TCProps {
  dispatcher: Dispatcher<Action>
  store: TimerStore

  constructor(store: TimerStore, dispatcher?: Dispatcher<Action>) {
    this.store = store
    if (dispatcher === undefined) {
      this.dispatcher = store.dispatcher
    } else {
      this.dispatcher = dispatcher
    }
  }
}

export class TCState {
  time: Millisecond
  step: Millisecond
  on: boolean

  constructor(time: Millisecond = 0, step: Millisecond = 100, on: boolean) {
    this.time = time
    this.step = step
    this.on = on
  }
}

export class TimerController extends React.Component<TCProps, TCState> {
  state: TCState

  constructor(props: TCProps) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState() {
    return this.props.store.getState()
  }

  componentDidMount(): void {
    this.props.store.addChangeListener(this._onChange)
    this.props.dispatcher.dispatch(StartAction)
  }

  componentWillUnmount(): void {
    this.props.store.removeChangeListener(this._onChange);
    this.props.dispatcher.dispatch(StopAction)
  }

  _onChange = () => {
    this.setState(this.props.store.getState())
  }

  toggle = () => {
    if (this.props.dispatcher) {
      if (this.state.on) {
        this.props.dispatcher.dispatch(StopAction)
      } else {
        this.props.dispatcher.dispatch(StartAction)
      }
    }
  }

  restart = () => {
    this.props.dispatcher.dispatch(ClearAction)
  }

  render() {
    return <div>
      <Timer time={this.state.time} />
      <Restart onClick={this.restart} /><Toggle on={this.state.on} onClick={this.toggle} />
    </div>;
  }
}