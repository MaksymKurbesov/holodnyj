import React from "react";
import styles from "./AboutUs.module.scss";
import Header from "../../components/Header/Header";
import Slider from "react-slick";
import Project1 from "../../assets/projects/project1.jpg";
import Project2 from "../../assets/projects/project2.jpg";
import Project3 from "../../assets/projects/project3.jpeg";
import Project4 from "../../assets/projects/project4.jpg";
import Footer from "../../components/Footer/Footer";
import TeamMember1 from "../../assets/team-members/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import TeamMember2 from "../../assets/team-members/ali-morshedlou-WMD64tMfc4k-unsplash.jpg";
import TeamMember3 from "../../assets/team-members/albert-dera-ILip77SbmOE-unsplash.jpg";
import { ReactComponent as Partner1 } from "../../assets/partners/1.svg";
import { ReactComponent as Partner2 } from "../../assets/partners/2.svg";
import { ReactComponent as Partner3 } from "../../assets/partners/3.svg";
import { ReactComponent as Partner4 } from "../../assets/partners/4.svg";
import { ReactComponent as Partner5 } from "../../assets/partners/5.svg";

const getSlidesCount = (windowWidth) => {
  if (windowWidth < 768) {
    return 1;
  }

  if (windowWidth < 1300) {
    return 2;
  }

  return 3;
};

const AboutUs = () => {
  const settings = {
    speed: 500,
    slidesToShow: getSlidesCount(window.innerWidth),
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <>
      <Header />
      <div className={styles["about-us"]}>
        <span className={styles["mini-title"]}>О нас</span>
        <h2>
          Мы сочетаем дизайн и технологию для дизайнов интерьера в секторе
          HO.RE.CA.
        </h2>
        <p>
          holodnyj является лидером на рынке Украины в предоставлении
          дизайнерских и технологических решений для интерьеров баров,
          кондитерских, мороженных и ресторанов. На протяжении лет компания
          зарекомендовала себя как надежный партнер, отличаясь своевременностью
          и высоким качеством своей продукции.
        </p>
        <br />
        <p>
          Располагаясь в Кривом Роге, holodnyj сочетает передовые технологии с
          опытом и навыками своего квалифицированного технического и
          операционного персонала. Такой подход позволяет нам разрабатывать и
          реализовывать сложные проекты, которые идеально соответствуют
          индивидуальным потребностям наших клиентов.
        </p>
        <div className={styles["slider"]}>
          <Slider {...settings}>
            <div className={styles["slide"]}>
              <img src={Project1} alt={""} width={"100%"} height={500} />
            </div>
            <div className={styles["slide"]}>
              <img src={Project2} alt={""} width={"100%"} height={500} />
            </div>
            <div className={styles["slide"]}>
              <img src={Project3} alt={""} width={"100%"} height={500} />
            </div>
            <div className={styles["slide"]}>
              <img src={Project4} alt={""} width={"100%"} height={500} />
            </div>
            <div className={styles["slide"]}>
              <img src={Project1} alt={""} width={"100%"} height={500} />
            </div>
            <div className={styles["slide"]}>
              <img src={Project2} alt={""} width={"100%"} height={500} />
            </div>
          </Slider>
        </div>
        <div className={styles["every-year"]}>
          <h2>
            Ежегодно мы производим около 100 холодильных витрин для сектора
            HO.RE.CA.
          </h2>
          <p>
            Благодаря быстроте, профессионализму, гибкости и своевременности
            поставок, мы успешно соответствуем всем ожиданиям и стандартам
            рынка. Наш энтузиазм, достижения и успех усиливаются каждый год, что
            отражается в растущей популярности нашей продукции и увеличении
            нашей доли на рынке.
          </p>
        </div>
        <div className={styles["our-team"]}>
          <span className={styles["mini-title"]}>Наша команда</span>
          <div className={styles["team-members"]}>
            <div>
              <img src={TeamMember2} alt={""} width={"100%"} height={"100%"} />
              <p>Bill Dawson</p>
            </div>
            <div>
              <img src={TeamMember1} alt={""} width={"100%"} height={"100%"} />
              <p>Emilie Farley</p>
            </div>
            <div>
              <img src={TeamMember3} alt={""} width={"100%"} height={"100%"} />
              <p>Alexandros Haines</p>
            </div>
          </div>
          <p className={styles["team-description"]}>
            Наша команда - это симбиоз таланта, страсти и профессионализма.
            Каждый из нас приносит уникальный вклад в общий проект, благодаря
            чему мы создаем продукцию, гордящуюся высочайшим качеством и
            инновационностью. Объединенные общей миссией и ценностями, мы не
            просто работаем вместе - мы растем, учимся и строим будущее, где
            наши клиенты всегда находятся в центре внимания. С нами вы можете
            быть уверены в том, что ваш проект находится в надежных руках
            профессионалов, готовых превзойти все ожидания.
          </p>
        </div>
      </div>
      <span className={styles["mini-title"]}>Партнёры</span>
      <div className={styles["partners"]}>
        <Partner1 />
        <Partner2 />
        <Partner3 />
        <Partner4 />
        <Partner5 />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
