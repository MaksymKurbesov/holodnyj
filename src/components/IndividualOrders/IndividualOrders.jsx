import React, { useState } from "react";
import styles from "./IndividualOrders.module.css";
import Order1 from "../../assets/individual-order1.jpg";
import Order2 from "../../assets/individual-order2.jpg";
import Order3 from "../../assets/individual-order3.jpg";
import Order4 from "../../assets/individual-order4.jpg";
import { Link } from "react-router-dom";

const ORDERS = [
  {
    name: "Garden Resto BAR",
    image: Order1,
    link: "garden-resto-bar",
  },
  {
    name: "Noble Brew",
    image: Order2,
    link: "noble-brew",
  },
  {
    name: "PRIRODA",
    image: Order3,
    link: "priroda",
  },
  {
    name: "Старая Прага",
    image: Order4,
    link: "old_prague",
  },
];

const IndividualOrders = () => {
  const [activeOrder, setActiveOrder] = useState(1);

  return (
    <div className={styles["individual-orders"]}>
      <h2>
        Мы создаем <span>индивидуальные</span> <br /> дизайн-проекты
      </h2>
      <ul className={styles["orders"]}>
        {ORDERS.map((order, index) => {
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
