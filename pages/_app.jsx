import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { CloseButtonProvider } from "../context/CloseButtonContext";
import { MediaQueryProvider } from "../context/MediaQueryContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MediaQueryProvider>
        <CloseButtonProvider>
          <Layout />
          <Component {...pageProps} />
        </CloseButtonProvider>
      </MediaQueryProvider>
    </>
  );
}
