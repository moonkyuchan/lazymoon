import { ReactElement, useState } from "react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SlideCardType } from "@root/src/Configs/types";

interface OwnProps {
  values: SlideCardType;
  title: string;
}

export default function LayoutSlider({
  values,
  title,
}): ReactElement<OwnProps> {
  const settings: SwiperOptions = {
    effect: "coverflow",
    spaceBetween: 40,
    grabCursor: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 5,
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },

    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    modules: [EffectCoverflow, Navigation],
  };

  return (
    <StyledArticle>
      <StyledTitle>{title}</StyledTitle>
      <StyledSwiper {...settings} className="mySwiper">
        {values.pages.map((data, idx) => {
          return (
            <SwiperSlide
              key={idx}
              onClick={() => {
                console.log(data.key);
              }}
            >
              <img src={data.img} alt={data.title} />
            </SwiperSlide>
          );
        })}
        <StyledControl className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <div className="arrow-back-outline"></div>
          </div>
          <div className="swiper-button-next slider-arrow">
            <div className="arrow-forward-outline"></div>
          </div>
        </StyledControl>
      </StyledSwiper>
    </StyledArticle>
  );
}

const StyledArticle = styled.article(({}) => {
  return { margin: "20px auto" };
});
const StyledSwiper = styled(Swiper)(({}) => {
  return {
    padding: "20px 0",
    [".swiper-slide"]: {
      backgroundPosition: "center",
      backgroundSize: "center",

      ["img"]: {
        width: "300px",
        height: "300px",
        borderRadius: "4px",
      },
    },

    [".swiper-slide-shadow-left .swiper-slide-shadow-right"]: {
      display: "none",
    },
  };
});

const StyledControl = styled.div(({}) => {
  return {
    // [".slider-controler"]: {
    //   position: "relative",
    //   bottom: "10px",
    //   display: "flex",
    //   alignItems: " center",
    //   justifyContent: "center",
    // },
  };
});

const StyledTitle = styled.div(({ theme }) => {
  return {
    padding: "20px 0",
    fontSize: "25px",
    fontFamily: theme.fontFamilySb,
  };
});
