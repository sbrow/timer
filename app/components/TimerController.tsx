import * as React from "react"

import { ClearAction, StartAction, StopAction } from "../actions/Actions"
import { Action, Millisecond } from "../global"
import { TimerStore } from "../stores/TimerStore"
import { Restart, Timer, Toggle } from "./TimerView"

export class TCProps {
  public store: TimerStore

  constructor(store: TimerStore) {
    this.store = store
  }
}

export class TCState {
  public time: Millisecond
  public step: Millisecond
  public on: boolean

  constructor(time: Millisecond = 0, step: Millisecond = 100, on: boolean) {
    this.time = time
    this.step = step
    this.on = on
  }
}

export class TimerController extends React.Component<TCProps, TCState> {
  public state: TCState

  constructor(props: TCProps) {
    super(props)
    this.state = this.getInitialState()
  }

  public componentDidMount(): void {
    this.props.store.on("change", this._onChange)
  }

  public componentWillUnmount(): void {
    this.props.store.removeListener("change", this._onChange);
    if (this.state.on) {
      this.dispatch(StopAction)
    }
  }

  public _onChange = () => {
    this.setState(this.props.store.getState())
  }

  public toggle = () => {
    let payload = (this.state.on) ? StopAction : StartAction

    this.dispatch(payload)
  }

  public restart = () => {
    this.dispatch(ClearAction)
  }

  public render() {
    return <div>
      <Timer time={this.state.time} />
      <Restart onClick={this.restart} /><Toggle on={this.state.on} onClick={this.toggle} />
    </div>
  }

  protected getInitialState() {
    return this.props.store.getState()
  }
  protected dispatch(payload: Action): void {
    if (this.props.store.dispatcher) {
      this.props.store.dispatcher.dispatch(payload)
    }
  }
}
