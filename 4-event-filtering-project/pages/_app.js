import "../styles/globals.css";
import Layout from "../components/layout/layout";
//This is the page content component... we can wrap it with a layout component like a header.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
