import PropTypes from "prop-types";
import LinkRoundFull from "./LinkRoundFull";
import { CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFileText } from "react-icons/ai";
import LinkRoundFullReal from "./LinkRoundFullReal";

const ReadBookCard = ({ readBooks, handleDeleteReadBook }) => {
  const {
    image,
    bookName,
    author,
    category,
    tags,
    rating,
    bookId,
    totalPages,
    publisher,
    yearOfPublishing,
  } = readBooks;
  return (
    <section className="relative text-clr-primary border rounded-lg border-gray-200 p-6">
      <div className="container flex flex-col mx-auto lg:flex-row gap-4 lg:gap-10">
        <div className="w-full md:w-1/3">
          <img className="h-64 mx-auto rounded-md" src={image} alt={bookName} />
        </div>
        <div className="flex flex-col w-full">
          <h2 className="text-2xl font-playfair font-semibold leading-none">
            {bookName}
          </h2>
          <p className="mt-4 mb-3 md:mb-5 text-sm font-medium">By: {author}</p>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center  gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Tags:</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  {tags.map((tag) => (
                    <LinkRoundFull
                      key={tag}
                      bgColor="bg-clr-bg-secondary"
                      textColor="text-clr-secondary"
                      message={`#${tag}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn size={20} />
                <span className="text-sm">
                  Year of Publishing: {yearOfPublishing}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-4">
              <div className="flex items-center gap-2">
                <FiUsers />
                <span className="text-sm">Publisher: {publisher}</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineFileText />
                <span className="text-sm">Page: {totalPages}</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <LinkRoundFull
                bgColor="bg-clr-bg-blue"
                textColor="text-clr-blue"
                message={`Category: ${category}`}
              />
              <LinkRoundFull
                bgColor="bg-clr-bg-orange"
                textColor="text-clr-orange"
                message={`Rating: ${rating}`}
              />
              <LinkRoundFullReal
                bgColor="bg-clr-secondary"
                textColor="text-white"
                message={`View Details`}
                routerLink={`/${bookId}`}
              />
            </div>
          </div>
        </div>
      </div>
      {handleDeleteReadBook && (
        <div
          className="absolute -top-4 -right-4 sm:top-4 sm:right-4 tooltip"
          data-tip="Delete">
          <button
            onClick={() => handleDeleteReadBook(bookId)}
            className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

ReadBookCard.propTypes = {
  readBooks: PropTypes.object.isRequired,
  handleDeleteReadBook: PropTypes.func.isRequired,
};

export default ReadBookCard;
