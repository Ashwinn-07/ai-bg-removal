import React from "react";
import { assets } from "../assets/assets";
import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <Link to="/" className="flex items-center gap-2">
        <Scissors className="w-8 h-8 text-indigo-600" />
        <span className="text-xl font-semibold text-indigo-600">Eraseify</span>
      </Link>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @3comma | All right reserved.
      </p>
      <div className="flex gap-1">
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
