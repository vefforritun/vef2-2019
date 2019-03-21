import React from 'react';
import Head from 'next/head'

import './Layout.css';

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </main>
  </div>
)
