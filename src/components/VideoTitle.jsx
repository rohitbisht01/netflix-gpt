import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex gap-3">
        <button className="p-2 flex gap-3 items-center justify-center bg-slate-400 hover:bg-slate-500 rounded px-8">
          <FaPlay />
          <p>Play</p>
        </button>
        <button className="p-2 flex gap-3 items-center justify-center bg-slate-400 hover:bg-slate-500 rounded px-8">
          <BsInfoCircle />
          <p>More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
