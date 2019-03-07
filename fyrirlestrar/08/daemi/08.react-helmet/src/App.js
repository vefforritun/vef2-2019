import React, { Component } from 'react';
import Helmet from 'react-helmet';

const colors = ['blue', 'green', 'gray', 'white', 'red', 'black'];

class Background extends Component {

  state = {
    color: 'white',
  }

  changeColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <React.Fragment>
        <Helmet title={`Litur: ${color}`}>
          <style>{`body { background-color: ${color}; }`}</style>
        </Helmet>
        <button onClick={this.changeColor}>Breyta um lit</button>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <main>
        <Helmet defaultTitle="Síða" titleTemplate="%s – Síða">
          <html lang="is" />
          <body className="foo" />
        </Helmet>
        <Background />
      </main>
    );
  }
}

export default App;
