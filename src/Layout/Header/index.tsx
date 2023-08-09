import { ReactElement, useState } from "react";
import styled from "styled-components";
import { SearchOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function WebHeader(): ReactElement {
  const history = useHistory();
  const [showsearch, setShowSearch] = useState<Boolean>(false);
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
        <StyledAlarm onClick={() => console.log("ALARM!")} />
        <StyledLogin onClick={() => history.push("/login")} />
      </StyledIconWrap>
    </StyledHeader>
  );
}

const StyledHeader = styled.header(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    margin: "0 auto",
    height: "80px",
  };
});

const StyledTitle = styled.span(({ theme }) => {
  return {
    cursor: "pointer",
    fontSize: "40px",
    fontFamily: theme.fontFamilyT,
    fontWeight: 600,
    [":hover"]: {
      color: theme.grey2,
    },
  };
});

const StyledIconWrap = styled.div(() => {
  return {
    height: "inherit",
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
const StyledAlarm = styled(BellOutlined)(sharedIconStyles);
const StyledSearch = styled(SearchOutlined)(sharedIconStyles);
