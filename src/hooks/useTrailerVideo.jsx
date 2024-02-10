import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getPlayingMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Teaser"
    );
    const trailer = filteredData.length === 0 ? data[0] : filteredData[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getPlayingMovieVideo();
  }, []);
};

export default useTrailerVideo;
