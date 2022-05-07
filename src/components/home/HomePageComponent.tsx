import React from "react";
import ScrollToTop from "../ScrollToTop";
import AboutUs from "./AboutUs";
import BlogSection from "./blog/BlogSection";
import Cover from "./cover/Cover";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Header from "./header/Header";
import IconsSection from "./icons-section/IconsSection";

interface HomePageComponentProps {}

const HomePageComponent: React.FC<HomePageComponentProps> = () => {
  return (
    <>
      <Header />
      <Cover />
      <AboutUs/>
      <IconsSection/>
      <BlogSection/>
      <Gallery/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default HomePageComponent;