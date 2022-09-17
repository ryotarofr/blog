import "../styles/globals.css";

import { Header } from "../components/Header";

import { CloseButtonProvider } from "../context/CloseButtonContext";
import { MediaQueryProvider } from "../context/MediaQueryContext";
import { Tiptap } from "../components/Editor/index";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MediaQueryProvider>
        <CloseButtonProvider>
          <Header />
          <Component {...pageProps} />
          <Tiptap />
        </CloseButtonProvider>
      </MediaQueryProvider>
    </>
  );
}
