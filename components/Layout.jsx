import { useBlogTemplateContext } from "../context/BlogTemplateContext";
import { useMediaQueryContext } from "../context/MediaQueryContext";

import { BlogTemplateCard } from "./BlogTemplateCard";
import { HomeTabs } from "./HomeTabs";
import { SideMenuLayout } from "./sideMenu/SideMenuLayout";

export const Layout = ({ cards }) => {
  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      {/* モバイル */}
      {isMobileSite && (
        <>
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
