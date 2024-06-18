import React from "react";
import styles from "./Languages.module.css";

const Languages = ({ status }) => {
  return (
    <div
      className={`${styles["languages"]} ${status ? styles["isOpen"] : null}`}
    >
      <button>UA</button>
      <button>EN</button>
    </div>
  );
};

export default Languages;
