import { ReactElement, useContext } from "react";
import DeviceContext from "@/Context/DeviceContext";

import MobileHeader from "./Mobile";
import WebHeader from "./Web";

export default function Header(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;

  return <>{isMobile ? <MobileHeader /> : <WebHeader />}</>;
}
