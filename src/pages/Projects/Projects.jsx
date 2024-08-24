import React from "react";
import styles from "./Projects.module.css";
import Header from "../../components/Header/Header";
import { PROJECTS } from "./PROJECTS.js";
import { Link, ScrollRestoration } from "react-router-dom";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <section>
      <Header />
      <div className={styles["projects"]}>
        <h2>Проекти</h2>
        <ul className={styles["projects-list"]}>
          {PROJECTS.map((project, index) => {
            return (
              <li key={index}>
                <Link to={`${project.link}`} state={{ project: project }}>
                  <div className={styles["link-image"]}>
                    <img
                      src={project.image}
                      alt={""}
                      width={"100%"}
                      height={300}
                    />
                    <div className={styles["more-button"]}>
                      <MoreIcon />
                      <p>Подробнее</p>
                    </div>
                  </div>
                </Link>
                <h3>{project.name}</h3>
                <p>{project.address}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
      <ScrollRestoration />
    </section>
  );
};

export default Projects;
