import React, { useState, useEffect } from "react";
import polzunok from "./polzunok.svg";
import './App.css';

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className={`btn-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
        <img src={polzunok} alt="" />
    </button>
  );
};

export default ButtonToTop;