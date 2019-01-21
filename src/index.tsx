import * as React from 'react' 
import * as ReactDOM from 'react-dom' 

type Millisecond = number;

const hour: Millisecond = 3600000
const precision: number = 4

class Timer extends React.Component<any, any> {
    interval: any

    constructor(props: any){
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
            time: this.state.time + 100,
          })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    hours(): string {
        return (this.state.time/hour).toFixed(precision)
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
    <Timer interval="100" />,
    document.getElementById('timer-example')
  );