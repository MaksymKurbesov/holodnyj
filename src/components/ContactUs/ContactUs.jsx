import React from "react";
import styles from "./ContactUs.module.css";
import Image from "../../assets/contact-us.jpg";

const ContactUs = () => {
  return (
    <div id={"contact-us"} className={styles["contact-us"]}>
      <div className={styles["contact-wrapper"]}>
        <img src={Image} alt={""} width={"100%"} height={"100%"} />
        <div className={styles["text"]}>
          <h3>Залишились питання?</h3>
          <p>
            Залишіть заявку на безкоштовну консультацію, і наш менеджер
            обов'язково вам допоможе!
          </p>
          <div className={styles["inputs-wrapper"]}>
            <div className={styles["input"]}>
              <label htmlFor={"name"}>Ім'я</label>
              <input id={"name"} type={"text"} />
            </div>

            <div className={styles["input"]}>
              <label htmlFor={"phone-number"}>Номер телефону</label>
              <input id={"phone-number"} type={"text"} />
            </div>
            <div className={styles["input"]}>
              <label htmlFor={"Email"}>Email</label>
              <input id={"Email"} type={"text"} />
            </div>
          </div>
          <button className={styles["send-button"]}>Відправити</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
