import React from "react";
import styles from "./Dots.module.css";

const Dots = ({ slidesCount, slideNumber, goToSlide, changeSlide }) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <div
          key={i}
          onClick={() => goToSlide(i)}
          className={`${styles["dot"]} ${
            slideNumber === i ? styles["selected"] : ""
          }`}
        >
          0{i + 1}
        </div>
      );
    }

    return dots;
  };

  return (
    <div className={styles["dots"]}>
      <div className={styles["arrows"]}>
        <div
          className={`${styles["arrow"]} ${styles["left"]}`}
          onClick={() => changeSlide(-1)}
        />
        <div
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={() => changeSlide(1)}
        />
      </div>
      {renderDots()}
    </div>
  );
};

export default Dots;
