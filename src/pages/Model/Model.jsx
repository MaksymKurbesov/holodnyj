import React from "react";
import styles from "./Model.module.scss";
import { Link, useLocation } from "react-router-dom";
import { MODELS_DATA } from "../Models/MODELS_DATA";
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

const Model = () => {
  const location = useLocation();
  const model = MODELS_DATA.find(
    (model) => model.link === location.pathname.split("/")[2]
  );

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    // variableWidth: true,
  };

  return (
    <>
      <Header />
      <div className={styles["model-wrapper"]}>
        <Link to={"/models"} className={styles["back-button"]}>
          Назад к моделям
        </Link>
        <div className={styles["model"]}>
          <img src={model.image} width={"50%"} />
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
          </div>
        </div>
        <div className={styles["gallery"]}>
          <span>Галерея</span>
          <Slider {...settings}>
            <div className={styles["slide"]}>
              <img src={Gallery1} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery2} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery3} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery4} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery5} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery6} alt={""} width={"100%"} height={600} />
            </div>
            <div className={styles["slide"]}>
              <img src={Gallery7} alt={""} width={"100%"} height={600} />
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Model;
