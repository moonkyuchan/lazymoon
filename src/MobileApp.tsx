import { Suspense, ReactElement } from "react";
import Header from "@/Mobile/Layout/Header";
import Content from "@/Mobile/Layout/Content";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { mobileRoutes } from "@/Router/routes";

const BodyStyles = createGlobalStyle`
	body {
		overflow-x: hidden;
		overflow-y: auto;
    -ms-overflow-style:none;

		&::-webkit-scrollbar {
      max-width: 0px;
			max-height: 0px;
			display: none;
		}
    
		&::-webkit-scrollbar-thumb {
      background-color: transparent;
		}
  }
`;

export default function MobileApp(): ReactElement {
  return (
    <>
      <BodyStyles />
      <Content>
        <Header />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
            {mobileRoutes.map((route: any) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact
                />
              );
            })}
          </Suspense>
        </Switch>
      </Content>
    </>
  );
}
