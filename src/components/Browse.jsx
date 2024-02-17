import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpCommingMovies from "../hooks/useUpCommingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggleSearch = useSelector((state) => state.gpt.toggleGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  return (
    <div>
      <Header />
      {toggleSearch ? (
        <GPTSearch />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
