import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooksContainer from "../components/ReadBooksContainer";
import WishBooksContainer from "../components/WishBooksContainer";

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
        element: <ListedBooks />,
        loader: () =>
          fetch(
            "https://juborajsujon.github.io/personal-project-api/bookdb.json"
          ),
        children: [
          {
            index: true,
            element: <ReadBooksContainer />,
          },
          {
            path: "wishlist",
            element: <WishBooksContainer />,
          },
        ],
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
