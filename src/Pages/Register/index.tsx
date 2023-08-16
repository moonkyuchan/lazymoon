import { ReactElement } from "react";
import { ContentLayout } from "@root/src/Layout";
import styled from "styled-components";

import Quill from "./Quill";
import Title from "./Title";
import Submit from "./Submit";

function Register(): ReactElement {
  return (
    <ContentLayout
      newStyle={{ maxWidth: "1400px", margin: "0 auto", marginTop: "40px" }}
    >
      <Title />
      <Quill />
      <Submit />
    </ContentLayout>
  );
}

const StyledWrap = styled.main(() => {
  return {};
});

export default Register;
