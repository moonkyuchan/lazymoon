import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { ExeHeader, ContentLayout, Footer, Header } from "@/Layout";
import { webRoutes } from "@/Router/routes";
import { Spinner } from "./Components/Common";
import { Portal } from "@/Components/";

export default function App() {
  console.log("APP");
  return (
    //회원유형별 보여주기 한번 필터링 필요
    //Slider values는 좋아요 sort 순으로 상위 10개만
    <>
      <Header />
      <ExeHeader />
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
