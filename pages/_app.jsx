import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/navigation/NavBar";
import { SideMenuLayout } from "../components/sideMenu/SideMenuLayout";
import { CloseButtonProvider } from "../context/CloseButtonContext";
import { HomeTabs } from "../components/HomeTabs";
import { Header } from "../components/Header";
import BlogTemplateCard from "../components/BlogTemplateCard";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <CloseButtonProvider>
        <NavBar />
        {/* Body */}
        <div className="bg-gray-50">
          <HomeTabs />
          <div className="w-11/12 flex justify-between p-10 m-auto">
            <div className="w-7/12">
              <Component {...pageProps} />
              <Layout />
            </div>
            <div className="w-4/12">
              <SideMenuLayout />
            </div>
          </div>
        </div>
      </CloseButtonProvider>
    </>
  );
}
