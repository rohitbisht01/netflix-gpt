import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer">
      <img src={IMG_CDN + posterPath} alt="movie card" />
    </div>
  );
};

export default MovieCard;
