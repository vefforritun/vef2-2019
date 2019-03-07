import React, { Component } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function FooBar(props) {

  // react mun kvarta yfir því að element vanti key
  return [
    <p>foo</p>,
    <p>bar</p>,
  ];
}

function NullComponent(props) {
  return null;
}

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(number =>
      <li key={number.toString()}>
        {number}
      </li>);

    return (
      <main>
        <Welcome name="foo" />
        <NullComponent />
        <WelcomeClass name="bar" />
        <FooBar />

        {listItems}

        <Table />

        <React.Fragment>foo</React.Fragment>
      </main>
    );
  }
}

function Table(props) {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

function Columns(props) {
  return (
    <React.Fragment>
      <td>Foo</td>
      <td>Bar</td>
    </React.Fragment>
  );
}

export default App;
