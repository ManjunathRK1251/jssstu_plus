import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import img1 from "C:/Users/Manju/Desktop/JSSSTU+/jssstu_plus/src/Images/navbar_bg.jpg";

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
        <Carousel breakPoints={breakPoints} itemPadding={[10, 50]}>
          {/* <img src={img1} />
          <img src={img1} />
          <img src={img1} />
          <img src={img1} /> */}
          {/* <Card></Card> */}
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </Carousel>
      </div>
    </div>
  );
}
