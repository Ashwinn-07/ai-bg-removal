import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { Scissors, CreditCard } from "lucide-react";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/" className="flex items-center gap-2">
        <Scissors className="w-8 h-8 text-indigo-600" />
        <span className="text-xl font-semibold text-indigo-600">Eraseify</span>
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700"
          >
            <CreditCard className="w-5 h-5 text-gray-600" />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits: {credit}
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hey, {user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-indigo-600 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full cursor-pointer hover:bg-indigo-700 transition-colors duration-300"
        >
          Get Started
          <span>→</span>
        </button>
      )}
    </div>
  );
};

export default NavBar;
