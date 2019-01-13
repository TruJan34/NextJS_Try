// import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import '../scss/style.scss';

const Index = () => (
  <section>
    <Head>
      <title>Hello world</title>
    </Head>
    <Navbar />
    <h1>Hello World from Next Js</h1>
    {/* <Link href="/about">
      <a title="About NextJs">About TNext JS Projects..</a>
    </Link> */}
    {/* <style jsx global>{`
      nav a {
        padding: 10px;
        text-decoration: none;
        color: green;
      }
    `}</style> */}
  </section>
);

export default Index;
