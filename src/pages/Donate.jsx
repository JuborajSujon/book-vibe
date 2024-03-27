import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { FaHandsHelping } from "react-icons/fa";

const Donate = () => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <SectionHeader textInner="Donate" />
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 rounded-lg p-10">
        <div className=" h-full w-full">
          <div className="w-full ">
            <img
              className="w-[70%] h-full overflow-hidden mx-auto object-cover rounded-lg"
              src="https://i.ibb.co/MpHXqgP/poor-children.jpg"
              alt="poor children"
            />
          </div>
          <div className="w-full pl-5 ml-8 border-l-4 border-l-red-600 pr-16">
            <h1 className="text-lg md:text-3xl font-bold mb-3 mt-6">
              Transform a life for as little as $15 a month
            </h1>
            <p className="text-justify opacity-70 mb-3">
              Transforming a life doesn't always require grand gestures or huge
              investments. Sometimes, it's the small, consistent acts of
              kindness that make the biggest difference. For as little as $15 a
              month, you have the power to change someone's world.
            </p>
            <p className="text-justify opacity-70 mb-3">
              With just $15 a month, you become a lifeline for those who are
              struggling. You offer hope where there was once despair and help
              build a more compassionate world for all.
            </p>
          </div>
        </div>
        <div className=" h-full w-full p-8">
          <div className="flex flex-col items-center p-4 border-2 border-slate-200 rounded-lg shadow-md">
            <div className="space-x-3">
              <Button
                bgColor="bg-clr-secondary"
                textColor="text-white"
                message="GIVE MONTHLY"
              />
              <Button
                bgColor="bg-clr-cyan"
                textColor="text-white"
                message="GIVE ONCE"
              />
            </div>
            <h1 className=" font-bold mt-4 flex items-center gap-3 py-3 pl-7 text-white bg-clr-teal w-[90%] rounded-md">
              <FaHandsHelping size={25} />
              CHOOSE YOUR AMOUNT
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
              <button className="btn btn-warning ">$15</button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                $30
              </button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                $50
              </button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                $75
              </button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                $100
              </button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                $200
              </button>
              <button className="btn border-2 border-slate-200 hover:bg-clr-secondary hover:text-white">
                other
              </button>
            </div>
            <div className="form-control w-[90%]">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox bg-clr-secondary"
                />
                <span className="label-text ml-4">
                  I'd like to help cover the transaction fees for my donation
                </span>
              </label>
            </div>
            <div className="w-[90%] text-xl font-bold text-center py-5">
              <h2>Your Donation Amount : $15</h2>
            </div>
            <div className="w-[90%]">
              <label className="label flex flex-col items-start gap-3">
                <span className="label-text">Your Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
              <div className="ml-1">
                <Button
                  bgColor="bg-clr-cyan"
                  textColor="text-white"
                  message="DONATE NOW"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
