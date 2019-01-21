import * as React from 'react'
import * as ReactDOM from 'react-dom'

type Millisecond = number;

const hour: Millisecond = 3600000
const precision: number = 4

interface timerProperties {
    interval: Millisecond
}

interface timerState {
    time: Millisecond
}


class Timer extends React.Component<any, any> {
    // Both of these properties are inherited from React.Component

    // TODO: fix Timer.interval to show correct type
    interval: NodeJS.Timeout | undefined
    state: timerState

    constructor(props: timerProperties) {
        super(props)
        this.state = {
            time: 0,
        }
    }
    /*     start(): void {
            this.id = setInterval(()=>this.tick(), 100)
        } */
    tick(): void {
        this.setState({
            time: this.state.time + this.props.interval
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), this.props.interval);
    }

    componentWillUnmount() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }
    }
    hours(): string {
        return (this.state.time / hour).toFixed(precision)
    }
    render(): any {
        return (
            <div>
                Hours: {this.hours()}
            </div>
        );
    }
}

ReactDOM.render(
    <Timer interval={100} />,
    document.getElementById('timer-example')
);