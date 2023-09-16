import React from "react";
import styles from "./ContactUs.module.css";
import Image from "../../assets/contact-us.jpg";

const ContactUs = () => {
  return (
    <div className={styles["contact-us"]}>
      {/*<h2>*/}
      {/*  <span>Связаться</span> с нами*/}
      {/*</h2>*/}
      <div className={styles["contact-wrapper"]}>
        <img src={Image} alt={""} width={"35%"} />
        <div className={styles["text"]}>
          <h3>Остались вопросы?</h3>
          <p>
            Оставьте заявку на бесплатную консультацию и наш менеджер
            обязательно вам поможет!
          </p>
          <div className={styles["inputs-wrapper"]}>
            <div className={styles["input"]}>
              <label htmlFor={"name"}>Имя</label>
              <input id={"name"} type={"text"} />
            </div>

            <div className={styles["input"]}>
              <label htmlFor={"phone-number"}>Номер телефона</label>
              <input id={"phone-number"} type={"text"} />
            </div>
            <div className={styles["input"]}>
              <label htmlFor={"Email"}>Email</label>
              <input id={"Email"} type={"text"} />
            </div>
          </div>
          <button className={styles["send-button"]}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
