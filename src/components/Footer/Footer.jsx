import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../../assets/social-icons/facebook.png";
import Instagram from "../../assets/social-icons/instagram.png";
import Telegram from "../../assets/social-icons/telegram.png";
import Viber from "../../assets/social-icons/viber.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["first-column"]}>
        <NavLink to={"/"}>
          <p className={styles["logotype"]}>LOGOTYPE</p>
        </NavLink>
        <p className={styles["copyright"]}>
          © 2023 holodnyj все права защищены.
        </p>
      </div>
      <nav className={styles["nav-links"]}>
        <NavLink to={"/"}>Главная</NavLink>
        <NavLink to={"/in-stock"}>В наличие</NavLink>
        <NavLink to={"/projects"}>Проекты</NavLink>
        <NavLink to={"/models"}>Модели</NavLink>
        <NavLink to={"/about-us"}>О нас</NavLink>
        <NavLink to={"/contacts"}>Контакты</NavLink>
      </nav>
      <div className={styles["last-column"]}>
        <ul className={styles["contact-links"]}>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Telegram</li>
          <li>Viber</li>
        </ul>
        <p className={styles["mobile-copyright"]}>
          © 2023 holodnyj все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
