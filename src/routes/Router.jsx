import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooksContainer from "../components/ReadBooksContainer";
import WishBooksContainer from "../components/WishBooksContainer";
import ErrorPage from "../pages/ErrorPage";
import PagesToRead from "../pages/PagesToRead";
import FeedBack from "../pages/FeedBack";
import Donate from "./../pages/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <PagesToRead />,
        loader: () =>
          fetch(
            "https://juborajsujon.github.io/personal-project-api/bookdb.json"
          ),
      },
      {
        path: "/feedback",
        element: <FeedBack />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/:bookId",
        element: <BookDetails />,
      },
    ],
  },
]);
