import { lazy } from "react";
import { RouteProps } from "react-router-dom";

interface RoutePropstest extends RouteProps {
  name?: string;
  key?: number;
}

const mobileRoutes: RoutePropstest[] = [
  {
    key: 1,
    path: "/dashboard",
    name: "dashboard",
    component: lazy(() => import("@/Components/Dashboard")),
  },
  {
    key: 2,
    path: "/daily",
    name: "daily",
    component: lazy(() => import("@root/src/Components/Daily")),
  },
  {
    key: 3,
    path: "/place",
    name: "place",
    component: lazy(() => import("@root/src/Components/Place")),
  },
  {
    key: 4,
    path: "/etc",
    name: "etc",
    component: lazy(() => import("@root/src/Components/Etc")),
  },
];

const webRoutes = [{}];

export { mobileRoutes, webRoutes };
