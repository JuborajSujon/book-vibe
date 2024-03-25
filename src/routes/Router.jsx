import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/about",
    element: <div>Listed Books</div>,
  },
  {
    path: "/contact",
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
]);
