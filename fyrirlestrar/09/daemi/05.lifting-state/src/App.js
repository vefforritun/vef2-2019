import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Dæmi upprunalega frá
 * https://reactjs.org/docs/lifting-state-up.html
 */

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function toFahrenheit(celsius) {
  return (celsius * (9 / 5)) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number,
};

// Gerum TemperatureInput að controlled component
class TemperatureInput extends Component {
  static propTypes = {
    onTemperatureChange: PropTypes.func,
    temperature: PropTypes.string,
    scale: PropTypes.string,
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends Component {
  state = {
    temperature: '',
    scale: 'c',
  };

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const { scale, temperature } = this.state;

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
