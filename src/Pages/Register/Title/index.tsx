import { ReactElement, useState, useRef } from "react";
import styled from "styled-components";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { InitialStorageRef } from "@root/src/Firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { values } from "@root/src/Configs";
import { setTitle, setTag, setSubImg } from "@root/src/Store/Slice/Article";

function EditorTitle(): ReactElement {
  const dispatch = useDispatch();
  const tag = useSelector((state: any) => state.article.tag);
  const [imgUrl, setImgUrl] = useState("");
  const imgRef = useRef(null);

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

  const handleSubImg = async (e) => {
    const {
      target: { files },
    } = e;
    if (files) {
      try {
        const imgStorageRef = ref(
          InitialStorageRef,
          `images/sub/${moment().format("YYYY DD MM hh:mm:ss")}`
        );
        await uploadBytes(imgStorageRef, files[0])
          .then(() => getDownloadURL(imgStorageRef))
          .then((res) => {
            setImgUrl(res), dispatch(setSubImg(res));
          });
      } catch (error) {
        console.log(error);
      }
    }
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
      {imgUrl ? (
        <StyledSubImgWrap>
          <StyledSubImgButton onClick={() => setImgUrl("")} />
          <img src={imgUrl} alt="Uploaded" />
        </StyledSubImgWrap>
      ) : (
        <StyledLabel imgUrl={imgUrl}>
          <span>
            대표이미지
            <PlusCircleOutlined
              style={{ fontSize: "14px", marginLeft: "10px" }}
            />
          </span>
          <input
            ref={imgRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleSubImg}
          />
        </StyledLabel>
      )}
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

const StyledLabel = styled.label<{ imgUrl: string }>(({ imgUrl }) => {
  return {
    border: imgUrl ? "2px solid black" : "2px dotted black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    cursor: "pointer",
    [":hover"]: {
      opacity: imgUrl ? 1 : 0.5,
    },
  };
});

const StyledSubImgWrap = styled.div(({}) => {
  return {
    width: "200px",
    height: "200px",
    position: "relative",
    ["> img"]: {
      width: "inherit",
      height: "inherit",
    },
  };
});

const StyledSubImgButton = styled(CloseCircleOutlined)(({ theme }) => {
  return {
    position: "absolute",
    fontSize: "30px",
    right: "15px",
    top: "15px",
    cursor: "pointer",
    [":hover"]: {
      opacity: 0.5,
    },
  };
});

export default EditorTitle;
