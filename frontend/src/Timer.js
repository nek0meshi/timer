import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      currentTime: null,
    };
  }
  render() {
    return (
      <div>
        { now }
      </div>
    );
  }

  start() {
    this.setState({
      startTime: Date.now(),
    });
  }
}

export default Timer;
