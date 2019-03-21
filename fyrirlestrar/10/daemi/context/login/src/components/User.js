import React, { Component } from 'react';

import { Context } from '../User';

export default class User extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ user, authenticated }) => {

          if (!authenticated) {
            return (<p>Engin notandi innskráður</p>);
          }

          return (
            <p>Innskráning: {user.name} ({user.username})</p>
          );
        }}
      </Context.Consumer>
    );
  }
}
