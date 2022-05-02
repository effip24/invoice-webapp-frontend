import "./SideNav.css";
import { useEffect, useState } from "react";

import logo from "../../images/assets/logo.png";
import moon from "../../images/assets/icon-moon.svg";
import sun from "../../images/assets/icon-sun.svg";
import avatar from "../../images/assets/image-avatar.jpg";

import { themeChanger } from "../../utils/utils";

const SideNav = () => {
  const [theme, setTheme] = useState({ isLight: true, isDark: false });

  useEffect(() => {
    themeChanger(theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme({
      isLight: !theme.isLight,
      isDark: !theme.isDark,
    });
  };

  return (
    <div className="side-nav">
      <img className="side-nav__logo" src={logo} alt="logo"></img>

      <div className="side-nav__theme-wrap">
        <img
          className="side-nav__theme-button"
          src={theme.isLight ? moon : sun}
          alt="theme button"
          onClick={handleThemeChange}
        ></img>

        <div className="side-nav__theme-seperator"></div>

        <img className="side-nav__avatar" src={avatar} alt="avatar"></img>
      </div>
    </div>
  );
};
export default SideNav;
