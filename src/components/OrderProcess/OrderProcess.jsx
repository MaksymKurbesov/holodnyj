import React from "react";
import styles from "./OrderProcess.module.css";
import Accordion from "../Accordion/Accordion";
import ContactUs from "../../assets/order-proccess/contact-us copy.png";
import DesignAndSize from "../../assets/order-proccess/design-and-size copy.png";

const accordionData = [
  {
    title: "Связаться с нами",
    content:
      "Здесь вы найдете контактные данные, чтобы начать обсуждение вашего проекта.",
    image: ContactUs,
  },
  {
    title: "Обсуждение дизайна и размера",
    content:
      "Мы обсудим детали вашего проекта, создадим необходимые чертежи, такие как дизайн, размеры и сроки, чтобы учесть все ваши пожелания.",
    image: DesignAndSize,
  },
  {
    title: "Предоплата",
    content:
      "Для начала работ нам необходима небольшая предоплата, чтобы приступить к изготовлению вашей витрины.",
    image: DesignAndSize,
  },
  {
    title: "Создание чертежей",
    content:
      "На этом этапе мы разрабатываем подробные чертежи вашей витрины на основе обсужденных деталей.",
    image: DesignAndSize,
  },
  {
    title: "Изготовление витрины",
    content:
      "После согласования чертежей и предоплаты мы начнем изготовление вашей витрины.",
    image: DesignAndSize,
  },
  {
    title: "Получение витрины",
    content: "Мы с вами свяжемся когда ваша витрина будет готова.",
    image: DesignAndSize,
  },
];

const OrderProcess = () => {
  return (
    <div className={styles["order-process"]}>
      <h2>
        Процесс <span>разработки</span>
      </h2>
      <Accordion data={accordionData} />
    </div>
  );
};

export default OrderProcess;
