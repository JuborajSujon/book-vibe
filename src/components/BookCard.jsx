import { Link } from "react-router-dom";
import LinkRoundFull from "./LinkRoundFull";
import { BsStar } from "react-icons/bs";
const BookCard = () => {
  return (
    <Link to="/bookdetails">
      <div className="card border text-clr-primary border-slate-300 shadow-xl rounded-2xl">
        <figure className="p-4 rounded-2xl">
          <img
            className="rounded-2xl"
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="p-4">
          <div className="flex gap-2">
            <LinkRoundFull
              bgColor="bg-clr-bg-secondary"
              textColor="text-clr-secondary"
              message="Young Adult"
            />
            <LinkRoundFull
              bgColor="bg-clr-bg-secondary"
              textColor="text-clr-secondary"
              message="Identity"
            />
          </div>
          <h2 className="card-title mt-5 font-playfair text-lg sm:text-xl md:text-2xl font-bold">
            The Catcher in the Rye
          </h2>
          <p className="mb-7 mt-3 opacity-80">by: Awlad Hossain</p>
          <div className="w-full border-t border-slate-300 border-dashed my-4"></div>
          <div className="card-actions justify-start opacity-80 ">
            <div className="w-full flex items-center justify-between">
              <p>Fiction</p>
              <p className="flex items-center gap-3">
                <span>5.0</span>
                <BsStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
