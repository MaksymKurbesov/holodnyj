import React from "react";
import styles from "./Project.module.css";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const Project = () => {
  const location = useLocation();
  const { project } = location.state;
  console.log(location.state, "location.state");

  return (
    <>
      <Header />
      <div className={styles["project"]}>
        <p className={styles["name"]}>{project.name}</p>
        <img src={project.image} alt={""} width={800} />
      </div>
    </>
  );
};

export default Project;
