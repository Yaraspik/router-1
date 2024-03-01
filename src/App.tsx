import Menu from "./routes/Menu";
import HomePage from "./routes/HomePage";
import ForzaPage from "./routes/ForzaPage";
import DriftPage from "./routes/DriftPage";
import TimeAttackPage from "./routes/TimeAttackPage";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/forza",
        element: <ForzaPage />,
      },
      {
        path: "/drift",
        element: <DriftPage />,
      },
      {
        path: "/timeattack",
        element: <TimeAttackPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
