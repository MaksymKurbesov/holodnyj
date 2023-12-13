import React, { useRef, useState } from "react";
import styles from "./AccordionItem.module.css";

const AccordionItem = ({ title, content, className, step }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef();

  return (
    <li
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`${styles["accordion-item"]}`}
      style={
        isOpen
          ? { height: contentEl.current?.scrollHeight + 100 }
          : { height: "70px" }
      }
    >
      <div className={styles["title"]}>
        <span className={styles["count"]}>/0{step}/</span>
        <p>{title}</p>
        <span
          className={`${styles["icon"]} ${isOpen ? styles["isOpen"] : null}`}
        >
          +
        </span>
      </div>
      <div
        ref={contentEl}
        className={`${styles["content"]} ${styles[className]}`}
      >
        <div>{content}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
