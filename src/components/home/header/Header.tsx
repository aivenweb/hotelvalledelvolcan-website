import React from "react";
import HeaderTop from "./HeaderTop";
import MenuHeader from "./MenuHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header-sky header-top-sky">
      <div className="container">
        <HeaderTop />
      </div>
      <MenuHeader />
    </header>
  );
};

export default Header;
