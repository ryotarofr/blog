import Box from "@mui/material/Box";
import { NavBarMenu } from "./NavBar-Menu";
import { SearchBar } from "./SearchBar";
import { BurgerList } from "./BurgerList";

export const NavBar = () => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <nav className="container flex justify-around py-5 mx-auto">
        <div className="flex items-center">
          <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
        </div>
        {/* left header section */}
        <div className="items-center hidden lg:flex">
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
    </Box>
  );
};
