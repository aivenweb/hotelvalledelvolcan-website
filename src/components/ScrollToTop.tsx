import React from "react";

interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  return (
    <div id="scroll-to-top">
      <a
        href="http://landing.engotheme.com/html/skyline/demo/index.html#"
        title="sroll"
        className="scrollToTop"
        style={{display: 'block'}}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
};

export default ScrollToTop;
