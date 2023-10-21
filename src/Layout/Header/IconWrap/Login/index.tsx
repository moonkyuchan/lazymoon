import { ReactElement } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

export default function HeaderLogin(): ReactElement {
  const history = useHistory();

  return <StyledLogin onClick={() => history.push("/login")} />;
}

const StyledLogin = styled(UserOutlined)(() => {
  return {
    cursor: "pointer",
    padding: "0 5px",
  };
});
