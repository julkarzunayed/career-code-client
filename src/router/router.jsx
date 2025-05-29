import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import LogIn from "../pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "/logIn",
        Component: LogIn
      }
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);

export default router;