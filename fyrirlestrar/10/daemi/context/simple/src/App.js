import React from 'react';

import Button from './Button';
import { Context } from './Theme';

function App(props) {

  return (
    <main>
      <Button>Takki sem gerir ekkert</Button>
      <Context.Consumer>
        {(context) => (
          <React.Fragment>
            <p>Þemað er: {context.theme}</p>
            <Button onClick={context.toggleTheme}>Breyta þema</Button>
          </React.Fragment>
        )}
      </Context.Consumer>
    </main>
  );
}

export default App;
