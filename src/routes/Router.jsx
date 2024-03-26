import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch(
            "https://juborajsujon.github.io/personal-project-api/bookdb.json"
          ),
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
      {
        path: "/:bookId",
        element: <BookDetails />,
      },
    ],
  },
]);
