import React, { useRef, useState } from "react";
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
import Model3D from "./Model3D";
import { IN_STOCK_DATA } from "../InStock/IN_STOCK_DATA";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";

const TELEGRAM_URL = `https://api.telegram.org/bot6143932905:AAFwzJ3pQGGMGVIRIbR7UlGua-NCzVXXgHg/sendMessage`;

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

const settings = {
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const Model = () => {
  const location = useLocation();
  const model = IN_STOCK_DATA.find(
    (model) => model.link === location.pathname.split("/")[2]
  );

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
    isInStock ? model.mirror_height : ""
  );
  const [price, setPrice] = useState(isInStock ? model.price : "-");
  const [shelves, setShelves] = useState(isInStock ? model.shelves : "");

  const [modalIsOpen, setIsOpen] = useState(false);

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
          {isInStock ? "Назад в наличие" : "Назад к моделям"}
        </Link>
        <div className={styles["model"]}>
          <div className={styles["model3d-wrapper"]}>
            <span className={styles["instruction"]}>
              Вертите и приближайте модель, используя мышь или пальцы
            </span>
            <Model3D />
          </div>

          <div className={styles["description"]}>
            <span>Название</span>
            <h3>{model.name}</h3>
            <span>Описание</span>
            <p>
              Витрины FLAT разработаны и оформлены в соответствии с новой
              эстетической концепцией эссенциальности и гибкости в отделке.
              Теплоизолированные резервуары изготовлены из экологически чистого
              полиуретана, стандартная панель витрины выполнена из нержавеющей
              стали, но может быть изготовлена из различных материалов, таких
              как керамогранит, акрил, кварцевый композит, натуральный мрамор.
              Забор и отвод воздуха в витринах с положительной температурой
              осуществляется через микроперфорированную стальную пластину, а
              цифровой температурный дисплей располагается заподлицо с верхней
              частью.
              <br />
              <br />В стандартном исполнении боковые стекла всех холодильных
              моделей имеют подогрев, а стандартные передние стекла оснащены
              фронтальным дефлектором, но по запросу могут быть выполнены в
              подогреваемом варианте. Компания Ciam запатентовала инновационную
              систему антизапотевания низковольтных стекол. Эта система
              предполагает использование абсолютно прозрачного пиролитического
              стекла толщиной 8 мм со скрытым сопротивлением; таким образом,
              достигается эффект стандартной стеклянной конструкции, даже в
              случае стекла с подогревом! <br />
              <br /> Все стеклянные конструкции имеют одинаковую фурнитуру, а
              все детали разработаны и изготовлены с использованием стальных
              микроформовочных штампов. В блестящий алюминиевый светильник
              встроена светодиодная лента 3000°К без точечной подсветки, в
              верхний светильник встроен дверной трек для раздвижных дверей из
              оргстекла (со стороны оператора), обеспечивающий плотное закрытие
              холодильного пространства, что возможно даже благодаря уплотнению
              по периметру. Стеклянные полки имеют встроенную подсветку и могут
              регулироваться
            </p>
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
                      placeholder={"Укажите ширину"}
                    />
                  )}
                </div>
                <div>
                  <label>Глубина (см)</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>{model.deep}</p>
                  ) : (
                    <input
                      placeholder={"Укажите глубину"}
                      value={deep}
                      onChange={(e) => setDeep(e.target.value)}
                    />
                  )}
                </div>
                <div>
                  <label>Высота стекла (см)</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>
                      {model.mirror_height}
                    </p>
                  ) : (
                    <input
                      value={mirrorHeight}
                      onChange={(e) => setMirrorHeight(e.target.value)}
                      placeholder={"Укажите высоту стекла"}
                    />
                  )}
                </div>
                <div>
                  <label>Кол-во полок</label>
                  {isInStock ? (
                    <p className={styles["in-stock-info"]}>{model.shelves}</p>
                  ) : (
                    <input
                      value={shelves}
                      onChange={(e) => setShelves(e.target.value)}
                      placeholder={"Укажите кол-во полок"}
                    />
                  )}
                </div>
              </div>
              <p
                className={`${styles["error-message"]} ${
                  isDirty && !isInStock ? styles["show-error-message"] : ""
                }`}
              >
                Укажите все параметры для расчёта!
              </p>
              <p className={styles["price"]}>
                Стоимость: <span>{isInStock ? model.price : price}</span> UAH
              </p>
              {isInStock ? (
                <button
                  onClick={() => {
                    openModal();
                  }}
                  className={styles["submit-form-button"]}
                >
                  Купить
                </button>
              ) : (
                <button
                  onClick={() => {
                    calculatePrice();
                  }}
                  className={styles["submit-form-button"]}
                >
                  Рассчитать стоимость
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
        <h3>Оформление заказа</h3>
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
          Глубина: <span>{deep}см</span>
        </p>
        <p>
          Высота стекла: <span>{mirrorHeight}см</span>
        </p>
        <p>
          Кол-во полок: <span>{shelves}шт</span>
        </p>
        <p className={styles["bill-price"]}>
          Цена: <span>{price} UAH</span>
        </p>
        <div className={styles["modal-inputs"]}>
          <h3>Контакты для связи</h3>
          <div>
            <label>Имя</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={"Введите имя"}
              type={"text"}
            />
          </div>
          <div>
            <label>Telegram или номер телефона</label>
            <input
              value={userContact}
              onChange={(e) => setUserContact(e.target.value)}
              placeholder={"Введите telegram или номер телефона"}
              type={"text"}
            />
          </div>
        </div>
        <p
          className={`${styles["success-message"]} ${
            dataSubmitted ? styles["show-success-message"] : ""
          }`}
        >
          Заявка на оформление заказа успешно оформлена! <br /> Ждите пока с
          вами свяжется менеджер.
        </p>
        {!dataSubmitted && (
          <div className={styles["modal-buttons"]}>
            <button onClick={closeModal}>Отмена</button>
            <button onClick={() => sendDataToTelegram()}>Оформить заказ</button>
          </div>
        )}
      </Modal>
      <Footer />
    </>
  );
};

export default Model;
