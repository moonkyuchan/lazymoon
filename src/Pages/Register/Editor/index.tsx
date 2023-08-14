import { useState } from "react";
import { InitialStorageRef } from "@root/src/Firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import {
  Editor as ToastEditor,
  Viewer as ToastViewer,
} from "@toast-ui/react-editor";

import { useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

function Editor(props) {
  const editorRef = useRef<any>(null);
  const [contents, setContents] = useState("");

  const handleFocus = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  const handleImage = async (blob, callback) => {
    const imagesRef = ref(InitialStorageRef, `images/${blob.name}`);

    try {
      await uploadBytes(imagesRef, blob).then(() => {
        getDownloadURL(imagesRef).then((res) => {
          callback(res, `${blob.name}`);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastEditor
        ref={editorRef}
        previewStyle="vertical"
        height="1000px"
        initialEditType="wysiwyg"
        language="ko-KR"
        previewHighlight={false}
        onChange={handleFocus}
        hooks={{ addImageBlobHook: handleImage }}
      />
      <ToastViewer initialValue={"???"} />
    </>
  );
}

export default Editor;
