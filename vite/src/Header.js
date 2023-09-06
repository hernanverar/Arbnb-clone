import React from "react";
import "./Header.css";
import logo from "./images/logo.jpeg";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={logo} />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
        <LanguageIcon />
      </div>

      <div className="header__right">
        <p>Book a Room</p>
      </div>
    </div>
  );
}

export default Header;
