
export type Millisecond = number

export const HourMS: Millisecond = 3600000

export function Hour(time: Millisecond): number {
    return time / HourMS
}
