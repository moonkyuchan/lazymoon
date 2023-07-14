import { ReactElement } from "react";
import Slider, { Settings } from "react-slick";
//왜 Slider as Slick이 안되는가
import { values } from "@/Configs";

export default function LayoutSlider(): ReactElement {
  const options: Settings = {
    vertical: true,
    adaptiveHeight: false,
    dots: false,
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    verticalSwiping: true,
    variableWidth: true,
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: "50px",
  };

  return (
    <Slider {...options}>
      {values.pages.map((data) => {
        return <img src={data.name} alt={data.title} />;
      })}
    </Slider>
  );
}
