import { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { SearchOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function WebHeader(): ReactElement {
  const history = useHistory();
  const [search, setSearch] = useState<Boolean>(false);
  console.log(search);

  return (
    <StyledHeader>
      <StyledTitle onClick={() => history.push("/")}>LAZYMOON</StyledTitle>
      <StyledIconWrap>
        {search && <StyledInput show={search} />}
        <StyledSearch onClick={() => setSearch((state) => !state)} />
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

const StyledInput = styled.input<{ show: Boolean }>(({ show }) => {
  return {
    transitionProperty: "width",
    transitionDuration: "2s",
    width: show ? "200px" : "0",
  };
});

const sharedIconStyles = ({ theme }) => ({
  fontSize: "22px",
  paddingBottom: "3px",
  margin: "0 8px",
  [":hover"]: {
    color: theme.grey2,
    borderBottom: `1px solid ${theme.grey2}`,
  },
});

const StyledLogin = styled(UserOutlined)(sharedIconStyles);
const StyledAlarm = styled(BellOutlined)(sharedIconStyles);
const StyledSearch = styled(SearchOutlined)(sharedIconStyles);
