import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function MainCarousel() {
  const [index, setIndex] = useState<number>(0);
  const handleSelect = (selectIndex: number) => {
    setIndex(selectIndex);
  };
  return (
    <div className="carousel_wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carousel"
            src="img/banner1.png"
            alt="carousel1"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>개발자가 필요한 프로젝트, 스터디 적합한 곳에 원하는 곳으로</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="img/banner2.png"
            alt="carousel2"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>모집과 홍보가 모두 가능합니다.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

