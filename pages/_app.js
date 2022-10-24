import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cafe</title>
        <meta name="description" content="Discover the beauty of cafe" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
