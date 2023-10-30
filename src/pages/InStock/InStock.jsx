import React from "react";
import styles from "./InStock.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { IN_STOCK_DATA } from "./IN_STOCK_DATA";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { NavLink } from "react-router-dom";

const InStock = () => {
  const pastryShowcases = IN_STOCK_DATA.filter(
    (showcase) => showcase.type === "pastry"
  );
  const gastronomicShowcases = IN_STOCK_DATA.filter(
    (showcase) => showcase.type === "gastronomic"
  );

  return (
    <>
      <Header />
      <div className={styles["in-stock"]}>
        <h2>В наличие</h2>
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
            <ul className={styles["items"]}>
              {pastryShowcases.map((item) => {
                return (
                  <li key={item.name}>
                    <NavLink to={item.link}>
                      <h3>{item.name}</h3>
                      <img src={item.image} alt={""} width={"100%"} />
                      <div className={styles["price"]}>
                        <p>{item.price}UAH</p>
                        <BasketIcon width={35} />
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className={styles["items"]}>
              {gastronomicShowcases.map((item) => {
                return (
                  <li key={item.name}>
                    <NavLink to={item.link}>
                      <h3>{item.name}</h3>
                      <img src={item.image} alt={""} width={"100%"} />
                      <div className={styles["price"]}>
                        <p>{item.price}UAH</p>
                        <BasketIcon width={35} />
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default InStock;
