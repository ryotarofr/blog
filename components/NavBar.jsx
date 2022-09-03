import Box from "@mui/material/Box";

import { NavBarMenu } from "./NavBar-Menu";
import { SearchBar } from "./SearchBar";
import { BurgerList } from "./BurgerList";
import { useMediaQueryContext } from "../context/MediaQueryContext";

export const NavBar = () => {
  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      {/* モバイルサイト */}
      {isMobileSite && (
        <>
          <nav className="container py-5 mx-auto">
            <div className="">
              <div className="flex place-content-between">
                <h3 className="pl-4 text-2xl font-medium text-blue-500">
                  LOGO
                </h3>
                {/* Burger Menu */}
                <div className="pr-4">
                  <BurgerList />
                </div>
              </div>
              {/* left header section */}

              <div className="items-center px-20">
                <NavBarMenu />
              </div>

              <div className="pt-2 px-6">
                {/* Search Bar */}
                <SearchBar />
              </div>
            </div>
          </nav>
        </>
      )}
      {/* PCサイト */}
      {isPcSite && (
        <>
          <nav className="container flex justify-around py-5 mx-auto">
            <div className="flex items-center">
              <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
            </div>
            {/* left header section */}
            <div className="items-center lg:flex">
              <NavBarMenu />
            </div>
            <div className="pt-2">
              {/* Search Bar */}
              <SearchBar />
            </div>
            <div>
              {/* Burger Menu */}
              <BurgerList />
            </div>
          </nav>
        </>
      )}
    </Box>
  );
};
