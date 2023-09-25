import Project from "./pages/Project/Project";
import Index from "./pages/Index/Index";
import Projects from "./pages/Projects/Projects.jsx";

export const ROUTERS = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectName",
    element: <Project />,
  },
];
