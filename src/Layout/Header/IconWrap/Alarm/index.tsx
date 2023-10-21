import { ReactElement } from "react";
import styled from "styled-components";
import { BellOutlined } from "@ant-design/icons";

export default function HeaderAlarm(): ReactElement {
  return <StyledAlarm />;
}

const StyledAlarm = styled(BellOutlined)(() => {
  return {
    cursor: "pointer",
    padding: "0 5px",
  };
});
