export const enum Char {
    Play = "\u25b6",
    Pause = "\u23f8",
    Restart = "\u21b6",
}

/**
 * Time enumerates conversion factors from standard time units
 * to milliseconds.
 *
 * @exports
 * @enum {number}
 */
export const enum Time {
    Millisecond = 1,
    Second = 1000 * Millisecond,
    Minute = 60 * Second,
    Hour = 60 * Minute,
}

export const enum ActionTypes {
    Tick,
    Start,
    Stop,
    Clear,
}
