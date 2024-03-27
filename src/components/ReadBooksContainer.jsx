import { useContext } from "react";
import { AssetsContext } from "../pages/ListedBooks";
import ReadBookCard from "./ReadBookCard";

const ReadBooksContainer = ({}) => {
  const data = useContext(AssetsContext);
  const { readBooks, setReadBooks } = data;

  return (
    <div className="mt-4 space-y-6">
      {readBooks.length === 0 ? (
        <h1 className="text-3xl font-bold text-center">No Read Books</h1>
      ) : (
        readBooks.map((readBook) => (
          <ReadBookCard key={readBook.bookId} readBooks={readBook} />
        ))
      )}
    </div>
  );
};

export default ReadBooksContainer;
