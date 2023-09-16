import React from "react";
import styles from "./HeroBanner.module.css";
// import Fridge from "../../assets/tortuga3_P6_PV-NT-CV.webp";
import Fridge from "../../assets/fridge.png";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

const HeroBanner = () => {
  return (
    <div className={styles["hero-banner"]}>
      <div className={styles["text-wrapper"]}>
        <p className={styles["main-text"]}>
          Мы производим <span>холодильные</span> <span>витрины</span> по вашим
          размерам
        </p>
        <p className={styles["subtext"]}>
          Элегантность в каждой детали, свежесть в каждом продукте.
        </p>
      </div>
      <div className={styles["fridge-wrapper"]}>
        <img
          className={styles["fridge"]}
          src={Fridge}
          width={500}
          alt={"fridge"}
        />
        <div className={styles["fridge-features"]}>
          <div>
            <p>Материал</p>
            <span>Металл</span>
          </div>
          <div>
            <p>Ширина</p>
            <span>1.5м</span>
          </div>
          <div>
            <p>Высота</p>
            <span>2м</span>
          </div>
          <div>
            <p>Длина</p>
            <span>0.5м</span>
          </div>
        </div>
      </div>
      <div className={styles["features-wrapper"]}>
        {/*<ul className={styles["features"]}>*/}
        {/*  <li>*/}
        {/*    <p>Материал</p>*/}
        {/*    <span>Металл</span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <p>Ширина</p>*/}
        {/*    <span>1.2м</span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <p>Высота</p>*/}
        {/*    <span>2м</span>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <p>Длина</p>*/}
        {/*    <span>1.5м</span>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
      <div className={styles["buttons"]}>
        <button>
          <ArrowIcon width={10} />
        </button>
        <div className={styles["dots"]}>
          <span className={styles["active-dot"]}>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </div>
        <button>
          <ArrowIcon width={10} />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
