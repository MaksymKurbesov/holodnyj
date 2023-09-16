import React from "react";
import styles from "./Menu.module.css";

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
                <a href={"#"}>Главная</a>
              </li>
              <li>
                <a href={"#"}>Проекты</a>
              </li>
              <li>
                <a href={"#"}>В наличие</a>
              </li>
              <li>
                <a href={"#"}>Модели</a>
              </li>
              <li>
                <a href={"#"}>О нас</a>
              </li>
              <li>
                <a href={"#"}>Контакты</a>
              </li>
            </ul>
          </nav>
          <div className={styles["contacts"]}>
            <p>
              <span>Почта:</span> holodnyj@gmail.com
            </p>
            <p>
              <span>Телефон:</span> +380123456789
            </p>
            <p>
              <span>Адрес:</span> г.Кривой Рог, ул. Гагарина 53
            </p>
          </div>
        </div>
        <div className={styles["social-links"]}>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Telegram</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
