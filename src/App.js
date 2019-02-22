import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStarted: false,
      timerStopped: true,
      hours: 0,
      minutes: 0,
      seconds: 0,
      captures: []
    }
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Timer with React</h2>
        <div className="timer-container">
          <div className="current-timer">
            {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
          </div>
          <div className="timer-controls">
            <button className="btn btn-success">
              Start Timer
            </button>
            <button className="btn btn-alert">Stop Timer</button>
            <button className="btn btn-info">Capture Time</button>
            <button className="btn btn-danger">Reset Timer</button>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
