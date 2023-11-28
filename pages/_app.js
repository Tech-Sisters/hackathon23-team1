import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/loadingspinner.css";
import "@/styles/nav.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export default function App({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
