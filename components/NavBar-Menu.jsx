import { Auth, Hub } from "aws-amplify";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { useMediaQueryContext } from "../context/MediaQueryContext";
import "../configureAmplify";

export const NavBarMenu = () => {
  // サインインの状態管理
  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (error) {}
  }

  // メディアクエリ
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  // メニュートグル
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
      {/* モバイル */}
      {isMobileSite && (
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            orientation="vertical"
          >
            <Link href="/">
              <Tab value={0} label="Home" onClick={handleClick} />
            </Link>
            <Tab value={1} label="Code" onClick={handleClick} />
            <Tab value={2} label="Life" onClick={handleClick} />
          </Tabs>
          {menu()}
        </div>
      )}
      {/* タブレット(必要になり次第追加) */}
      {/* PC */}
      {isPcSite && (
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Link href="/">
              <Tab value={0} label="Home" onClick={handleClick} />
            </Link>
            <Tab value={1} label="Code" onClick={handleClick} />
            <Tab value={2} label="Life" onClick={handleClick} />
          </Tabs>
          {menu()}
          <Link href="/profile">
            <button>ログイン</button>
          </Link>
          {/* サインイン時表示 */}
          {signedUser && (
            <>
              <Link href="/my-posts">
                <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate100 hover:bg-slate-900">
                  My Post
                </a>
              </Link>
              <Link href="/create-post">
                <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate100 hover:bg-slate-900">
                  Create Post
                </a>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};
