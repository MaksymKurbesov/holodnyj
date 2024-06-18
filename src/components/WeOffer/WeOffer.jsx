import React from "react";
import styles from "./WeOffer.module.css";

const WeOffer = () => {
  return (
    <div className={styles["we-offer"]}>
      <div className={styles["statistic-wrapper"]}>
        <div className={styles["statistic"]}>
          <span>2000+</span>
          <p>Реалізованих проєктів</p>
        </div>
        <div className={styles["statistic"]}>
          <span>7+</span>
          <p>Років досвіду</p>
        </div>
        <div className={styles["statistic"]}>
          <span>1000+</span>
          <p>Задоволених клієнтів</p>
        </div>
      </div>
      <div className={styles["text-wrapper"]}>
        <p className={styles["text"]}>
          <span>Holodnyj</span> - для всіх і для кожного, будь то у вас маленька кав'ярня для душі, або велика гастрономічна мережа. Ми пропонуємо вам наш професійний та творчий підхід. Розробляємо проєкт за вашими розмірами або пропонуємо вітрини з наявності
        </p>
      </div>
    </div>
  );
};

export default WeOffer;
