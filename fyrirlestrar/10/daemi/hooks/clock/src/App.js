import React from 'react';

import Clock from './Clock';

export default function App() {
  return (
    <div>
      <Clock />
      <Clock timeZone="America/New_York" />
      <Clock timeZone="America/Los_Angeles" />
    </div>
  );
}
