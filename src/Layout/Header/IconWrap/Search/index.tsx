import { ReactElement } from "react";
import { CSSProperties } from "styled-components";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

type OwnProps = {
  style?: CSSProperties;
  show: Boolean;
  searchKeyword: string;
  handelKeyword: (params: any) => void;
  setShowSearch: (params: any) => void;
  handleSubmit: (params: any) => void;
};

function HeaderSearch(props: OwnProps): ReactElement {
  const { show, searchKeyword, handelKeyword, setShowSearch, handleSubmit } =
    props;
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <StyledInput
          show={show}
          placeholder="검색어를 입력해주세요"
          onChange={handelKeyword}
          value={searchKeyword}
        />
      </form> */}
      <StyledSearch onClick={() => setShowSearch((state) => !state)} />
    </>
  );
}

const StyledInput = styled.input<{ show: Boolean }>(({ show, theme }) => {
  return {
    height: "30px",
    transition: "width 0.8s, opacity 0.8s",
    width: show ? "180px" : "0",
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

const StyledSearch = styled(SearchOutlined)(() => {
  return {
    cursor: "pointer",
    padding: "0 5px",
  };
});

export default HeaderSearch;
