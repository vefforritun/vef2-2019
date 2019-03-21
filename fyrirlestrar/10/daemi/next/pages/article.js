import React from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import Article from '../components/article/Article';

import { getArticle } from '../api';

function Home(props) {
  const { id, article } = props;
console.log('yo', id, article)
  if (!article) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout title={`Grein #${id}`}>
      <Article id={id} article={article} />
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;

  const article = await getArticle(id);

  return {
    id,
    article,
  };
}

export default Home
