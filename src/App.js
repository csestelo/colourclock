import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds()
        };

    }

    componentDidMount() {
        setInterval(() => {
            this.updateSecond();
            this.updateMinute();
            this.updateHour();
        }, 1000)
    }

    updateSecond() {
        this.setState({sec: (this.state.sec + 1) % 60})
    };

    updateMinute() {
        if (this.state.sec === 0) {
            this.setState({min: (this.state.min + 1) % 60})
        }
    }

    updateHour() {
        if (this.state.sec === 0 && this.state.min === 0) {
            this.setState({hour: (this.state.hour + 1) % 24})
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
                <header className="App-header"
                        style={{backgroundColor: this.getColour()}}>
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
