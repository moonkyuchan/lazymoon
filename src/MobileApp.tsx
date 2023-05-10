import { Suspense, ReactElement } from "react";
import styled from "styled-components";
import Header from "@/Mobile/Layout/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { auth } from "@/Firebase";

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
  console.log(auth);
  return (
    <>
      <BodyStyles />
      <StyledLayout>
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
      </StyledLayout>
    </>
  );
}

//여기도 ContentLayout 으로 빼줘야 하나?
const StyledLayout = styled.section(({}) => {
  return {
    position: "relative",
    minWidth: "360px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "52px",
    height: "100vh",
  };
});
