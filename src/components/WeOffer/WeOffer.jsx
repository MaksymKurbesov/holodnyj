import React from "react";
import styles from "./WeOffer.module.css";

const WeOffer = () => {
  return (
    <div className={styles["we-offer"]}>
      <div className={styles["statistic-wrapper"]}>
        <div className={styles["statistic"]}>
          <span>300+</span>
          <p>Реализованных проектов</p>
        </div>
        <div className={styles["statistic"]}>
          <span>10+</span>
          <p>Лет опыта</p>
        </div>
        <div className={styles["statistic"]}>
          <span>150+</span>
          <p>Клиентов</p>
        </div>
      </div>
      <div className={styles["text-wrapper"]}>
        <p className={styles["text"]}>
          Мы предлагаем вам, наш профессионализм и творческий педантизм вместить
          в ваш размер. <span>holodnyj</span> - для всех и для каждого будь то у
          вас маленькая кофейня для души, либо крупная гастрономическая сеть. С
          удовольствием предложим вам готовые проекты, либо разработаем его
          вместе с вами.
        </p>
      </div>
    </div>
  );
};

export default WeOffer;
