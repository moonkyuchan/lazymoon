import { ReactElement, useRef } from "react";
import { useHistory } from "react-router-dom";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { ContentLayout } from "@root/src/Layout";

function Register(): ReactElement {
  const history = useHistory();

  const editorRef = useRef<any>(null);
  const handleFocus = () => {
    console.log("focus!!");
  };
  return (
    <ContentLayout
      excepted={`${history.location.pathname}`}
      newStyle={{ width: "100%" }}
    >
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        height="1000px"
        initialEditType="markdown"
        initialValue=""
        onFocus={handleFocus}
        language="ko-KR"
        hideModeSwitch={true}
        previewHighlight={false}
      />
    </ContentLayout>
  );
}

export default Register;
