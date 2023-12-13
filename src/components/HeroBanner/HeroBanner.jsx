import React from "react";
import styles from "./HeroBanner.module.css";
import Fridge from "../../assets/fridge.png";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import Slider from "../Slider/Slider";

const HeroBanner = () => {
  return (
    <div className={"container"}>
      <div className={styles["hero-banner"]}>
        <div className={styles["text-wrapper"]}>
          <p className={`${styles["main-text"]} ${styles["desktop-text"]}`}>
            Мы производим <span>холодильные</span> <br /> <span>витрины</span>
            <br />
            по вашим <br /> размерам
          </p>
          <p className={`${styles["main-text"]} ${styles["mobile-text"]}`}>
            Мы производим <span>холодильные</span>
            <br />
            <span>витрины</span> <br /> по вашим размерам
          </p>
          <p className={styles["subtext"]}>
            Элегантность в каждой детали, свежесть в каждом продукте.
          </p>
        </div>
        <div className={styles["fridge-wrapper"]}>
          <Slider />
          {/*<div className={styles["fridge-features"]}>*/}
          {/*  <div>*/}
          {/*    <p>Материал</p>*/}
          {/*    <span>Металл</span>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <p>Ширина</p>*/}
          {/*    <span>1.5м</span>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <p>Высота</p>*/}
          {/*    <span>2м</span>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <p>Длина</p>*/}
          {/*    <span>0.5м</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<img*/}
          {/*  className={styles["fridge"]}*/}
          {/*  src={Fridge}*/}
          {/*  width={500}*/}
          {/*  alt={"fridge"}*/}
          {/*/>*/}
          {/*<div className={styles["buttons"]}>*/}
          {/*  <button>*/}
          {/*    <ArrowIcon width={10} />*/}
          {/*  </button>*/}
          {/*  <div className={styles["dots"]}>*/}
          {/*    <span className={styles["active-dot"]}>01</span>*/}
          {/*    <span>02</span>*/}
          {/*    <span>03</span>*/}
          {/*    <span>04</span>*/}
          {/*  </div>*/}
          {/*  <button>*/}
          {/*    <ArrowIcon width={10} />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
