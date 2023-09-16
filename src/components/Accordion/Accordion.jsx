import React, { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import styles from "./Accordion.module.css";
import DesignAndSize from "../../assets/order-proccess/design-and-size copy.png";
import ContactUs from "../../assets/order-proccess/contact-us copy.png";

const Accordion = ({ data, className }) => {
  return (
    <div className={styles["accordion-wrapper"]}>
      {/*<img src={ContactUs} width={500} className={styles["image"]} />*/}
      <ul className={styles["accordion"]}>
        {data.map(({ title, content, image }, index) => {
          return (
            <AccordionItem
              image={image}
              title={title}
              content={content}
              key={index}
              className={className}
              step={index + 1}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
