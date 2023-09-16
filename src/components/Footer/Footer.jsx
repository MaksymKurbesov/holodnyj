import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../../assets/social-icons/facebook.png";
import Instagram from "../../assets/social-icons/instagram.png";
import Telegram from "../../assets/social-icons/telegram.png";
import Viber from "../../assets/social-icons/viber.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["first-column"]}>
        <p className={styles["logotype"]}>LOGOTYPE</p>
        <p className={styles["copyright"]}>
          © 2023 holodnyj все права защищены.
        </p>
      </div>
      <nav className={styles["nav-links"]}>
        <a href={"/#"}>Главная</a>
        <a href={"/#"}>В наличие</a>
        <a href={"/#"}>Проекты</a>
        <a href={"/#"}>Модели</a>
        <a href={"/#"}>О нас</a>
        <a href={"/#"}>Контакты</a>
      </nav>
      <div className={styles["last-column"]}>
        <ul className={styles["contact-links"]}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>Viber</li>
          {/*<li>*/}
          {/*  <img src={Facebook} alt={""} width={30} />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src={Instagram} alt={""} width={30} />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src={Telegram} alt={""} width={30} />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src={Viber} alt={""} width={30} />*/}
          {/*</li>*/}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
