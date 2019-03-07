import React, { Component } from 'react';

class Data extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7],
  }

  del = id => () => {
    const { items } = this.state;
    items.splice(items.indexOf(id), 1);
    this.setState({ items });
    console.log(`Deleting ${id}`);
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
            <button onClick={this.del(item)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Data />
      </div>
    );
  }
}

export default App;
