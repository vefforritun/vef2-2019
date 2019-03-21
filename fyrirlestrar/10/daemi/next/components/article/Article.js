import React, { useState } from 'react';
import Link from 'next/link';

import css from './Article.css';

export default function Article(props) {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  const { id, article } = props;

  return (
    <div>
      <h2 className={css.title}>{id} – {article.title}</h2>
      <p className={css.text}>{article.text}</p>
      <button className={css.button} onClick={toggleShowMore}>Sýna meira</button>
      {showMore && (
        <p className={css.details}>{article.details}</p>
      )}
      <Link href="/">
        <a className={css.back}>Til baka</a>
      </Link>
    </div>
  );
}
