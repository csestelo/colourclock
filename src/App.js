import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 0, min: 0, sec: 0
        };

    }

    componentDidMount() {
        setInterval(() => {
            this.updateClockState();
        }, 1000)
    }

    updateClockState() {
        if (this.state.sec < 59) {
            this.setState({sec: this.state.sec + 1})
        } else {
            this.setState({sec: 0});
            if (this.state.min < 59) {
                this.setState({min: this.state.min + 1})
            } else {
                this.setState({min: 0});
                if (this.state.hour < 23) {
                    this.setState({hour: this.state.hour + 1})
                } else {
                    this.setState({hour: 0, min: 0, sec: 0})
                }
            }
        }
    }

    calculateColour(time, timeMaxValue) {
        return ((time * 255) / timeMaxValue).toFixed()
    }

    getColour() {
        const hour = this.calculateColour(this.state.hour, 23);
        const min = this.calculateColour(this.state.min, 59);
        const sec = this.calculateColour(this.state.sec, 59);

        return `RGB(${hour}, ${min}, ${sec})`
    }

    render() {
        const hour = String(this.state.hour).padStart(2, '0');
        const min = String(this.state.min).padStart(2, '0');
        const sec = String(this.state.sec).padStart(2, '0');

        return (
            <div className="App">
                <header className="App-header" style={{backgroundColor: this.getColour()}}>
                    <p>
                        {hour}:{min}:{sec}
                    </p>
                    <p>
                        {this.getColour()}
                    </p>
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}

export default App;
