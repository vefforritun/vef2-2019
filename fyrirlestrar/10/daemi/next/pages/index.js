import React, { useState } from 'react';

import Layout from '../components/layout/Layout';
import Data from '../components/data/Data';

import { getData } from '../api';

function Home(props) {
  const { initialData } = props;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  async function onFetchNewData(other) {
    setLoading(true);
    const newData = await getData(other);
    setData(newData);
    setLoading(false);
  }

  return (
    <Layout title="Gögn">
      <Data
        loading={loading}
        data={data}
        onFetchNewData={onFetchNewData}
      />
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const data = await getData();

  return { initialData: data };
}

export default Home
