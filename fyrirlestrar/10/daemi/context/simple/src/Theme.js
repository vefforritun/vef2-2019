import React, { Component } from 'react'

const defaultTheme = 'dark';

export const Context = React.createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export default class ThemeProvider extends Component {
  state = {
    theme: defaultTheme,
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === 'dark' ? 'light' : 'dark';

    this.setState({ theme: newTheme });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <Context.Provider value={{
        theme,
        toggleTheme: this.toggleTheme,
      }}>
        {children}
      </Context.Provider>
    );
  }
}
