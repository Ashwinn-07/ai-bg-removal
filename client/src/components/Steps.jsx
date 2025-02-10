import React from "react";
import { Upload, Wand2, Download } from "lucide-react";

const Steps = () => {
  const steps = [
    {
      icon: <Upload className="w-9 h-9 text-violet-600" />,
      title: "Select Your Image",
      description:
        "Drop your image here or click to browse. Support for JPG, PNG and other common formats.",
    },
    {
      icon: <Wand2 className="w-9 h-9 text-violet-600" />,
      title: "AI Magic Happens",
      description:
        "Our advanced AI instantly detects and removes any background, leaving you with a perfect result.",
    },
    {
      icon: <Download className="w-9 h-9 text-violet-600" />,
      title: "Get Your Result",
      description:
        "Download your image in high resolution. Perfect for products, portraits, or any creative project.",
    },
  ];

  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
        Transform your images in <br className="sm:hidden" />
        three simple steps
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 xl:mt-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white border border-gray-100 shadow-sm hover:shadow-md p-7 rounded-xl hover:scale-105 transition-all duration-500"
          >
            <div className="flex-shrink-0 p-2 bg-violet-50 rounded-lg">
              {step.icon}
            </div>
            <div>
              <p className="text-xl font-medium text-gray-800">{step.title}</p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
