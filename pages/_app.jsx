import { Navbar } from "../components/Navigation/Navbar";
import { CloseButtonProvider } from "../context/CloseButtonContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CloseButtonProvider>
        <Component {...pageProps} />
        <Navbar />
      </CloseButtonProvider>
    </>
  );
}
