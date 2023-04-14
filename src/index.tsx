import React, { ReactElement, useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch } from "react-router-dom";
import DeviceContext, { DeviceProvider } from "@/Context/DeviceContext";

import { ThemeProvider } from "styled-components";
import ResetStyles from "@root/src/Styles/reset";

import theme from "!!sass-variable-parser!./Styles/variables.scss";

import App from "@/App";
import MobileApp from "./MobileApp";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

function SwitchApp(): ReactElement {
  const { device } = useContext(DeviceContext);
  const { isMobile } = device;
  return (
    <BrowserRouter>
      <Switch>{isMobile ? <MobileApp /> : <App />}</Switch>
    </BrowserRouter>
  );
}

root.render(
  <>
    <ResetStyles />
    <ThemeProvider theme={theme}>
      <DeviceProvider>
        <SwitchApp />
      </DeviceProvider>
    </ThemeProvider>
  </>
);
