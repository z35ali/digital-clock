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
          if (this.state.seconds >= 59) {
            this.setState((prevState) => ({ seconds: -1, minutes: prevState.minutes + 1 }));

          }
          if (this.state.minutes >= 59) {
            this.setState((prevState) => ({ seconds: 0, minutes: -1, hours: prevState.hours + 1 }));

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

  handleTimerReset(e) {
    e.preventDefault();
    this.setState({ timerStarted: false, timerStopped: true, seconds: 0, minutes: 0, hours: 0 });
    clearInterval(this.timer);

  }

  handleTimerCapture(e) {
    //new capture + prev captures in captures array
    this.setState((prevState) => ({ captures: [...prevState.captures, this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds] }));
  }

  handleCaptureReset(e) {
    e.preventDefault();
    this.setState({ captures: [] });

  }
  render() {
    return (
      <div>

        <div className="container">

          <h2 className="text-center">React StopWatch</h2>

          <div className="timer-container">
            <div className="current-timer">
              {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
            </div>
            <div className="timer-controls">
              <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>
                Start Timer
            </button>
              <button className="btn btn-info" onClick={this.handleTimerStop.bind(this)}>Stop Timer</button>
              <button className="btn btn-warning" onClick={this.handleTimerCapture.bind(this)}>Capture Time</button>
              <button className="btn btn-danger" onClick={this.handleTimerReset.bind(this)}>Reset Timer</button>
              <button className="btn btn-info" onClick={this.handleCaptureReset.bind(this)}>Clear Captures</button>

            </div>
          </div>
        </div>
        <div className="timer-captures">
          {this.state.captures.map((time, index) => {
            return <code>{"Capture " + (index + 1) + " -> " + time}</code>
          })}

        </div>
      </div>
    );
  }
}

export default App;
