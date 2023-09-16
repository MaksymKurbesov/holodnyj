import Project from "./pages/Project/Project";
import Index from "./pages/Index/Index";

export const ROUTERS = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/projects/:projectName",
    element: <Project />,
  },
];
