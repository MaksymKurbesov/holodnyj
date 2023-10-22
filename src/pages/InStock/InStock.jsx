import React from "react";
import styles from "./InStock.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { IN_STOCK_DATA } from "./IN_STOCK_DATA";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket.svg";

const InStock = () => {
  return (
    <>
      <Header />
      <div className={styles["in-stock"]}>
        <h2>В наличие</h2>
        <ul className={styles["items"]}>
          {IN_STOCK_DATA.map((item) => {
            return (
              <li key={item.name}>
                <h3>{item.name}</h3>
                <img src={item.image} alt={""} width={"100%"} />
                <div className={styles["price"]}>
                  <p>{item.price}UAH</p>
                  <BasketIcon width={35} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default InStock;
