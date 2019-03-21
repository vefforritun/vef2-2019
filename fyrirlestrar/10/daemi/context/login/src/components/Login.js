import React, { Component } from 'react';

import { Context } from '../User';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (loginUser) => async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    loginUser(username, password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Context.Consumer>
        {({ message, loginUser, logoutUser, fetching, authenticated }) => {

          if (authenticated) {
            return (
              <button onClick={logoutUser}>Útskrá</button>
            );
          }

          if (fetching) {
            return (
              <p>Skrái inn <em>{username}</em>...</p>
            );
          }

          return (
            <React.Fragment>
              <div>
                {message && (
                  <p>{message}</p>
                )}

                <form onSubmit={this.handleSubmit(loginUser)}>

                  <div>
                    <label htmlFor="username">Notendanafn:</label>
                    <input autoComplete="off" id="username" type="text" name="username" value={username} onChange={this.handleInputChange} />
                  </div>

                  <div>
                    <label htmlFor="password">Lykilorð:</label>
                    <input autoComplete="off" id="password" type="password" name="password" value={password} onChange={this.handleInputChange} />
                  </div>

                  <button disabled={fetching}>Innskrá</button>
                </form>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
