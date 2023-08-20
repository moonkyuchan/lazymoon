import { ReactElement } from "react";
import { Slider, GridFilter } from "@/Components/Common";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { values } from "@/Configs";
import moment from "moment";
import tower from "@/Asset/Images/french.jpeg";
import bridge from "@/Asset/Images/bridge.jpeg";
import home from "@/Asset/Images/home.jpeg";
import styled from "styled-components";

export default function Dashboard(): ReactElement {
  console.log("DASHBOARD");
  const history = useHistory();
  const MokCard = [
    {
      key: 1,
      img: bridge,
      title: "[신사동맛집] 아 배고파배고파보",
      comment: 25,
      tag: ["place"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 2,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["artsculture"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 3,
      img: home,
      title: "ET CETERA",
      comment: 123,
      tag: ["food", "cafe"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 4,
      img: tower,
      title: "PLACE",
      comment: 54,
      tag: ["place", "films"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 5,
      img: home,
      title: "ET CETERA",
      comment: 1203,
      tag: ["place", "artsculture"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 6,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["fashion"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 7,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["fashion", "place"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 8,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["fashion", "artsculture"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 9,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["films", "artsculture"],
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 10,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      tag: ["fashion", "place"],
      date: moment().format("YYYY-MM-DD"),
    },
  ];

  //StyledRegisterButton은 이후에 회원 유형에 따라 조건부 렌더링 필요
  return (
    <StyledWrap>
      <Slider values={values} title={""} />
      <StyledRegisterButton onClick={() => history.push("/register")} />
      <GridFilter data={MokCard} filter={values.category} />
    </StyledWrap>
  );
}

const StyledWrap = styled.div(({}) => {
  return {
    position: "relative",
  };
});

const StyledRegisterButton = styled(PlusCircleOutlined)(({ theme }) => {
  return {
    position: "absolute",
    fontSize: "35px",
    cursor: "pointer",
    right: "80px",
    top: "390px",

    [":hover"]: {
      opacity: 0.6,
      transition: "transform 0.2s ease-in",
      transform: "scale(1.2, 1.2)",
    },
  };
});
