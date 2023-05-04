import { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebarIsOpen, setIsOpen } from "@root/src/Store/Slice/Sidebar";

import styled from "styled-components";

import SidebarHeader from "./SidebarHeader";

export interface SidebarProps {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}
// transition 적용하는데 많은 시간을 보낼줄이야...이게 부모에서 내려주는 prop이 state를 업데이트 하니까
// 자식까지 리렌더링이 되면서 transition이 적용되지 않음 해결방안으로는 keyframe , react-transition-group 등이
// 있지만 useEffect를 통해 자식에서 새로 state를 만들고 자식에서 한번 더! 를 적용

function Sidebar(props: SidebarProps): ReactElement {
  const { openMenu, setOpenMenu } = props;
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSidebarIsOpen);

  useEffect(() => {
    // setSidebarOpen(openMenu);
    setTimeout(() => {
      dispatch(setIsOpen(openMenu));
    }, 1);
  }, [openMenu]);

  const handleSidebarClose = (): void => {
    // setSidebarOpen(false);
    dispatch(setIsOpen(false));
    setTimeout(() => {
      setOpenMenu(false);
    }, 300); // 시간은 transition 과 같게 100으로 하면 금방 사라진다
  };

  return (
    <StyledBack openMenu={isOpen}>
      <SidebarHeader handleSidebarClose={handleSidebarClose} />
    </StyledBack>
  );
}

const StyledBack = styled.nav<{ openMenu: boolean }>(({ openMenu, theme }) => {
  return {
    zIndex: 1,
    background: theme.white,
    position: "fixed",
    top: 0,
    left: openMenu ? 0 : "-360px",
    width: "100%",
    height: "100vh",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    transition: `left 0.3s ease-in-out`,
  };
});

export default Sidebar;
