import "@/styles/globals.css";
import "@/styles/loadingspinner.css";
import "@/styles/nav.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export default function App({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
