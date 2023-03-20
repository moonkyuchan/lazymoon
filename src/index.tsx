import React, { ReactElement, useContext } from "react";
import ReactDOM from "react-dom/client";
import DeviceContext, { DeviceProvider } from "@/Context/DeviceContext";

import { ThemeProvider } from "styled-components";
import ResetStyles from "@/Styles/resetStyles";
import theme from "@/Styles/variables";

import App from "@/App";
import MobileApp from "./MobileApp";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

function SwitchApp(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  return isMobile ? <MobileApp /> : <App />;
}

root.render(
  <React.StrictMode>
    <ResetStyles />
    <ThemeProvider theme={theme}>
      <DeviceProvider>
        <SwitchApp />
      </DeviceProvider>
    </ThemeProvider>
  </React.StrictMode>
);
