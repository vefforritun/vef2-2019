import React, { Component } from 'react';

class Container extends Component {
  state = { counter: 0 }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState(prevState => ({
        counter: prevState.counter + 1,
      })),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <Item name="Item 1" />
        <Item name="Item 2" counter={counter} />
        <Item name="Item 3" shy counter={counter} />
        {counter < 10 && (
          <Item name="Item 4" />
        )}
      </div>
    );
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, 'constructor');
  }

  componentDidMount() {
    console.log(this.props.name, 'componentDidMount');
  }

  componentWillUnmount() {
    console.log(this.props.name, 'componentWillUnmount');
  }

  getDerivedStateFromProps(props, state) {
    console.log(props.name, 'getDerivedStateFromProps', props, state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.name, 'shouldComponentUpdate', nextProps, nextState);

    if (this.props.shy) {
      return this.props.counter % 2 === 0;
    }

    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log(this.props.name, 'getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log(this.props.name, 'componentDidUpdate');
  }

  render() {
    const { name, counter } = this.props;

    return (
      <p>{name} {counter || null}</p>

    );
  }
}

class App extends Component {
  render() {
    return (
      <Container />
    );
  }
}

export default App;
