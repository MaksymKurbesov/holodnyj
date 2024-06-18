import React, { useEffect, useState } from "react";
import styles from "./IndividualOrders.module.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../pages/Projects/PROJECTS.js";

const IndividualOrders = () => {
  const [activeOrder, setActiveOrder] = useState(1);
  const [isAllActive, setIsAllActive] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsAllActive(true);
    } else {
      setIsAllActive(false);
    }
  }, [window.innerWidth]);

  return (
    <div className={"container"}>
      <div className={styles["individual-orders"]}>
        <h2>
          Доповніть ваш <span>інтер'єр</span> <br/>нашим досвідом
          {/*Мы создаем <span>индивидуальные</span> <br /> дизайн-проекты*/}
        </h2>
        <ul className={styles["orders"]}>
          {PROJECTS.slice(0, 4).map((order, index) => {
            return (
              <li
                key={order.name}
                onClick={() => setActiveOrder(index)}
                className={`${styles["order"]} ${
                  index === activeOrder || isAllActive ? styles["active"] : null
                }`}
              >
                <div
                  className={`${styles["inner-text"]} ${
                    index === activeOrder || isAllActive
                      ? styles["active-text"]
                      : null
                  }`}
                >
                  <p className={styles['city']}>{order.city}</p>
                  <p>{order.name}</p>
                  <Link
                    to={`projects/${order.link}`}
                    state={{ project: order }}
                  >
                    Детальніше про проєкт
                  </Link>
                </div>
                <img src={order.image} width={"100%"} height={600} alt={""} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IndividualOrders;
