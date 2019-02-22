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

  handleTimerStart(e) {
    e.preventDefault(); //prevent button from submitting to new page

    if (this.state.timerStopped) {
      this.timer = setInterval(() => {

        this.setState({ timerStarted: true, timerStopped: false });
        if (this.state.timerStarted) {
          if (this.state.seconds >= 60) {
            this.setState((prevState) => ({ seconds: 0, minutes: prevState.minutes + 1 }));

          }
          if (this.state.minutes >= 60) {
            this.setState((prevState) => ({ seconds: 0, minutes: 0, hours: prevState.hours + 1 }));

          }
          this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
        }

      }, 1000);

    }
  }

  handleTimerStop(e) {
    e.preventDefault();
    this.setState({ timerStarted: false, timerStopped: true });
    clearInterval(this.timer);
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
            <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>
              Start Timer
            </button>
            <button className="btn btn-alert" onClick={this.handleTimerStop.bind(this)}>Stop Timer</button>
            <button className="btn btn-info">Capture Time</button>
            <button className="btn btn-danger">Reset Timer</button>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
