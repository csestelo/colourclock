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
            if (this.state.sec < 59) {
                this.setState({sec: this.state.sec + 1})
            } else {
                this.setState({sec: 0})
            }
        }, 1000)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        {this.state.hour}:{this.state.min}:{this.state.sec}
                    </p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
