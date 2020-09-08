import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
        alt="logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
