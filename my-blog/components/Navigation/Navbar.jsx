import { BurgerList } from "./BurgerList";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <nav className="container flex justify-around py-5 mx-auto bg-white">
      <div className="flex items-center">
        <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      {/* left header section */}
      <div className="items-center hidden space-x-8 lg:flex">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Blogs</a>
        <a href="">Our Team</a>
        <a href="">Contact Us</a>
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
  );
};
