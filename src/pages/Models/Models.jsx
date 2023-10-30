import React from "react";
import styles from "./Models.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MODELS_DATA } from "./MODELS_DATA.js";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Models = () => {
  return (
    <>
      <Header />
      <div className={styles["models-wrapper"]}>
        <h2>Модели</h2>
        <Tabs>
          <TabList className={styles["tab-list"]}>
            <Tab
              selectedClassName={styles["selected-tab"]}
              className={styles["tab"]}
            >
              Кондитерские витрины
            </Tab>
            <Tab
              selectedClassName={styles["selected-tab"]}
              className={styles["tab"]}
            >
              Гастрономические витрины
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles["models"]}>
              {MODELS_DATA.filter((model) => model.type === "pastry").map(
                (model) => {
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
                }
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles["models"]}>
              {MODELS_DATA.filter((model) => model.type === "gastronomic").map(
                (model) => {
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
                }
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Models;
