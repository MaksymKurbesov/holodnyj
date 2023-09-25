import React, { useState } from "react";
import styles from "./Slider.module.css";
import Fridge from "../../assets/fridge.png";
import SlidesList from "./SlidesList/SlidesList";
import Dots from "./Dots/Dots";

const SLIDES = [Fridge, Fridge, Fridge, Fridge];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (currentSlide + direction < 0) {
      slideNumber = SLIDES.length - 1;
    } else {
      slideNumber = (currentSlide + direction) % SLIDES.length;
    }

    setCurrentSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setCurrentSlide(number % SLIDES.length);
  };

  const handleTouchStart = (e) => {
    console.log(e, "event");

    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <div
      className={styles["slider"]}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SlidesList slides={SLIDES} slideNumber={currentSlide} />
      <div className={styles["dots-wrapper"]}>
        <Dots
          slidesCount={SLIDES.length}
          slideNumber={currentSlide}
          goToSlide={goToSlide}
          changeSlide={changeSlide}
        />
      </div>
    </div>
  );
};

export default Slider;
