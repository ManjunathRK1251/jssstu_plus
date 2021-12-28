import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import img1 from "../../Images/loginpage_bg.jpeg";
// import img1 from " ";
// const img1 = "https://github.com/ManjunathRK1251/jssstu_plus/blob/62534bbcdea09950f42868b083717da5f492d542/src/Images/navbar_bg.jpg";
// const img1 = "https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselSlider() {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const photos = [
    { photo: img1 },
    { photo: img1 },
    { photo: img1 },
    { photo: img1 },
  ];

  return (
    <div className="Carousel-Slider">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500} >
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img1}></Item>
        </Carousel>
      </div>
    </div >
  );
}
