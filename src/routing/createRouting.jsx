import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login, Password, Register, PageNotFound, Home, About } from "@/path";
import ProtectedRoutes from "@/routing/protectedroutes";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
    index: true
  },
  {
    path: "/",
    element: <Navigate to="login" replace />,
    index: true
  },
  {
    path: "/login/*",
    element: <Login />,
  },
  {
    path: "/register/*",
    element: <Register />,
  },
  {
    path: "/password/*",
    element: <Password />,

  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default router;