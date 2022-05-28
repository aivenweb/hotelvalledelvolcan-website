import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import MenuHeader from "./MenuHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 5) {
      setScrollOnTop(true)
    } else setScrollOnTop(false);
  };
  // "header-sky header-top-sky"
  return (
    <header className={scrollOnTop ? ("header-sky") : ("header-sky header-top-sky")}>
      <div className="container">
        <HeaderTop />
      </div>
      <MenuHeader />
    </header>
  );
};

export default Header;
