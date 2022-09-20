import "../styles/globals.css";

import { Header } from "../components/Header";

import { CloseButtonProvider } from "../context/CloseButtonContext";
import { MediaQueryProvider } from "../context/MediaQueryContext";
import { BlogTemplateProvider } from "../context/BlogTemplateContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MediaQueryProvider>
        <CloseButtonProvider>
          <BlogTemplateProvider>
            <Header />

            <Component {...pageProps} />
          </BlogTemplateProvider>
        </CloseButtonProvider>
      </MediaQueryProvider>
    </>
  );
}
