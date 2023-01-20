import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import AmbientsPage from "./pages/AmbientsPage";
import StadtisticsPage from "./pages/StadtisticsPage";
import TypePage from "./pages/TypePage";
import BudgetPage from "./pages/BudgetPage";
import ResultsPage from "./pages/ResultsPage";

const router = Router([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ambients",
    element: <AmbientsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stadistics",
    element: <StadtisticsPage />,
  },
  {
    path: "/type",
    element: <TypePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/budget",
    element: <BudgetPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
