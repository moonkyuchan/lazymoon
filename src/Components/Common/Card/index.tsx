import { CSSProperties, ReactElement } from "react";
import styled from "styled-components";
import { CommentOutlined } from "@ant-design/icons";

import { CardType } from "@root/src/Configs/types";

interface OwnProps {
  data: CardType;
  style?: CSSProperties;
}
//props으로 받을건 title/img/date/comment/style
function Card(props): ReactElement<OwnProps> {
  const { data, style } = props;
  return (
    <StyledArticle style={{ ...style }}>
      <StyledImg src={data.img} />
      <StyledTitle>{data.title}</StyledTitle>
      <StyledSubTitle>
        <StyledDate>{data.date}</StyledDate>
        <StyledComment>
          <CommentOutlined style={{ marginRight: "10px" }} />
          {data.comment}
        </StyledComment>
      </StyledSubTitle>
    </StyledArticle>
  );
}

const StyledArticle = styled.article(({ theme }) => {
  return {
    width: "350px",
    height: "auto",
    color: theme.grey3,
    cursor: "pointer",
    [":hover"]: {
      opacity: 0.8,
    },
  };
});

const StyledImg = styled.img(() => {
  return {
    width: "350px",
    height: "350px",
    borderRadius: "2px",
  };
});

const StyledTitle = styled.div(({ theme }) => {
  return {
    height: "50px",
    fontSize: theme.fontSizeLg,
    fontFamily: theme.fontFamilySb,
    margin: "5px 0",
    padding: "0 3px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };
});

const StyledSubTitle = styled.div(({}) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 0",
  };
});

const StyledDate = styled.div(() => {
  return {};
});

const StyledComment = styled.div(() => {
  return {};
});
export default Card;
