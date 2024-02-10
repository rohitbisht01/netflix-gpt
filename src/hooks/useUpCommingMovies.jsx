import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpCommingMovies } from "../utils/movieSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();

  const getCommingMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpCommingMovies(data.results));
  };

  useEffect(() => {
    getCommingMovie();
  }, []);
};

export default useUpCommingMovies;
