import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { ExeHeader, ContentLayout, Footer, Header } from "@/Layout";
import { webRoutes } from "@/Router/routes";
import { Spinner } from "./Components/Common";
import { Portal } from "@/Components/";

export default function App() {
  return (
    <>
      <Header />
      <ContentLayout>
        <Switch>
          <Suspense
            fallback={
              <Portal>
                <Spinner />
              </Portal>
            }
          >
            {webRoutes.map((route: any) => {
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
      </ContentLayout>
      <Footer />
    </>
  );
}
