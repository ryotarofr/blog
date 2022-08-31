import { useState } from "react";
import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { BurgerList } from "./BurgerList";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <nav className="container flex justify-around py-5 mx-auto bg-white">
        <div className="flex items-center">
          <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
        </div>
        {/* left header section */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {/* 随時追加 */}
            <Tab value={0} label="Home" onClick={() => router.push("/")} />
            <Tab
              value={1}
              label="React"
              onClick={() => router.push("/react")}
            />
            <Tab
              value={2}
              label="Python"
              onClick={() => router.push("/python")}
            />
            <Tab
              value={3}
              label="その他"
              onClick={() => router.push("/other")}
            />
            <Tab
              value={4}
              label="サイトマップ"
              onClick={() => router.push("/sitemap")}
            />
          </Tabs>
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
