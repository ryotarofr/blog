import { useMediaQueryContext } from "../context/MediaQueryContext";

import BlogTemplateCard from "./BlogTemplateCard";
import { Header } from "./Header";
import { HomeTabs } from "./HomeTabs";
import { NavBar } from "./NavBar";
import { SideMenuLayout } from "./sideMenu/SideMenuLayout";

export const Layout = () => {
  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      {/* モバイル */}
      {isMobileSite && (
        <>
          <Header />
          <NavBar />
          <div className="bg-gray-50">
            <HomeTabs />
            <div className="flex justify-center p-5">
              <BlogTemplateCard />
            </div>
            <div className="p-4">
              <SideMenuLayout />
            </div>
          </div>
        </>
      )}
      {/* タブレット(必要になり次第) */}
      {/* PC */}
      {isPcSite && (
        <>
          <Header />
          <NavBar />
          <div className="bg-gray-50">
            <HomeTabs />
            <div className="w-11/12 flex justify-between p-10 m-auto">
              <div className="w-7/12">
                <BlogTemplateCard />
              </div>

              <div className="w-4/12">
                <SideMenuLayout />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
