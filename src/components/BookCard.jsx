import LinkRoundFull from "./LinkRoundFull";
const BookCard = () => {
  return (
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
        <div className="w-full border-t border-slate-300 border-dashed py-5"></div>
        <div className="card-actions justify-end opacity-80">
          <p>Fiction</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
