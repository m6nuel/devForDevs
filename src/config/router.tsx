import PrivateLayout from "@/pages/layouts/PrivateLayout";
import RootLayout from "@/pages/layouts/RootLayout";
import DashboardPage from "@/pages/private/DashboardPage";
import HomePage from "@/pages/Public/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          },
          {
            path: 'settings',
            element: <div>Settings</div>
          }
        ]
      }
    ]
  },
])