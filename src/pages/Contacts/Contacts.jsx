import React from "react";
import styles from "./Contacts.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LocationMap from "../../assets/location.png";
import ContactsBG from "../../assets/contacts-bg.png";

const Contacts = () => {
  return (
    <section>
      <Header />
      <div className={styles["contacts"]}>
        <div className={styles["header"]}>
          <img src={ContactsBG} width={"100%"} />
          <h2>Контакты</h2>
        </div>
        <div className={styles["contacts-wrapper"]}>
          <div className={styles["form-wrapper"]}>
            <h3>Оставьте свои контакты для связи с вами.</h3>
            <p>
              Заинтересованы в наших услугах или нуждаетесь в дополнительной
              информации? Оставьте свои контактные данные ниже, и мы свяжемся с
              вами в ближайшее время.
            </p>
            <form>
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
              <label htmlFor="phone">Номер телефеона</label>
              <input type="text" id="phone" name="phone" />
              <button>Отправить!</button>
            </form>
          </div>
          <div className={styles["info"]}>
            <h3>Наши контакты</h3>
            <p>
              Связаться с нами легко! Ниже вы найдете все необходимые контактные
              данные, чтобы обратиться к нам с любыми вопросами или запросами.
            </p>
            <ul>
              <li>Украина, Кривой Рог, ул. Гагарина 58</li>
              <li>+380964453421</li>
              <li>holodnyj@site.com</li>
            </ul>
          </div>
          {/*<div className={styles["map"]}>*/}
          {/*  <img*/}
          {/*    src={LocationMap}*/}
          {/*    alt={"location"}*/}
          {/*    width={"100%"}*/}
          {/*    height={"100%"}*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contacts;
