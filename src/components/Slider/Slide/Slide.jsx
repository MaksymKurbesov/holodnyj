import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ image, title }) => {
  return (
    <div className={styles["slide"]}>
      <img src={image} alt={"'"} className={styles["slide-image"]} />
      <div className={styles["slide-title"]}>{title}</div>
    </div>
  );
};

export default Slide;
