import { NavBar } from "../components/navigation/NavBar";
import { CloseButtonProvider } from "../context/CloseButtonContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex justify-center pt-6 text-2xl italic">
        Fujiiの技術ブログ
      </div>
      <CloseButtonProvider>
        <NavBar />
        <Component {...pageProps} />
      </CloseButtonProvider>
    </>
  );
}
