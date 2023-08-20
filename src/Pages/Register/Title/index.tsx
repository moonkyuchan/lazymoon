import { ReactElement, useState, useRef } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

import { values } from "@root/src/Configs";
import { setTitle, setTag } from "@root/src/Store/Slice/Article";

function EditorTitle(): ReactElement {
  const dispatch = useDispatch();
  const tag = useSelector((state: any) => state.article.tag);
  const [imgUrl, setImgUrl] = useState("");

  //이건 유용하게 쓰이겠다 filter로 가능했네
  const handleTag = (value: string) => {
    if (tag.includes(value)) {
      dispatch(setTag(tag.filter((data) => data !== value)));
    } else {
      dispatch(setTag([...tag, value]));
    }
  };

  const handleTitle = (e) => {
    const {
      target: { value },
    } = e;
    dispatch(setTitle(value));
  };

  const handleImg = (e) => {
    const {
      target: { files },
    } = e;
    setImgUrl(files[0]);
  };

  return (
    <StyledWrap>
      <StyledInput placeholder="제목을 입력해주세요" onChange={handleTitle} />
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
      <StyledLabel>
        {imgUrl ? (
          <img src={imgUrl} />
        ) : (
          <>
            <PlusCircleOutlined
              style={{ fontSize: "50px", marginLeft: "10px" }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImg}
            />
          </>
        )}
      </StyledLabel>
    </StyledWrap>
  );
}

const StyledWrap = styled.div(({}) => {
  return {
    height: "400px",
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

const StyledLabel = styled.label(() => {
  return {
    border: "2px dotted black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    cursor: "pointer",
    [":hover"]: {
      opacity: 0.5,
    },
  };
});

export default EditorTitle;
