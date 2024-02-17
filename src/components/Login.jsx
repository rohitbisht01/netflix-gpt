import { useRef, useState } from "react";
import Header from "./Header";
import { signUpValidation, signInValidation } from "../utils/util";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { IMG_URL, NETFLIX_BG_IMAGE } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // validate credentials

    let message = "";
    if (toggleSignInForm) {
      message = signInValidation(email.current.value, password.current.value);
    } else {
      message = signUpValidation(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);
    if (message) return;

    // Sign in or Sign up
    if (isSignInForm) {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, " and ", errorMessage);
        });
    } else {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: IMG_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, " and ", errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMAGE} alt="netflix background image" />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-75">
        <h1 className="font-semibold text-[28px] mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-3 my-2 w-full rounded bg-slate-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-3 my-2 w-full rounded bg-slate-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-2 w-full rounded bg-slate-800"
        />
        <p className="text-red-400 font-light text-sm">{errorMessage}</p>
        <button
          // type="submit"
          onClick={handleButtonClick}
          className="text-white my-6 p-3 w-full rounded bg-red-600"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <div>
          <input type="checkbox" className="cursor-pointer" />
          <span>Remember me</span>

          <span>Need help ?</span>
        </div> */}

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
