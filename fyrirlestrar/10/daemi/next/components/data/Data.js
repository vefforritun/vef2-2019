import React, { useState } from 'react';
import Link from 'next/link';

import css from './Data.css';

export default function Data(props) {
  const [showNew, setShowNew] = useState(true);
  const { data, loading, onFetchNewData } = props;

  function onClick() {
    setShowNew(false);
    onFetchNewData(true);
  }

  return (
    <React.Fragment>
      {loading && (
        (<p>Hleð gögnum...</p>)
      )}
      {!loading && (
        <React.Fragment>
          {showNew && (
            <button onClick={onClick}>Sækja ný gögn</button>
          )}
          <h2>{showNew ? 'Gömul gögn' : 'Ný gögn'}</h2>
          <ul className={css.data}>
            {data.results.map((item, i) => (
              <li key={i}>
                {item.shortName} = {item.value}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
      <p><Link as="/article/1" href="/article?id=1"><a>Grein #1</a></Link></p>
      <p><Link as="/article/2" href="/article?id=2"><a>Grein #2</a></Link></p>
      <p><Link as="/article/3" href="/article?id=3"><a>Grein #3</a></Link></p>
    </React.Fragment>
  )
}
