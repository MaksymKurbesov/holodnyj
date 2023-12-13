import Project from "./pages/Project/Project";
import Index from "./pages/Index/Index";
import Projects from "./pages/Projects/Projects.jsx";
import AboutUs from "./pages/AboutUs/AboutUs";
import Models from "./pages/Models/Models";
import Model from "./pages/Model/Model";
import InStock from "./pages/InStock/InStock";
import Contacts from "./pages/Contacts/Contacts";

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
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/models",
    element: <Models />,
  },
  {
    path: "/models/:modelName",
    element: <Model />,
  },
  {
    path: "/in-stock",
    element: <InStock />,
  },
  {
    path: "/in-stock/:modelName",
    element: <Model />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
];
