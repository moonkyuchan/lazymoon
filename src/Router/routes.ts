import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { Login, Register, Join } from "@/Pages";

const mobileRoutes = [
  {
    key: 1,
    path: "/dashboard",
    name: "dashboard",
    component: lazy(() => import("@root/src/Mobile/Components/Dashboard")),
  },
  {
    key: 2,
    path: "/register",
    name: "register",
    component: lazy(() => import("@root/src/Mobile/Components/Dashboard")),
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

const webRoutes = [
  {
    key: 1,
    path: "/",
    name: "dashboard",
    component: lazy(() => import("@root/src/Components/Dashboard")),
  },
  {
    key: 2,
    path: "/register/:id?/:mode?",
    name: "register",
    component: lazy(() => import("@root/src/Pages/Register")),
  },
  {
    key: 3,
    path: "/viewer/:id",
    name: "viewer",
    component: lazy(() => import("@root/src/Pages/Viewer")),
  },
];

const nonAuth = [
  {
    key: 1,
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    key: 2,
    path: "/join",
    name: "join",
    component: Join,
  },
];

export { mobileRoutes, webRoutes, nonAuth };
