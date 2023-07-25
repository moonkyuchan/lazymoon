import { ReactElement } from "react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/effect-coverflow";
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
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [EffectCoverflow, Navigation],
  };

  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledSwiper {...settings}>
        {values.pages.map((data) => {
          return (
            <SwiperSlide
              key={data.key}
              onClick={(e) => {
                console.log(e);
              }}
            >
              <img src={data.img} alt={data.title} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </StyledSwiper>
    </StyledSection>
  );
}

const StyledSection = styled.section(({}) => {
  return { margin: "20px auto", position: "relative" };
});

const StyledSwiper = styled(Swiper)(({ theme }) => {
  return {
    padding: "20px 0",
    maring: "0 auto",
    width: "inherit",
    [".swiper-slide"]: {
      width: "300px",

      ["img"]: {
        width: "300px",
        height: "300px",
        borderRadius: "4px",
        border: `1px solid ${theme.grey1}`,
      },
    },

    [".swiper-slide-shadow-left"]: {
      display: "none",
    },
  };
});

const StyledTitle = styled.div(({ theme }) => {
  return {
    padding: "20px 0",
    fontSize: "25px",
    fontFamily: theme.fontFamilySb,
  };
});
