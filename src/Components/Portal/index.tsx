import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps) {
  const el = document.getElementById("spinner") as HTMLDivElement;
  return ReactDOM.createPortal(children, el);
}

export default Portal;
