import React from "react";
import styles from "./Footer.module.css";
import MailIcon from "../../assets/icons/footer-mail.svg";
import PhoneIcon from "../../assets/icons/footer-phone.svg";
import GeoIcon from "../../assets/icons/footer-geo.svg";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["first-column"]}>
        <NavLink to={"/"}>
          <p className={styles["logotype"]}>LOGOTYPE</p>
        </NavLink>
        <p className={styles["copyright"]}>
          © 2024 holodnyj всі права захищені.
        </p>
      </div>
      <nav className={styles["nav-links"]}>
        <NavLink to={"/"}>Головна</NavLink>
        <NavLink to={"/in-stock"}>Проекти</NavLink>
        <NavLink to={"/projects"}>Моделі</NavLink>
        <NavLink to={"/models"}>Про нас</NavLink>
        <NavLink to={"/about-us"}>У наявності</NavLink>
        <NavLink to={"/contacts"}>Контакти</NavLink>
      </nav>
      <div className={styles["last-column"]}>
        <ul className={styles["contact-links"]}>
          <li>
            <img width={20} src={MailIcon} alt={""} />
            holodnyjmail@gmail.com
          </li>
          <li>
            <img width={15} src={PhoneIcon} alt={""} />
            +380977040374
          </li>
          <li>
            <img width={20} src={GeoIcon} alt={""} /> м. Кривий Ріг
          </li>
        </ul>
        <p className={styles["mobile-copyright"]}>
          © 2024 holodnyj всі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
