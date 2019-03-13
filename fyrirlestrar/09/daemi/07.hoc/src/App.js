import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>

      <nav>
        <ul>
          <li><NavLink to="/">Heim</NavLink></li>
          <li><NavLink to="/about">Um</NavLink></li>
        </ul>
      </nav>

        <section>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
          </Switch>
        </section>

      </div>
    );
  }
}

export default App;
