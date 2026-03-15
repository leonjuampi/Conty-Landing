import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Support from "../pages/support/page";
import Videos from "../pages/support/videos";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/soporte",
    element: <Support />,
  },
  {
    path: "/soporte/videos",
    element: <Videos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
