import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllProjects } from "./views/AllProjects";
import { Layout } from "./components/Layout";
import { Home } from "./views/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 - Page Not Found 👨🏻‍🔧👨🏻‍🔧</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "allproject", element: <AllProjects /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
