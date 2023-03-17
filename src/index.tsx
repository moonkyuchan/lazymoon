import React, { ReactElement, useContext } from "react";
import ReactDOM from "react-dom/client";
import DeviceContext, { DeviceProvider } from "@/Context/DeviceContext";

import { ThemeProvider } from "styled-components";
import "./Style/root.scss";
// import theme from "./Style/variables.scss"

// import theme from "!!sass-variable-parser!./Style/variables.scss";
// import theme from "!!sass-variable-parser!./Style/variables.scss";

import App from "@/App";
import MoblieApp from "@/MoblieApp";

const theme = { display: "none" };

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

function SwitchApp(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  return isMobile ? <MoblieApp /> : <App />;
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DeviceProvider>
        <SwitchApp />
      </DeviceProvider>
    </ThemeProvider>
  </React.StrictMode>
);
