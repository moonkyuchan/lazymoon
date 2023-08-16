import { ReactElement, useState } from "react";
import styled from "styled-components";

import { values } from "@root/src/Configs";

function EditorTitle(): ReactElement {
  const [tag, setTag] = useState<string[]>([]);

  //이건 유용하게 쓰이겠다 filter로 가능했네
  const handleTag = (value: string) => {
    if (tag.includes(value)) {
      setTag((prev) => prev.filter((data) => data !== value));
    } else {
      setTag((prev) => [...prev, value]);
    }
  };

  return (
    <StyledWrap>
      <StyledInput placeholder="제목을 입력해주세요" />
      <StyledTagWrap>
        {values.category
          .filter((data) => data.tag !== "all")
          .map((data) => (
            <StyledTag
              key={data.key}
              value={data.tag}
              onClick={() => handleTag(data.tag)}
              isSelected={tag.includes(data.tag)}
            >
              {data.tag}
            </StyledTag>
          ))}
      </StyledTagWrap>
    </StyledWrap>
  );
}

const StyledWrap = styled.div(({}) => {
  return {
    height: "110px",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };
});

const StyledInput = styled.input(({ theme }) => {
  return {
    border: "none",
    height: "50px",
    fontSize: theme.fontSizeXxl,
    [":focus, :active"]: {
      outline: "none",
    },
  };
});

const StyledTagWrap = styled.div(({ theme }) => {
  return {
    display: "flex",
  };
});
const StyledTag = styled.button<{ isSelected: boolean }>(
  ({ theme, isSelected }) => {
    return {
      width: "fit-content",
      height: "35px",
      padding: "0 20px",
      marginRight: "30px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: theme.fontSizeLg,
      color: isSelected ? theme.white : theme.grey2,
      backgroundColor: isSelected ? theme.grey3 : theme.grey1,
    };
  }
);

export default EditorTitle;
