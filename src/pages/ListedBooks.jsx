import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import SectionHeader from "./../components/SectionHeader";
import { getLocalStorageData } from "../utility/localStorage";

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
      setReadBooks(storebooks);
    };
    const handleWishListBooks = () => {
      const storebooks = wishlistBooksData.map((book) => {
        const id = parseInt(book);
        return books.find((item) => item.bookId === id);
      });
      setWishlistBooks(storebooks);
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
        <SectionHeader />
        <div className="text-center">
          <select
            defaultValue={"Select"}
            onChange={handleSortChange}
            className="select  bg-clr-secondary text-white text-lg font-medium">
            <option value="Select" disabled>
              Sort By
            </option>
            <option value="rating">Rating</option>
            <option value="totalPages">Number of pages</option>
            <option value="yearOfPublishing">Publisher year</option>
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
          <Outlet />
        </div>
      </article>
    </div>
  );
};

export default ListedBooks;
