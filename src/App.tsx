import { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header, ContentLayout, Footer } from "@/Layout";
import { webRoutes } from "@/Router/routes";
import { selectUid } from "./Store/Slice/Uid";

export default function App() {
  const uid = useSelector(selectUid);

  return (
    //회원유형별 보여주기 한번 필터링 필요
    //Slider values는 좋아요 sort 순으로 상위 10개만
    <ContentLayout>
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>
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

      <Footer />
    </ContentLayout>
  );
}
