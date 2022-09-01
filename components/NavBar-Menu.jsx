import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export const NavBarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menu = () => {
    switch (value) {
      case 1:
        return (
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>ALL</MenuItem>
            <MenuItem onClick={handleClose}>React</MenuItem>
            <MenuItem onClick={handleClose}>Pthon</MenuItem>
            <MenuItem onClick={handleClose}>Firebase</MenuItem>
          </Menu>
        );
      case 2:
        return (
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>ALL</MenuItem>
            <MenuItem onClick={handleClose}>WORK</MenuItem>
            <MenuItem onClick={handleClose}>BLOG</MenuItem>
          </Menu>
        );
    }
  };

  return (
    <>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab value={0} label="Home" onClick={handleClick} />
          <Tab value={1} label="Code" onClick={handleClick} />
          <Tab value={2} label="Life" onClick={handleClick} />
        </Tabs>
        {menu()}
      </div>
    </>
  );
};
