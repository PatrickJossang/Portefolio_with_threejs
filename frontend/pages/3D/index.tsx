import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Modelview = dynamic(() => import('../../components'), {
  ssr: false,
  loading: () => <div>loading page details... if you can read this wil i recomend to refress the site</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Three JS</title>
      </Head>
      <Modelview />
    </div>
  );
};

export default Home;