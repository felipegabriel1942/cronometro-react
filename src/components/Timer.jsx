import './Timer.css';

import React from 'react';
import ProgressCircle from './ProgressCircle';

export default class Timer extends React.Component {
  state = {
    initial: 10,
    actual: 10,
    running: false,
  };

  interval;

  start = () => {
    this.setState({
      running: true,
    });

    if (this.state.actual === 0) {
      this.setState({
        actual: this.state.initial,
      });
    }

    this.interval = setInterval(() => {
      this.setState({
        actual: this.state.actual - 1,
      });

      if (this.state.actual === 0) {
        this.pause();
      }
    }, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
    this.setState({
      running: false,
    });
  };

  setInitialValue = (e) => {
    const newInitial = +e.target.value;

    this.setState({
      initial: newInitial,
      actual: newInitial,
    });
  };

  render() {
    return (
      <div className='Timer'>
        <h2>Timer</h2>
        <ProgressCircle
          progress={this.state.actual / this.state.initial}
        ></ProgressCircle>
        <h2>Actual Value: {this.state.actual}</h2>
        <div>
          <input value={this.state.initial} onChange={this.setInitialValue} />
          <button onClick={this.start} disabled={this.state.running}>
            Run
          </button>
          <button onClick={this.pause} disabled={!this.state.running}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
