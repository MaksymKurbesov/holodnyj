import React, { useState } from "react";
import styles from "./IndividualOrders.module.css";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../pages/Projects/PROJECTS.js";

const IndividualOrders = () => {
  const [activeOrder, setActiveOrder] = useState(1);

  return (
    <div className={styles["individual-orders"]}>
      <h2>
        Мы создаем <span>индивидуальные</span> <br /> дизайн-проекты
      </h2>
      <ul className={styles["orders"]}>
        {PROJECTS.slice(0, 4).map((order, index) => {
          return (
            <li
              key={order.name}
              onClick={() => setActiveOrder(index)}
              className={`${styles["order"]} ${
                index === activeOrder ? styles["active"] : null
              }`}
            >
              <div
                className={`${styles["inner-text"]} ${
                  index === activeOrder ? styles["active-text"] : null
                }`}
              >
                <p>{order.name}</p>
                <Link to={`projects/${order.link}`} state={{ project: order }}>
                  Подробнее о проекте
                </Link>
              </div>
              <img src={order.image} width={"100%"} height={600} alt={""} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IndividualOrders;
