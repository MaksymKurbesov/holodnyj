import React from "react";
import styles from "./WeOffer.module.css";
import Image1 from "../../assets/we-offer1.jpg";
import Image2 from "../../assets/we-offer2.jpg";

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
        {/*<div className={styles["statistic"]}>*/}
        {/*  <span>100+</span>*/}
        {/*  <p>В сфере дизайна и проектирования</p>*/}
        {/*</div>*/}
      </div>
      <div className={styles["text-wrapper"]}>
        {/*<h2>О нас</h2>*/}
        <p className={styles["text"]}>
          Мы предлагаем вам, наш профессионализм и творческий педантизм вместить
          в ваш размер. <span>holodnyj</span> - для всех и для каждого будь то у
          вас маленькая кофейня для души, либо крупная гастрономическая сеть. С
          удовольствием предложим вам готовые проекты, либо разработаем его
          вместе с вами.
        </p>
      </div>
      {/*<div className={styles["photos-wrapper"]}>*/}
      {/*<div className={styles["photo-offer"]}>*/}
      {/*  <img src={Image1} alt={"offer"} width={350} height={350} />*/}
      {/*</div>*/}
      {/*<div className={styles["photo-offer"]}>*/}
      {/*  <img src={Image2} alt={"offer"} width={"100%"} height={"100%"} />*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default WeOffer;
