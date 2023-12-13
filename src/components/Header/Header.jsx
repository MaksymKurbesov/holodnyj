import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Menu from "../Menu/Menu";
import Languages from "../Languages/Languages";
import { Link, useLocation } from "react-router-dom";

const toggleMenu = (status) => {
  if (!status) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `17px`;
  } else {
    setTimeout(() => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    }, 300);
  }
};

const toggleMenuOnMobile = (status) => {
  if (!status) {
    document.body.style.overflow = "hidden";
  } else {
    setTimeout(() => {
      document.body.style.overflow = "visible";
    }, 300);
  }
};

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    toggleMenu(true);
  }, [location.pathname]);

  return (
    <div className={"container"}>
      <header className={styles["header"]}>
        <Link
          to={"/"}
          className={`${styles["logotype"]} ${
            menuIsOpen && styles["isOpenLogotype"]
          }`}
        >
          LOGOTYPE
        </Link>
        <Languages status={menuIsOpen} />
        <button className={styles["discuss"]}>Обсудить проект</button>
        <div
          className={`${styles["hamburger"]} ${
            menuIsOpen && styles["isOpenHamburger"]
          }`}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
            if (window.innerWidth <= 1000) {
              toggleMenuOnMobile(menuIsOpen);
            } else {
              toggleMenu(menuIsOpen);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Menu status={menuIsOpen} />
      </header>
    </div>
  );
};

export default Header;
