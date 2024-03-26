import { useLoaderData } from "react-router-dom";
import BooksContainer from "../components/BooksContainer";
import Hero from "../components/Hero";

const Home = () => {
  const books = useLoaderData();

  return (
    <>
      <Hero />
      <BooksContainer books={books} />
    </>
  );
};

export default Home;
