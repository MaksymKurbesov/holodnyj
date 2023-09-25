import React from "react";
import Slide from "../Slide/Slide";
import styles from "./SlidesList.module.css";

const SlidesList = ({ slides, slideNumber }) => {
  return (
    <div
      className={styles["slide-list"]}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <Slide key={index} image={slide} />
      ))}
    </div>
  );
};

export default SlidesList;
