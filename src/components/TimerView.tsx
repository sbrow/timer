import * as React from 'react'
import { Millisecond, Hour } from '../types';

interface Props {
  time: Millisecond
}

export function Timer(props: Props) {
  return <div>Time: {Hour(props.time).toFixed(4)}</div>
}

export function Toggle(props: any) {
  if (props.on) {
    return <button onClick={props.onClick}>&#9208;</button>
  } else {
    return <button onClick={props.onClick}>&#9654;</button>
  }
}

export function Restart(props: any) {
  return <button onClick={props.onClick}>&#8630;</button>
}