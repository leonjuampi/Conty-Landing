import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Support from "../pages/support/page";
import Videos from "../pages/support/videos";
import Almacenes from "../pages/negocio/almacenes/page";
import Ropa from "../pages/negocio/ropa/page";
import Gastronomia from "../pages/negocio/gastronomia/page";
import Planes from "../pages/planes/page";
import Funcionalidades from "../pages/funcionalidades/page";
import Terminos from "../pages/terminos/page";
import Carta from "../pages/carta/page";
import Privacidad from "../pages/privacidad/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/planes",
    element: <Planes />,
  },
  {
    path: "/funcionalidades",
    element: <Funcionalidades />,
  },
  {
    path: "/almacenes",
    element: <Almacenes />,
  },
  {
    path: "/ropa",
    element: <Ropa />,
  },
  {
    path: "/gastronomia",
    element: <Gastronomia />,
  },
  {
    path: "/terminos",
    element: <Terminos />,
  },
  {
    path: "/privacidad",
    element: <Privacidad />,
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
    path: "/prueba",
    element: <Carta />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
