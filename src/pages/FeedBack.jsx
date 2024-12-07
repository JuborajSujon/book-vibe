import toast from "react-hot-toast";
import Button from "../components/Button";
import SectionHeader from "./../components/SectionHeader";
import { useState } from "react";

const FeedBack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill in all the fields");
      return;
    }
    toast.success("Thanks for your feedback");
  };
  return (
    <div className="container mx-auto px-4 mt-6 pb-20">
      <SectionHeader textInner="Feedback" />
      <div>
        <section className="py-6 bg-gray-200 text-clr-primary rounded-md">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-slate-400">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Help Us Improve</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>01322-810882</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>feedback@programming-hero.com</span>
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="flex flex-col">
                <span className="mb-1 font-bold">Full name</span>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 font-bold">Email address</span>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="flex flex-col">
                <span className="mb-1 font-bold">Message</span>
                <textarea
                  rows="4"
                  name="message"
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message"></textarea>
              </label>
              <div className="w-[1/2] mx-auto">
                <Button
                  message="Send message"
                  bgColor="bg-clr-secondary"
                  textColor={"text-white"}
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedBack;
