import React from "react";
import AboutUs from "./about-us/AboutUs";
import BlogSection from "./blog/BlogSection";
import Cover from "./cover/Cover";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Header from "./header/Header";
import IconsSection from "./icons-section/IconsSection";
import OurServices from "./our-services/OurServices";
import Rooms from "./rooms/Rooms";

interface HomePageComponentProps {}

const HomePageComponent: React.FC<HomePageComponentProps> = () => {
  return (
    <>
      <Header />
      <Cover />
      <AboutUs/>
      <OurServices/>
      <IconsSection/>
      <Rooms/>
      <BlogSection/>
      <Gallery/>
      <Footer/>
    </>
  );
};

export default HomePageComponent;
