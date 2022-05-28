import React from "react";
import AboutUs from "./about-us/AboutUs";
import BlogSection from "./blog/BlogSection";
import Cover from "./cover/Cover";
import Gallery from "./gallery/Gallery";
import IconsSection from "./icons-section/IconsSection";
import OurServices from "./our-services/OurServices";
import Rooms from "./rooms/Rooms";

interface HomePageComponentProps {}

const HomePageComponent: React.FC<HomePageComponentProps> = () => {
  return (
    <>
      <Cover />
      <AboutUs />
      <OurServices />
      <IconsSection />
      <Rooms />
      <BlogSection />
      <Gallery />
    </>
  );
};

export default HomePageComponent;
