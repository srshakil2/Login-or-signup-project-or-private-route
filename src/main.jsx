import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./component/utils/ContextProvider.jsx";
import LayOut from "./component/Layout/LayOut.jsx";
import Login from "./component/Outhers/Login.jsx";
import SingUp from "./component/Outhers/SingUp.jsx";
import Cards from "./component/Outhers/Cards.jsx";
import Prievate from "./component/prievate/Prievate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/cards",
        element: (
          <Prievate>
            <Cards></Cards>
          </Prievate>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
