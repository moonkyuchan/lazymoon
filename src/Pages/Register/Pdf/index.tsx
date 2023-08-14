import { ReactElement, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function PdfViwer(): ReactElement {
  const pdfRef = useRef(null);
  const [pdf, setPdf] = useState<File>();

  // const [numPages, setNumPages] = useState<number>();
  // const [pageNumber, setPageNumber] = useState<number>(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.js",
  //   import.meta.url
  // ).toString();

  const handlePdf = (e) => {
    const {
      target: { files },
    } = e;
    setPdf(files[0]);
  };

  return (
    <div style={{ alignContent: "!important center" }}>
      <input type="file" accept=".pdf" ref={pdfRef} onChange={handlePdf} />
      <Document file={pdf}>
        <Page pageNumber={1} height={400} />
      </Document>
    </div>
  );
}

export default PdfViwer;
