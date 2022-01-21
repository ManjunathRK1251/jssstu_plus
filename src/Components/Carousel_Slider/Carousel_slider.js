import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import img1 from "../../Images/pic1.jpg";
import img2 from "../../Images/pic2.jpg";
import img3 from "../../Images/pic3.jpg";
import img4 from "../../Images/pic4.jpg";
import img5 from "../../Images/pic5.jpg";
import img6 from "../../Images/pic6.jpg";
import img7 from "../../Images/pic7.jpg";
import img8 from "../../Images/pic8.jpg";
import img9 from "../../Images/pic9.jpg";
import img10 from "../../Images/pic10.jpg";
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

  // const photos = [
  //   { photo: img1 },
  //   { photo: img1 },
  //   { photo: img1 },
  //   { photo: img1 },
  // ];

  return (
    <div className="Carousel-Slider">
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
          itemPadding={[10, 50]}
          pagination={false}
          infinite
        >
          <Item ImgSrc={img1}></Item>
          <Item ImgSrc={img2}></Item>
          <Item ImgSrc={img3}></Item>
          <Item ImgSrc={img4}></Item>
          <Item ImgSrc={img5}></Item>
          <Item ImgSrc={img6}></Item>
          <Item ImgSrc={img7}></Item>
          <Item ImgSrc={img8}></Item>
          <Item ImgSrc={img9}></Item>
          <Item ImgSrc={img10}></Item>
        </Carousel>
      </div>
    </div >
  );
}
