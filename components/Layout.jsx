import BlogTemplateCard from "./BlogTemplateCard";
import { Header } from "./Header";
import { HomeTabs } from "./HomeTabs";
import { SideMenuLayout } from "./sideMenu/SideMenuLayout";
import { Navbar } from "./Navigation/Navbar";
export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
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
  );
};
