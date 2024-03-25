import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "/listedbooks",
        element: <div>Listed Books</div>,
      },
      {
        path: "/pagestoread",
        element: <div>Pages to Read</div>,
      },
      {
        path: "/feedback",
        element: <div>Feedback</div>,
      },
      {
        path: "/donate",
        element: <div>Donate</div>,
      },
    ],
  },
]);
