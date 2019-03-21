import React from 'react';

import { Context } from './Theme';

export default function Button(props) {
  const { children, onClick } = props;

  return (
    <Context.Consumer>
      {(context) => {
        const { theme } = context;

        const style = {
          color: theme === 'dark' ? 'white' : 'black',
          backgroundColor: theme === 'dark' ? 'black' : 'white',
        };
        return (
          <button onClick={onClick} style={style}>{children}</button>
        );
      }}
    </Context.Consumer>
  );
}
