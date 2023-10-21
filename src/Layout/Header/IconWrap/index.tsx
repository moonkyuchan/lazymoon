import { ReactElement, useState } from "react";
import styled from "styled-components";

import HeaderSearch from "./Search";
import HeaderLogin from "./Login";
import HeaderAlarm from "./Alarm";

function IconWrap(): ReactElement {
  const [showsearch, setShowSearch] = useState<Boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT", searchKeyword);
  };

  const handelKeyword = (e) => {
    const {
      target: { value },
    } = e;
    setSearchKeyword(value);
  };

  return (
    <StyledIconWrap>
      <HeaderSearch
        show={showsearch}
        searchKeyword={searchKeyword}
        handelKeyword={handelKeyword}
        setShowSearch={setShowSearch}
        handleSubmit={handleSubmit}
      />
      <HeaderAlarm />
      <HeaderLogin />
    </StyledIconWrap>
  );
}

const StyledIconWrap = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90px",
  };
});

export default IconWrap;
