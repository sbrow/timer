import * as React from "react"
import { Char, Time } from "../const";
import { ButtonProps, TimerProps, ToggleProps } from "../global"

export function Timer(props: TimerProps) {
  return <div>Time: {(props.time / Time.Hour).toFixed(4)}</div>
}

export function Restart(props: ButtonProps) {
  return <button onClick={props.onClick}>{Char.Restart}</button>
}

export function Toggle(props: ToggleProps) {
  let symbol = (props.on) ? Char.Pause : Char.Play

  return <button onClick={props.onClick}>{symbol}</button>
}
