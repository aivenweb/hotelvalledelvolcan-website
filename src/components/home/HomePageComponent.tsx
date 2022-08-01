import React, { useEffect, useState } from "react";
import ScrollToTop from "../ScrollToTop";
import AboutUs from "./about-us/AboutUs";
import BlogSection from "./blog/BlogSection";
import Cover from "./cover/Cover";
import Gallery from "./gallery/Gallery";
import IconsSection from "./icons-section/IconsSection";
import OurServices from "./our-services/OurServices";
import Rooms from "./rooms/Rooms";

interface HomePageComponentProps {}

const HomePageComponent: React.FC<HomePageComponentProps> = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Cover />
      <AboutUs />
      <OurServices />
      <IconsSection />
      <Rooms />
      {/* <BlogSection /> */}
      <Gallery />
      {
        showButton && (
          <ScrollToTop scrollToTop={scrollToTop} />
        )
      }
    </>
  );
};

export default HomePageComponent;
