import { ReactElement } from "react";
import { ContentLayout } from "@root/src/Layout";

import Quill from "./Quill";
import Title from "./Title";
import Submit from "./Submit";

function Register(): ReactElement {
  console.log("REGISGER");
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

export default Register;
