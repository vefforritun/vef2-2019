import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {

  static propTypes = {
    timeZone: PropTypes.string,
  }

  static defaultProps = {
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
