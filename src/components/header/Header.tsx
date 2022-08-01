import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import MenuHeader from "./MenuHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true)
  const [weather, setWeather] = useState<number>(0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  useEffect(() => {
    fetch("https://services.meteored.com/web/forecast/cookie/v1/321450.json")
      .then(response => response.json())
      .then(res => {
        setWeather(res.response.data.current.temperature.value)
      })
  }, []) 

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
        <HeaderTop weather={weather}/>
      </div>
      <MenuHeader />
    </header>
  );
};

export default Header;
