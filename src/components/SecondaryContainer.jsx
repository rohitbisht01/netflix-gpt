import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <>
      {movies && (
        <div className=" bg-black">
          <div className="-mt-72 relative z-20 ">
            <MovieList title="Now Playing" movies={movies.nowPlayingMovie} />
            <MovieList title="Popular Movies" movies={movies.popularMovies} />
            <MovieList title="Top Rated" movies={movies.topRatedMovies} />
            <MovieList
              title="Upcoming Movies"
              movies={movies.upCommingMovies}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryContainer;
