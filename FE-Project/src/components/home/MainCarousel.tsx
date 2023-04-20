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
            src="https://via.placeholder.com/1800x700"
            alt="임의의 이미지1"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>개발자가 필요한 프로젝트, 스터디 적합한 곳에 원하는 곳으로</h3>
            <p>공고를 확인해주세요.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://via.placeholder.com/1800x700"
            alt="임의의 이미지2"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur minus dignissimos quia corrupti magni dolor quam
              voluptatibus, ipsa exercitationem. Laborum magnam impedit hic
              tempore sequi ab voluptates quibusdam doloremque aliquid.
            </h3>
            <p>공고를 확인해주세요.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

