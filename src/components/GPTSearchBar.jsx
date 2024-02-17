import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const language = useSelector((state) => state.config.language);

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-700 rounded m-4 py-2 px-4 text-white ">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
