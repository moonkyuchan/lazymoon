import {
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

type DropDownProps = {
  show: Boolean;
  style?: CSSProperties;
};

//Dropdown 같은 경우 공통 컴포넌트를 어디에서나 사용 가능한 컴포넌트로 리팩토링 필요!
//우선적으로 Header에서만 사용하는 컴포넌트로 작업 진행

function DropDown(props: DropDownProps): ReactElement {
  const { style, ...rest } = props;
  // const dropRef = useRef<HTMLDivElement | null>(null);
  // const [positions, setPositions] = useState<any>({ x: 0, y: 0 });

  // useEffect((): any => {
  //   const rect = dropRef?.current?.getBoundingClientRect();
  //   setPositions({ x: rect?.left, y: rect?.bottom });
  // }, [props.show]);

  return (
    <StyledDropDown style={{ ...style }}>
      <StyledTitle>Alarm</StyledTitle>
      <StyledOptionsWrap>
        <StyledOption>1kalksjdfjk</StyledOption>
        <StyledOption>2fdsafdsafsadf</StyledOption>
        <StyledOption>3fadsfasdfasd</StyledOption>
        <StyledOption>4fdsafdsafdsafas</StyledOption>
      </StyledOptionsWrap>
    </StyledDropDown>
  );
}

const StyledDropDown = styled.div(({ theme }) => {
  return {
    zIndex: 888,
    top: 40,
    left: 10,
    minWidth: "100px",
    minHeight: "150px",
    backgroundColor: theme.white,
    boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.2);",
    position: "absolute",
    borderRadius: 5,
    padding: "15px",
  };
});

const StyledTitle = styled.div(({ theme }) => {
  return {
    fontSize: theme.fontSizeXl,
    fontFamily: theme.fontFamilyEd,
    [":hover"]: {
      opacity: 0.8,
    },
  };
});

const StyledOptionsWrap = styled.div(({}) => {
  return {
    padding: "20px 0",
    verticalAlign: "middle",
  };
});

const StyledOption = styled.div(({ theme }) => {
  return {
    color: theme.grey2,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "40px",
    [":hover"]: {
      backgroundColor: theme.grey1,
    },
  };
});

export default DropDown;
