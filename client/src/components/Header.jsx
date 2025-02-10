import React from "react";
import { Upload, Sparkles } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      <div className="max-w-[600px] relative">
        <div className="absolute -top-14 left-0 w-32 h-32 bg-violet-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 -right-10 w-32 h-32 bg-fuchsia-200 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"></div>

        <div className="relative">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Background Removal
          </span>

          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-800 leading-[1.2] tracking-tight">
            Remove the <br className="max-md:hidden" />
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                background
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[0.2em] bg-gradient-to-r from-violet-600/40 to-fuchsia-500/40 blur-sm"></span>
            </span>{" "}
            from <br className="max-md:hidden" /> images for free.
          </h1>

          <p className="mt-8 mb-10 text-[17px] text-gray-600 leading-relaxed max-w-[90%]">
            Transform your photos instantly with our AI technology. Create
            studio-quality images with perfect background removal in seconds.
            Whether it's for your e-commerce products, social media, or
            professional portfolio – achieve flawless results every time.
          </p>

          <div className="flex items-center gap-6">
            <input
              onChange={(e) => removeBg(e.target.files?.[0] || null)}
              type="file"
              accept="image/*"
              id="upload1"
              hidden
            />
            <label
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-violet-600 hover:bg-violet-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-violet-200"
              htmlFor="upload1"
            >
              <Upload className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Upload your image</span>
            </label>
            <p className="text-sm text-gray-500">Supports JPG, PNG & WEBP</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[420px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] relative group">
        <img
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop"
          alt="Portrait of a woman with flowers"
          className="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-[1.02] object-cover aspect-[3/4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Header;
