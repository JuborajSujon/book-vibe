import { useLoaderData, useNavigation } from "react-router-dom";
import BooksContainer from "../components/BooksContainer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  const navigation = useNavigation();
  const books = useLoaderData();

  return (
    <>
      <Hero />
      {navigation.state === "loading" ? (
        <Loader />
      ) : (
        <BooksContainer books={books} />
      )}
    </>
  );
};

export default Home;
