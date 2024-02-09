import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  //   const nowPlayingMovies = useSelector((state) => state.movies);

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  //   return nowPlayingMovies;
};

export default useNowPlayingMovies;
