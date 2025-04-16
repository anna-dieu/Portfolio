import React from "react"; 
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ExperiencePage from "../pages/ExperiencePage.tsx";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/404Page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: (<HomePage />
                ),
            },
            {
                path: "/experience",
                element: <ExperiencePage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);