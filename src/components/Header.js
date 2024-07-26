import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-16 py-2 z-10 flex justify-between">
      <img
        className="w-52"
        src="https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...GJqxFGkB3JwWJqZ0Mwi3oR4URYkK5p+Ot+dERBpAQGghMNc889jyF8Vg=="
        alt="Logo"
      />
      {user && (
        <div className="flex">
          <img
            className="my-auto w-10 h-10"
            alt="userLogo"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 rounded-lg h-10 my-auto mx-2 p-2 text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
