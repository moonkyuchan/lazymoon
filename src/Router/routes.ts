import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { Login, Register, Join } from "@/Pages";

interface RoutePropstest extends RouteProps {
  name?: string;
  key?: number;
  path: string;
  component?: React.FC | any;
}

const mobileRoutes: RoutePropstest[] = [
  {
    key: 1,
    path: "/dashboard",
    name: "dashboard",
    component: lazy(() => import("@root/src/Mobile/Components/Dashboard")),
  },
  {
    key: 2,
    path: "/daily",
    name: "daily",
    component: lazy(() => import("@root/src/Mobile/Components/Daily")),
  },
  {
    key: 3,
    path: "/place",
    name: "place",
    component: lazy(() => import("@root/src/Mobile/Components/Place")),
  },
  {
    key: 4,
    path: "/etc",
    name: "etc",
    component: lazy(() => import("@root/src/Mobile/Components/Etc")),
  },
];

const webRoutes = [{}];

const nonAuth: RoutePropstest[] = [
  {
    key: 1,
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    key: 2,
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    key: 3,
    path: "/join",
    name: "join",
    component: Join,
  },
];

export { mobileRoutes, webRoutes, nonAuth };
