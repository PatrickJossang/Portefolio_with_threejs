import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Modelview = dynamic(() => import('../components/'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <Modelview />
    </div>
  );
};

export default Home;