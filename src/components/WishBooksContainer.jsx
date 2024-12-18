import { useContext } from "react";
import { AssetsContext } from "../pages/ListedBooks";
import WishBookCard from "./WishBookCard";
import { getLocalStorageData } from "../utility/localStorage";

const WishBooksContainer = () => {
  const data = useContext(AssetsContext);
  const { wishlistBooks, setWishlistBooks } = data;

  const handleDeleteWishBook = (bookId) => {
    const newWishBooks = wishlistBooks.filter((book) => book.bookId !== bookId);
    setWishlistBooks(newWishBooks);

    const newWishedBooks = getLocalStorageData("wishlist");
    const newWishedBooksData = newWishedBooks.filter(
      (book) => book !== bookId.toString()
    );
    localStorage.setItem("wishlist", JSON.stringify(newWishedBooksData));
  };

  return (
    <div className="mt-8 pb-10 space-y-8">
      {wishlistBooks.length === 0 ? (
        <h1 className="text-3xl mt-20 font-bold text-center">No Wish Books</h1>
      ) : (
        wishlistBooks.map((wishBook) => (
          <WishBookCard
            key={wishBook.bookId}
            wishBooks={wishBook}
            handleDeleteWishBook={handleDeleteWishBook}
          />
        ))
      )}
    </div>
  );
};

export default WishBooksContainer;
