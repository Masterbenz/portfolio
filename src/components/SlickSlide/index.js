import React from "react";
import {
  CardContainer,
  CardHeader,
  ImgSlide,
  TextSlide,
  CardBox,
  CardItem,
  CardItemText,
} from "./SlickSlideElement";
import react from "../../img/logo.svg";
import angular from "../../img/angular.png";
import nodejs from "../../img/nodejs.png";
import laravel from "../../img/laravel.png";
import mongodb from "../../img/mongodb.png";
import mysql from "../../img/mysql.png";
import Slider from "react-slick";
import "./slick.css";
import { Carousel } from "react-responsive-carousel";

const index = () => {
  const settings = {
    arrows: false,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    autoplay: true,
    swipeToSlide: true,
    afterChange: function (index) {
      // console.log(
      //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      // );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          // slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          swipeToSlide: true,
          afterChange: function (index) {
            // console.log(
            //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
          },
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          swipeToSlide: true,
          afterChange: function (index) {
            // console.log(
            //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
          },
          // slidesToScroll: 2,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          swipeToSlide: true,
          afterChange: function (index) {
            // console.log(
            //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
          },
          // slidesToScroll: 1
        },
      },
    ],
  };
  return (
    <CardContainer id={"TechStack"}>
      <CardItemText>TechStack </CardItemText>
      <CardHeader>
        <Slider {...settings} style={{ justifyContent: "center" }}>
          <div>
            <ImgSlide src={react}></ImgSlide>
            <TextSlide>React && React-native</TextSlide>
          </div>
          <div>
            <ImgSlide src={angular}></ImgSlide>
            <TextSlide>Angular</TextSlide>
          </div>
          <div>
            <ImgSlide src={nodejs}></ImgSlide>
            <TextSlide>Nodejs</TextSlide>
          </div>
          <div>
            <ImgSlide src={laravel}></ImgSlide>
            <TextSlide>Laravel</TextSlide>
          </div>
          <div>
            <ImgSlide src={mongodb}></ImgSlide>
            <TextSlide>Mongodb</TextSlide>
          </div>
          <div>
            <ImgSlide src={mysql}></ImgSlide>
            <TextSlide>Mysql</TextSlide>
          </div>
          <div>
            <ImgSlide src={react}></ImgSlide>
            <TextSlide>React && React-native</TextSlide>
          </div>
          <div>
            <ImgSlide src={angular}></ImgSlide>
            <TextSlide>Angular</TextSlide>
          </div>
          <div>
            <ImgSlide src={nodejs}></ImgSlide>
            <TextSlide>Nodejs</TextSlide>
          </div>
          <div>
            <ImgSlide src={laravel}></ImgSlide>
            <TextSlide>Laravel</TextSlide>
          </div>
          <div>
            <ImgSlide src={mongodb}></ImgSlide>
            <TextSlide>Mongodb</TextSlide>
          </div>
          <div>
            <ImgSlide src={mysql}></ImgSlide>
            <TextSlide>Mysql</TextSlide>
          </div>
        </Slider>
      </CardHeader>
    </CardContainer>

    // <div className="flex flex-col w-100 h-96 bg-white-300 " id={'skill'}>
    // <CardContainer id={"skill"}>
    //   <CardHeader>
    //     <CardItemText>Stack skill</CardItemText>
    //   </CardHeader>
    //   <CardBox>
    //     <CardItem>
    //       <ImgSlide src={react} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //     </CardItem>
    //     <CardItem>
    //       <ImgSlide src={angular} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //       {/* <span className="mt-2">react</span> */}
    //     </CardItem>
    //     <CardItem>
    //       <ImgSlide src={nodejs} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //       {/* <span className="mt-2">react</span> */}
    //     </CardItem>
    //     <CardItem>
    //       <ImgSlide src={laravel} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //       {/* <span className="mt-2">react</span> */}
    //     </CardItem>
    //     <CardItem>
    //       <ImgSlide src={mongodb} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //       {/* <span className="mt-2">react</span> */}
    //     </CardItem>
    //     <CardItem>
    //       <ImgSlide src={react} style={{ height: 100, width: 100 }}></ImgSlide>
    //       <p>react</p>
    //       {/* <span className="mt-2">react</span> */}
    //     </CardItem>
    //   </CardBox>
    // </CardContainer>
  );
};

export default index;
