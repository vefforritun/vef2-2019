import React, { Component } from 'react'
import api from './api';

// Ef það er notandi í localStorage erum við með innskráðan notanda
// hér gætum við líka sótt token
const user = JSON.parse(localStorage.getItem('user') || 'null');

export const Context = React.createContext({
  fetching: false,
  authenticated: !!user,
  user,
  message: '',
  loginUser: () => {},
  logoutUser: () => {},
});

export default class User extends Component {
  state = {
    fetching: false,
    authenticated: !!user,
    message: '',
    user,
  }

  loginUser = async (username, password) => {
    this.setState({ fetching: true });

    let login;
    try {
      login = await api.login(username, password);
    } catch (e) {
      this.setState({ message: e.message });
    }

    if (!login.loggedin) {
      this.setState({ message: login.error, fetching: false });
    }

    if (login.loggedin) {
      const { user } = login;
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({ user, fetching: false, authenticated: true });
    }
  };

  logoutUser = async () => {
    localStorage.removeItem('user');
    this.setState({ user: null });
  };

  render() {
    const { children } = this.props;

    return (
      <Context.Provider value={{
        ...this.state,
        loginUser: this.loginUser,
        logoutUser: this.logoutUser,
      }}>
        {children}
      </Context.Provider>
    );
  }
}
