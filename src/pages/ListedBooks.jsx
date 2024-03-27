import { useEffect, useState, createContext } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import SectionHeader from "./../components/SectionHeader";
import { getLocalStorageData } from "../utility/localStorage";

export const AssetsContext = createContext();
const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  // console.log(books);
  useEffect(() => {
    const readBooksData = getLocalStorageData("readed");
    const wishlistBooksData = getLocalStorageData("wishlist");

    const handleReadBooks = () => {
      const storebooks = readBooksData.map((book) => {
        const id = parseInt(book);
        return books.find((item) => item.bookId === id);
      });
      handleSort(storebooks);
      setReadBooks(storebooks);
    };
    const handleWishListBooks = () => {
      const storebooks = wishlistBooksData.map((book) => {
        const id = parseInt(book);
        return books.find((item) => item.bookId === id);
      });
      handleSort(storebooks);
      setWishlistBooks(storebooks);
    };

    const handleSort = (data) => {
      if (sortValue === "Select") {
        return data;
      }
      if (sortValue === "rating") {
        return data.sort((a, b) =>
          b.rating > a.rating ? 1 : a.rating > b.rating ? -1 : 0
        );
      }
      if (sortValue === "totalPages") {
        return data.sort((a, b) =>
          b.totalPages > a.totalPages ? 1 : a.totalPages > b.totalPages ? -1 : 0
        );
      }
      if (sortValue === "yearOfPublishing") {
        return data.sort((a, b) =>
          b.yearOfPublishing > a.yearOfPublishing
            ? 1
            : a.yearOfPublishing > b.yearOfPublishing
            ? -1
            : 0
        );
      }
    };

    handleReadBooks();
    handleWishListBooks();
  }, [sortValue, books]);

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <div className="container px-6 mt-4 mx-auto">
      <article className="">
        <SectionHeader textInner="Books" />
        <div className="text-center mb-5">
          <select
            defaultValue={"Select"}
            onChange={handleSortChange}
            className="select bg-clr-secondary text-white text-lg font-medium text-center ">
            <option
              className="bg-gray-200 text-clr-primary text-center hidden"
              value="Select"
              disabled>
              Sort By
            </option>
            <option
              className="bg-gray-200 text-clr-primary text-center"
              value="rating">
              Rating
            </option>
            <option
              className="bg-gray-200 text-clr-primary text-center"
              value="totalPages">
              Number of pages
            </option>
            <option
              className="bg-gray-200 text-clr-primary text-center"
              value="yearOfPublishing">
              Published year
            </option>
          </select>
        </div>
        <div className="">
          {/* Tabs */}
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  rounded-t-lg border-gray-400 `}>
              <span>Read Books</span>
            </Link>
            <Link
              to={`wishlist`}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  rounded-t-lg border-gray-400 `}>
              <span>Wishlist Books</span>
            </Link>
          </div>

          <AssetsContext.Provider
            value={{
              readBooks,
              setReadBooks,
              wishlistBooks,
              setWishlistBooks,
            }}>
            <Outlet context={[readBooks, wishlistBooks]} />
          </AssetsContext.Provider>
        </div>
      </article>
    </div>
  );
};

export default ListedBooks;
