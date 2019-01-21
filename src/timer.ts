type Millisecond = number;

const hour: Millisecond = 3600000
const precision: number = 4

class Timer {
    id: number
    time: Millisecond
    interval: Millisecond
    elem: HTMLElement
    constructor(elem: HTMLElement, interval: Millisecond = 0){
        this.time = 0
        this.elem = elem
        this.interval = interval
        this.render()
    }
    start(): void {
        this.id = setInterval(()=>this.tick(), 100)
    }
    tick(): string {
        this.time += this.interval
        this.render()
        /** @returns {string}  timerid */
        return "this"

    }
    hours(): string {
        return (this.time/hour).toFixed(precision)
    }
    render(): void {
        this.elem.innerHTML = this.hours()
    }
}

function timedText() {
  let x = document.getElementById("txt")
  vqar timer = new Timer(x, 100)
  timer.start()
}