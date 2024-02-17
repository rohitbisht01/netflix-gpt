import NetflixLogo from "../assets/netflix.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const gptLanguageOptions = useSelector((state) => state.gpt.toggleGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img className="w-44" src={NetflixLogo} alt="netflix logo" />

      {user && (
        <div className="flex gap-1">
          {gptLanguageOptions && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-white rounded"
            >
              {SUPPORTED_LANGUAGE.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 bg-red-600 text-white rounded"
            onClick={handleGPTSearch}
          >
            {gptLanguageOptions ? "Home Page" : " GPT Search"}
          </button>
          <img src={user?.photoUrl} alt={user?.displayName} />
          <button
            className="p-2 m-2 bg-red-300 rounded"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
