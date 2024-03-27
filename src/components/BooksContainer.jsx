import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksContainer = ({ books }) => {
  return (
    <section className="py-6 sm:py-12 text-clr-primary">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Books</h2>
          <p className="font-serif text-sm text-gray-400">
            Stay on top of your favorites books launch with preview .
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {books.slice(0, 12).map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

BooksContainer.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksContainer;
