import { CSSProperties, ReactElement } from "react";
import styled from "styled-components";
import { CommentOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { CardType } from "@root/src/Configs/types";

interface OwnProps {
  data: CardType;
  style?: CSSProperties;
}

function Card(props): ReactElement<OwnProps> {
  const { data, style } = props;
  const history = useHistory();

  const handleRouter = () => {
    history.push(`/viewer/${data.id}`);
  };

  return (
    <StyledArticle style={{ ...style }} key={data.id} onClick={handleRouter}>
      <StyledImg src={data.subImg} />
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
    borderRadius: "5px",
  };
});

const StyledTitle = styled.div(({ theme }) => {
  return {
    color: theme.grey2,
    height: "40px",
    fontSize: "17px",
    fontFamily: theme.fontFamilyEd,
    fontWeight: 300,
    margin: "5px 0",
    padding: "0 3px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.1,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textAlign: "center",
  };
});

const StyledSubTitle = styled.div(({ theme }) => {
  return {
    color: theme.grey2,
    fontSize: theme.fontSizeSm,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 0",
    padding: "0 5px",
  };
});

const StyledDate = styled.div(() => {
  return {};
});

const StyledComment = styled.div(() => {
  return {};
});
export default Card;
