import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {

  static propTypes = {
    timeZone: PropTypes.string,
  }

  static defaultProps = {
    // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    timeZone: 'Atlantic/Reykjavik',
  }

  state = { date: new Date() }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = new Date();
    this.setState({ date });
  }

  render() {
    const { timeZone } = this.props;

    const time = this.state.date.toLocaleString('is-IS', { timeZone });
    return (
      <div>
        <p>{time}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Clock timeZone="America/New_York" />
        <Clock timeZone="America/Los_Angeles" />
      </div>
    );
  }
}

export default App;
