import LinkComponent from "./LinkComponent";
import Banner from "../assets/banner.png";
const Hero = () => {
  return (
    <div className="mt-4 container mx-auto px-4">
      <div className="hero lg:h-[70vh] bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" ">
            <img src={Banner} className=" rounded-lg mx-auto shadow-2xl" />
          </div>
          <div className="lg:pl-5 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-8">
              Books to freshen up <br /> your bookshelf
            </h1>

            <LinkComponent
              bgColor="bg-green-400"
              textColor="text-white"
              message="View The List"
              routerLink="/listedbooks"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
