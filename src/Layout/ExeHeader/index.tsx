import { ReactElement, useState } from "react";
import styled from "styled-components";
import { SearchOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { DropDown } from "@root/src/Components/Common";

export default function WebHeader(): ReactElement {
  const history = useHistory();
  const [showsearch, setShowSearch] = useState<Boolean>(false);
  const [showAlarm, setShowAlarm] = useState<Boolean>(false);

  const [keyword, setKeyword] = useState<string>("");

  const handelKeyword = (e) => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", keyword);
  };

  const handleAlarm = () => {
    setShowAlarm((prev) => !prev);
  };

  return (
    <StyledHeader>
      <StyledTitle onClick={() => history.push("/")}>LAZYMOON</StyledTitle>
      <StyledIconWrap>
        <form onSubmit={handleSubmit}>
          <StyledInput
            show={showsearch}
            placeholder="검색어를 입력해주세요"
            onChange={handelKeyword}
            value={keyword}
          />
        </form>
        <StyledSearch onClick={() => setShowSearch((state) => !state)} />
        <div style={{ position: "relative" }}>
          <StyledAlarm onClick={handleAlarm} />
          {showAlarm && (
            <DropDown
              show={showAlarm}
              style={{ width: "300px", height: "500px" }}
            />
          )}
        </div>
        <StyledLogin onClick={() => history.push("/login")} />
      </StyledIconWrap>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(() => {
  return {
    maxWidth: "1300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "70px 70px 0 70px",
    margin: "0 auto",
    height: "150px",
  };
});

const StyledTitle = styled.span(({ theme }) => {
  return {
    cursor: "pointer",
    fontSize: "40px",
    fontFamily: theme.fontFamilyEd,
    fontWeight: 600,
    [":hover"]: {
      color: theme.grey2,
    },
  };
});

const StyledIconWrap = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };
});

const StyledInput = styled.input<{ show: Boolean }>(({ show, theme }) => {
  return {
    height: "30px",
    transition: "width 0.8s, opacity 0.8s",
    width: show ? "200px" : "0",
    visibility: "visible",
    opacity: show ? 1 : 0,
    marginRight: "10px",
    padding: "0 10px",
    fontSize: theme.fontSizeXs,
    border: `1.5px solid ${theme.grey2}`,
    borderRadius: "5px",
    ["&:focus, &:active"]: {
      outline: "none",
    },
  };
});

const sharedIconStyles = ({ theme }) => ({
  fontSize: "24px",
  padding: "0 4px 3px 4px",
  margin: "0 5px",
  [":hover"]: {
    color: theme.grey2,
    borderBottom: `1px solid ${theme.grey2}`,
  },
});

const StyledLogin = styled(UserOutlined)(sharedIconStyles);
const StyledAlarm = styled(BellOutlined)((theme) => {
  return {
    ...sharedIconStyles(theme),
  };
});

const StyledSearch = styled(SearchOutlined)(sharedIconStyles);
