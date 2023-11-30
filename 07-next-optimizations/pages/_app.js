import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
//This is your application shell, it is the root component inside the body tag.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
