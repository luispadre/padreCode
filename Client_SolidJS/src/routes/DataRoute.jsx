import { lazy } from "solid-js";
import Auth from "../Pages/Auth";
import NoAuth from "../Pages/NoAuth";

import { Router, useRoutes, Link } from "solid-app-router";

export const routes = [
  {
    path: "/",
    component: lazy(() => import('../Pages/NoAuth'))
  },
  {
    path: "/register",
    component: lazy(() => import('../Pages/NoAuth/Register'))
  },
  {
    path: "/login",
    component: lazy(() => import('../Pages/NoAuth/Login'))
  },

  {
    path: "/dashboard",
    component: lazy(() => import('../Pages/Auth/Dashboard'))
  },
  {
    path:"/my-courses/learning/{id}",
    component: lazy(() => import('../Pages/Auth/home/MyCourses'))
  },
  
];
