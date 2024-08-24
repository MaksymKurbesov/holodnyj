import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const Menu = ({ status }) => {
  return (
    <div
      className={`${styles["cover"]} ${
        status ? styles["isOpenCover"] : styles["isClosed"]
      }`}
    >
      <div
        className={`${styles["menu-wrapper"]} ${
          status ? styles["isOpenMenu"] : styles["isClosed"]
        }`}
      >
        <div className={styles["menu-content"]}>
          <nav>
            <ul className={`${styles["nav-list"]}`}>
              <li>
                <NavLink to={"/"}>Головна</NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>Проекти</NavLink>
              </li>
              <li>
                <NavLink to={"/models"}>Моделі</NavLink>
              </li>
              <li>
                <NavLink to={"/about-us"}>Про нас</NavLink>
              </li>
              <li>
                <NavLink to={"/in-stock"}>У наявності</NavLink>
              </li>
              <li>
                <NavLink to={"/contacts"}>Контакти</NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles["contacts"]}>
            <p>
              <span>Пошта:</span> holodnyjmail@gmail.com
            </p>
            <p>
              <span>Телефон:</span> +380977040374
            </p>
            <p>
              <span>Адреса:</span> м. Кривий Ріг
            </p>
          </div>
        </div>
        {/*<div className={styles["social-links"]}>*/}
        {/*  <p>Facebook</p>*/}
        {/*  <p>Instagram</p>*/}
        {/*  <p>Telegram</p>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Menu;
