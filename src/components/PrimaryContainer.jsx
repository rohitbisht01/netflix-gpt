import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const PrimaryContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovie);
  if (movies === null) return;

  const mainMovie = movies[0];

  const { title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default PrimaryContainer;
