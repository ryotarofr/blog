import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { CloseButtonProvider } from "../context/CloseButtonContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <CloseButtonProvider>
        <Layout />
        <Component {...pageProps} />
      </CloseButtonProvider>
    </>
  );
}
