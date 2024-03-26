import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkRoundFull from "../components/LinkRoundFull";
import Button from "../components/Button";
import LinkComponent from "../components/LinkComponent";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBookData = async () => {
      const res = await fetch(
        `https://juborajsujon.github.io/personal-project-api/bookdb.json`
      );
      const data = await res.json();
      const newbook = data.find((item) => item.bookId === id);

      setBook(newbook);
    };
    getBookData();
  }, [id]);

  const {
    image,
    bookName,
    author,
    category,
    tags,
    rating,
    bookId: newId,
    totalPages,
    review,
    publisher,
    yearOfPublishing,
  } = book;

  const handleBookReaded = () => {
    console.log("Book Readed", newId);
  };

  const handleWishList = () => {
    console.log("WishList", newId);
  };

  return (
    <div className="container mx-auto font-work-sans p-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full sm:w-1/2  bg-base-200 rounded-xl md:flex md:items-center md:justify-center">
          <img
            src={image}
            className="w-full md:w-3/5 object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 pl-10 pr-5 text-clr-primary">
          <h1 className="text-4xl font-playfair font-bold mb-4">{bookName}</h1>
          <p className="font-medium">By: {author}</p>
          <div className="w-full border-t border-slate-300  my-3"></div>
          <p>{category}</p>
          <div className="w-full border-t border-slate-300  my-3"></div>
          <p>
            <span className="font-medium">Review :</span> {review}
          </p>
          <p className="flex gap-3 items-center mt-4">
            <span className="font-medium">Tags :</span>
            {tags?.map((tag) => (
              <LinkRoundFull
                key={tag}
                message={tag}
                bgColor="bg-clr-bg-secondary"
                textColor="text-clr-secondary"
              />
            ))}
          </p>
          <div className="w-full border-t border-slate-300  my-3"></div>

          <div className="mt-6">
            <div className="flex *:w-1/2">
              <span>Total Pages</span>
              <span className="font-medium">{totalPages}</span>
            </div>
            <div className="flex *:w-1/2">
              <span>Publisher</span>
              <span className="font-medium">{publisher}</span>
            </div>
            <div className="flex *:w-1/2">
              <span>Year of Publishing</span>
              <span className="font-medium">{yearOfPublishing}</span>
            </div>
            <div className="flex *:w-1/2">
              <span>Rating</span>
              <span className="font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button
              handlerFunction={handleBookReaded}
              message="Read"
              bgColor="bg-white"
              textColor="text-clr-primary"
              extraCss={`border-1 border-slate-300`}
            />
            <Button
              handlerFunction={handleWishList}
              message="Whitelist"
              bgColor="bg-clr-teal"
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
