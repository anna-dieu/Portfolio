import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import ExperiencePage from "../pages/ExperiencePage.tsx";
import ProjectPage from "../pages/ProjectPage.tsx"
import NotFoundPage from "../pages/404Page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "projects",
        element: <ProjectPage />

      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
