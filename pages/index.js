import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>FullStack developer and Software Enginner</p>
        <p>
          Hi I'm Murilo. I'm a software developer and engineer 
        </p>
      </section>
    </Layout>
  );
}