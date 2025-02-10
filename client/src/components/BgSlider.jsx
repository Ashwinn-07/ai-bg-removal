import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Wand2 } from "lucide-react";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
          <div className="absolute inset-0 -top-[150%] mx-auto w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-violet-600/30 rounded-full blur-[120px] opacity-20"></div>
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-100 text-violet-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Wand2 className="w-3 h-3 sm:w-4 sm:h-4" />
            See it in action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Remove Background With{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                High Quality
              </span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[0.15em] sm:h-[0.2em] bg-gradient-to-r from-violet-600/40 to-fuchsia-500/40 blur-sm"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-4">
            Drag the slider to see the difference. Our AI precisely detects and
            removes backgrounds while preserving fine details.
          </p>
        </div>

        <div className="relative w-full max-w-[280px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] aspect-[4/3] overflow-hidden mx-auto rounded-lg sm:rounded-xl shadow-lg">
          <img
            src={assets.image_w_bg}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
            alt="Original image"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={assets.image_wo_bg}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            alt="Image without background"
          />

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"></div>
            </div>
          </div>

          <input
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize"
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
          />
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 mt-6 sm:mt-8">
          <div className="text-center">
            <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
              Original
            </div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-violet-600 rounded-full mx-auto"></div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
              No Background
            </div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-fuchsia-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgSlider;
