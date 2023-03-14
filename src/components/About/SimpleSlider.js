import React, { Component } from "react";
import Slider from "react-slick";
import card0 from "../../Assets/UnlockTheBox.png";
import card1 from "../../Assets/Not-Flix.png";
import card2 from "../../Assets/SPACE-FORCE.png";
import card4 from "../../Assets/FishCat.png"
import TeammateMe from "../../Assets/TeammateMe.png";
import dentsu from "../../Assets/dentsu.jpg";
import Energime from "../../Assets/EnergimeUniversity.png";

export const  SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
          <div>
            <h3>DENTSU</h3>
          </div>
          <div>
            <h3>TEAMMATE ME</h3>
          </div>
          <div>
            <h3>FISH CAT </h3>
          </div>
          <div>
            <h3>ENERGIME</h3>
          </div>
        </Slider> 
    );
  }
