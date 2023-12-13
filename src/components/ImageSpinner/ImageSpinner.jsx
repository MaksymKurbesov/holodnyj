import React, { useState, useRef } from "react";

const ImageSpinner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainer = useRef(null);
  const dragStatus = useRef({ isDragging: false, startX: 0 });

  console.log(currentImageIndex, "currentImageIndex");

  const handleMouseDown = (e) => {
    dragStatus.current = { isDragging: true, startX: e.pageX };
  };

  const handleMouseUp = () => {
    dragStatus.current.isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (dragStatus.current.isDragging) {
      const currentX = e.pageX;
      const diffX = currentX - dragStatus.current.startX;

      // Рассчитываем индекс изображения в зависимости от перемещения мыши
      // Коэффициент здесь может потребовать настройки в зависимости от того, как быстро вы хотите, чтобы вращение шло
      let newIndex =
        currentImageIndex +
        ((Math.sign(diffX) * Math.ceil(Math.abs(diffX) / 10)) % images.length);

      // Убедитесь, что индекс не выходит за границы массива
      if (newIndex < 0) {
        newIndex += images.length;
      } else if (newIndex >= images.length) {
        newIndex -= images.length;
      }

      setCurrentImageIndex(newIndex);
      dragStatus.current.startX = currentX;
    }
  };

  return (
    <div
      ref={imageContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: "grab", userSelect: "none" }}
    >
      <img
        src={images[currentImageIndex]}
        alt={`View ${currentImageIndex}`}
        width={"100%"}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
    </div>
  );
};

export default ImageSpinner;
