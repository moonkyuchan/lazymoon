import { useState, useRef, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";

import { InitialStorageRef } from "@root/src/Firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

Quill.register("modules/imageResize", ImageResize);

function QuillEditor(props) {
  const quillRef = useRef<any>(null);
  const [contents, setContents] = useState("");

  const toolbarOptions = useMemo(
    () => [
      [{ font: [] }],
      [{ header: [3, 2, 1] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      ["link", "image", "video"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
    []
  );
  const formats = useMemo(
    () => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "align",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "background",
      "color",
      "link",
      "image",
      "video",
      "width",
    ],
    []
  );

  //image 관려 section
  //1 : URL 변화후 img 삽입
  const handleImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const files = input.files && input.files[0];
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();

      if (files)
        try {
          const imgStorageRef = ref(InitialStorageRef, `images/${files.name}`);
          const imgUrl = await uploadBytes(imgStorageRef, files).then(() =>
            getDownloadURL(imgStorageRef)
          );
          editor.insertEmbed(range.index, "image", imgUrl);
          editor.setSelection(range.index + 2);
        } catch (error) {
          console.log(error);
        }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImage,
        },
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      value={contents}
      theme="snow"
      onChange={setContents}
      modules={{
        ...modules,
        imageResize: {
          parchment: Quill.import("parchment"),
          modules: ["Resize", "DisplaySize", "Toolbar"],
        },
      }}
      formats={formats}
      style={{}}
    />
  );
}

export default QuillEditor;
