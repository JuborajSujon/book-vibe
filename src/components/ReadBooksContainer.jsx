import { useContext } from "react";
import { AssetsContext } from "../pages/ListedBooks";
import ReadBookCard from "./ReadBookCard";

const ReadBooksContainer = () => {
  const data = useContext(AssetsContext);
  const { readBooks, setReadBooks } = data;

  const handleDeleteReadBook = (bookId) => {
    const newReadBooks = readBooks.filter((book) => book.bookId !== bookId);
    setReadBooks(newReadBooks);
  };

  return (
    <div className="mt-8 space-y-8">
      {readBooks.length === 0 ? (
        <h1 className="text-3xl mt-20 font-bold text-center">No Read Books</h1>
      ) : (
        readBooks.map((readBook) => (
          <ReadBookCard
            key={readBook.bookId}
            readBooks={readBook}
            handleDeleteReadBook={handleDeleteReadBook}
          />
        ))
      )}
    </div>
  );
};

export default ReadBooksContainer;
