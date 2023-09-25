import React from "react";
import styles from "./Project.module.css";
import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ReactComponent as GeoIcon } from "../../assets/icons/geo.svg";
import AdditionalPhoto1 from "../../assets/projects/additional-project1.jpg";
import AdditionalPhoto2 from "../../assets/projects/additional-project2.jpg";
import AdditionalPhoto3 from "../../assets/projects/additional-project3.jpg";
import AdditionalPhoto4 from "../../assets/projects/additional-project4.jpg";
import AdditionalPhoto5 from "../../assets/projects/additional-project5.jpg";
import Footer from "../../components/Footer/Footer";
import { PROJECTS } from "../Projects/PROJECTS.js";

const Project = () => {
  const location = useLocation();
  const project = PROJECTS.find(
    (project) => project.link === location.pathname.split("/")[2]
  );

  return (
    <>
      <Header />
      <div className={styles["project"]}>
        <Link to={"/projects"} className={styles["back-button"]}>
          Назад к проектам
        </Link>
        <h3 className={styles["name"]}>{project.name}</h3>
        <GeoIcon className={styles["geo-icon"]} />
        <p className={styles["address"]}>{project.address}</p>
        <img
          className={styles["main-image"]}
          src={project.image}
          alt={""}
          width={"70%"}
        />
        <h4 className={styles["description-title"]}>Описание проекта</h4>
        <p className={styles["description"]}>
          Продукция, необходимая для сети магазинов шоколада и кондитерских
          изделий, состоит из трех витрин ювелирной модели, оснащенных
          стеклянными порталами R4UP с открыванием вверх, предназначенных для
          выкладки пралине, фиников и macarons. Лотки витрин были изготовлены из
          Corian glacier white, а внутренние листы окрашены порошковой краской
          RAL 9003 signal white. Выдвижной ящик был индивидуализирован путем
          нанесения логотипа бренда Fauchon Paris.
        </p>
        <ul className={styles["additional-photos"]}>
          <li>
            <img
              src={AdditionalPhoto1}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </li>
          <li>
            <img
              src={AdditionalPhoto2}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </li>
          <li>
            <img
              src={AdditionalPhoto3}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </li>
          <li>
            <img
              src={AdditionalPhoto4}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </li>
          <li>
            <img
              src={AdditionalPhoto5}
              width={"100%"}
              height={"100%"}
              alt={""}
            />
          </li>
        </ul>
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Project;
