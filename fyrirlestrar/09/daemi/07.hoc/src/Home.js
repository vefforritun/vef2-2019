import React from 'react';

import Fetch from './Fetch';
import Currency from './Currency';
import Earthquakes from './Earthquakes';

function Home(props) {
  return (
    <div>
      <Currency />
      <Earthquakes />
      {/* <Fetch url="http://apis.is/currency/arion" />
      <Fetch url="http://apis.is/earthquake/is" /> */}
    </div>
  );
}

export default Home;
