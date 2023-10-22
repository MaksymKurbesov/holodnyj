import React from "react";
import styles from "./Models.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MODELS_DATA } from "./MODELS_DATA.js";
import { NavLink } from "react-router-dom";

const Models = () => {
  return (
    <>
      <Header />
      <div className={styles["models-wrapper"]}>
        <h2>Модели</h2>
        <div className={styles["models"]}>
          {MODELS_DATA.map((model) => {
            return (
              <NavLink
                key={model.name}
                to={model.link}
                className={styles["model"]}
              >
                <h3>{model.name}</h3>
                <img src={model.image} alt={""} width={"100%"} />
              </NavLink>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Models;
