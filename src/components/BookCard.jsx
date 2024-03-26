import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinkRoundFull from "./LinkRoundFull";
import { BsStar } from "react-icons/bs";
const BookCard = ({ book }) => {
  const { image, bookName, author, category, tags, rating } = book;
  return (
    <Link to="/bookdetails">
      <div className="card border text-clr-primary border-slate-300 shadow-xl rounded-2xl">
        <figure className="p-4 rounded-2xl bg-gray-100 m-4 ">
          <img className="rounded-2xl h-52" src={image} alt={bookName} />
        </figure>
        <div className="p-4 flex flex-col">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <LinkRoundFull
                key={tag}
                bgColor="bg-clr-bg-secondary"
                textColor="text-clr-secondary"
                message={tag}
              />
            ))}
          </div>
          <h2 className="card-title mt-5 font-playfair text-lg sm:text-xl md:text-2xl font-bold">
            {bookName.slice(0, 22)}
          </h2>
          <p className="mb-7 mt-3 opacity-80 font-medium">by: {author}</p>
          <div className="w-full border-t border-slate-300 border-dashed my-4"></div>
          <div className="card-actions justify-start opacity-80 ">
            <div className="w-full flex items-center justify-between font-medium opacity-70">
              <p>{category}</p>
              <p className="flex items-center gap-3">
                <span>{rating}</span>
                <BsStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
