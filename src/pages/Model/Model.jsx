import React, { useEffect, useRef, useState } from "react";
import styles from "./Model.module.scss";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import Gallery1 from "../../assets/models/gallery1.jpg";
import Gallery2 from "../../assets/models/gallery2.jpg";
import Gallery3 from "../../assets/models/gallery3.jpg";
import Gallery4 from "../../assets/models/gallery4.jpg";
import Gallery5 from "../../assets/models/gallery5.jpg";
import Gallery6 from "../../assets/models/gallery6.jpg";
import Gallery7 from "../../assets/models/gallery7.jpg";
import { IN_STOCK_DATA } from "../InStock/IN_STOCK_DATA";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import ThreeSixty from "@mladenilic/threesixty.js";
import WatchImage from "../../assets/watch3.jpg";

export const TELEGRAM_URL = `https://api.telegram.org/bot6143932905:AAFwzJ3pQGGMGVIRIbR7UlGua-NCzVXXgHg/sendMessage`;

const TYPE_MAP = {
  pastry: "Кондитерская",
  gastronomic: "Гастрономическая",
};

const IMAGES = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
];

const calculateThreeSixtyWidth = (windowWidth) => {
  if (windowWidth <= 420) {
    return 320;
  }

  if (windowWidth <= 900) {
    return 375;
  }

  if (windowWidth <= 1250) {
    return 450;
  }

  if (windowWidth <= 1500) {
    return 550;
  }

  return 750;
};

const calculateSlides = (windowWidth) => {
  if (windowWidth <= 550) {
    return 1;
  }

  if (windowWidth <= 800) {
    return 2;
  }

  return 3;
};

const Model = () => {
  const location = useLocation();
  const model = IN_STOCK_DATA.find(
    (model) => model.link === location.pathname.split("/")[2],
  );

  const settings = {
    speed: 700,
    slidesToShow: calculateSlides(window.innerWidth),
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const threeSixtyRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");

  const [isDirty, setIsDirty] = useState(false);
  const isInStock = location.pathname.split("/")[1] === "in-stock";
  const sliderRef = useRef(null);
  const [priceIsCalculated, setPriceIsCalculated] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const [width, setWidth] = useState(isInStock ? model.width : "");
  const [deep, setDeep] = useState(isInStock ? model.deep : "");
  const [mirrorHeight, setMirrorHeight] = useState(
    isInStock ? model.mirror_height : "",
  );
  const [price, setPrice] = useState(isInStock ? model.price : "-");
  const [shelves, setShelves] = useState(isInStock ? model.shelves : "");

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const threesixty = new ThreeSixty(threeSixtyRef.current, {
      image: WatchImage,
      width: calculateThreeSixtyWidth(window.innerWidth),
      height: calculateThreeSixtyWidth(window.innerWidth),
      count: 60,
      perRow: 4,
      speed: 100,
    });

    return () => {
      threesixty.destroy();
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.paddingRight = "17px";
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.paddingRight = "0";
  };

  const calculatePrice = () => {
    const isAllParameters =
      width !== "" && deep !== "" && mirrorHeight !== "" && shelves !== "";

    if (isAllParameters) {
      setPriceIsCalculated(true);
      setPrice(+width * 2 + +deep * 1.2 + +mirrorHeight * 1.5 + +shelves * 100);
      setIsDirty(false);
    } else {
      setPrice(null);
      setIsDirty(true);
    }
  };

  const sendDataToTelegram = async () => {
    setDataSubmitted(true);
    const text = `<b>Модель:</b> ${model.name}\n<b>Тип:</b> ${
      TYPE_MAP[model.type]
    }\n<b>Ширина:</b> ${width}см\n<b>Глубина:</b> ${deep}см\n<b>Высота стекла:</b> ${mirrorHeight}см\n<b>Кол-во полок:</b> ${shelves}шт\n<b>Цена:</b> ${price}грн\n\n\n<b>Имя:</b> ${userName}\n<b>Телефон или телеграм:</b> ${userContact}`;

    await axios.post(TELEGRAM_URL, {
      chat_id: "-1002026451569",
      parse_mode: "html",
      text: text,
    });

    setTimeout(() => {
      closeModal();
      setDataSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Header />
      <div className={styles["model-wrapper"]}>
        <Link
          to={isInStock ? "/in-stock" : "/models"}
          className={styles["back-button"]}
        >
          {isInStock ? "Назад" : "Назад"}
        </Link>
        <div className={styles["model"]}>
          <div className={styles["model3d-wrapper"]}>
            {/*{window.innerWidth <= 700 && <h3>{model.name}</h3>}*/}
            <span className={styles["instruction"]}>
              Вертіть модель, використовуючи мишу або пальці
            </span>
            <div className={styles["threesixty"]} ref={threeSixtyRef}></div>
          </div>

          <div className={styles["description"]}>
            {/*{window.innerWidth > 700 && (*/}
            {/*  <>*/}
            {/*    <span>Назва</span>*/}
            {/*    <h3>{model.name}</h3>*/}
            {/*  </>*/}
            {/*)}*/}
            <>
              <span>Назва</span>
              <h3>{model.name}</h3>
            </>
            <span>Опис</span>
            <p>{model.description}</p>
            <ul className={styles["features-list"]}>
              {model.features.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <div className={styles["calculate-price"]}>
              <div className={styles["inputs"]}>
                <div>
                  <label>Ширина (см)</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>{model.width}</p>
                  ) : (
                    <input
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder={"Вкажіть ширину"}
                    />
                  )}
                </div>
                <div>
                  <label>Глибина (см)</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>{model.deep}</p>
                  ) : (
                    <input
                      placeholder={"Вкажіть глибину"}
                      value={deep}
                      onChange={(e) => setDeep(e.target.value)}
                    />
                  )}
                </div>
                <div>
                  <label>Висота скла (см)</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>
                      {model.mirror_height}
                    </p>
                  ) : (
                    <input
                      value={mirrorHeight}
                      onChange={(e) => setMirrorHeight(e.target.value)}
                      placeholder={"Вкажіть висоту скла"}
                    />
                  )}
                </div>
                <div>
                  <label>Кількість полиць</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>{model.shelves}</p>
                  ) : (
                    <input
                      value={shelves}
                      onChange={(e) => setShelves(e.target.value)}
                      placeholder={"Вкажіть кількість полиць"}
                    />
                  )}
                </div>
              </div>
              <p
                className={`${styles["error-message"]} ${
                  isDirty && !isInStock ? styles["show-error-message"] : ""
                }`}
              >
                Вкажіть усі параметри для розрахунку!
              </p>
              <p className={styles["price"]}>
                Вартість: <span>{isInStock ? model.price : price}</span> UAH
              </p>
              {isInStock ? (
                <button
                  onClick={() => {
                    openModal();
                  }}
                  className={styles["submit-form-button"]}
                >
                  Купити
                </button>
              ) : (
                <button
                  onClick={() => {
                    calculatePrice();
                  }}
                  className={styles["submit-form-button"]}
                >
                  Розрахувати вартість
                </button>
              )}

              {!isInStock && priceIsCalculated ? (
                <button
                  onClick={() => {
                    openModal();
                  }}
                  className={styles["buy-button"]}
                >
                  Купить
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles["gallery"]}>
          <span>Галерея</span>

          <div className={styles["slider-wrapper"]}>
            <div className={styles["slider-buttons"]}>
              <button
                className={styles["prev"]}
                onClick={() => sliderRef.current?.slickPrev()}
              />
              <button
                className={styles["next"]}
                onClick={() => sliderRef.current?.slickNext()}
              />
            </div>
            <Slider {...settings} ref={sliderRef}>
              {IMAGES.map((image, index) => {
                return (
                  <div className={styles["slide"]} key={index}>
                    <img src={image} alt={""} width={"100%"} height={600} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        onClose={() => {
          setDataSubmitted(false);
          closeModal();
        }}
        classNames={{
          overlay: styles["customOverlay"],
          modal: styles["customModal"],
        }}
      >
        <h3>Оформлення замовлення</h3>
        <p>
          Модель: <span>{model.name}</span>
        </p>
        <p>
          Тип: <span>{TYPE_MAP[model.type]}</span>
        </p>
        <p>
          Ширина: <span>{width}см</span>
        </p>
        <p>
          Глибина: <span>{deep}см</span>
        </p>
        <p>
          Висота скла: <span>{mirrorHeight}см</span>
        </p>
        <p>
          Кількість полиць: <span>{shelves}шт</span>
        </p>
        <p className={styles["bill-price"]}>
          Ціна: <span>{price} UAH</span>
        </p>
        <div className={styles["modal-inputs"]}>
          <h3>Контакти для зв'язку</h3>
          <div>
            <label>Имя</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={"Введіть ім'я"}
              type={"text"}
            />
          </div>
          <div>
            <label>Telegram або номер телефону</label>
            <input
              value={userContact}
              onChange={(e) => setUserContact(e.target.value)}
              placeholder={"Введіть telegram або номер телефону"}
              type={"text"}
            />
          </div>
        </div>
        <p
          className={`${styles["success-message"]} ${
            dataSubmitted ? styles["show-success-message"] : ""
          }`}
        >
          Заявка на оформлення замовлення успішно оформлена! <br /> Чекайте поки
          з вами зв'яжеться менеджер.
        </p>
        {!dataSubmitted && (
          <div className={styles["modal-buttons"]}>
            <button onClick={closeModal}>Скасування</button>
            <button onClick={() => sendDataToTelegram()}>
              Оформити замовлення
            </button>
          </div>
        )}
      </Modal>
      <Footer />
    </>
  );
};

export default Model;
