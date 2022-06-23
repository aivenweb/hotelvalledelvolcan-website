import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ScrollToTopProps {
  scrollToTop: Function;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({scrollToTop}) => {
  return (
    <button onClick={() => scrollToTop()} id="scroll-to-top">
      <div
        className="scrollToTop"
        style={{display: 'block'}}
      >
        <FontAwesomeIcon icon={faAngleUp}/>
      </div>
    </button>
  );
};

export default ScrollToTop;
