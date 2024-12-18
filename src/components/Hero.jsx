import React, { Suspense } from "react";
import { WavyBackground } from "./ui/wavy-background";
import sampleArcs from "../data/SampleArcs";
import globeConfig from "../data/GlobeConfig";

const World = React.lazy(() => import("./ui/globe"));

function Hero() {
  return (
    <WavyBackground className="max-w-7xl mx-auto px-4 py-16 mt-64 md:mt-0">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div className="text-white text-center lg:text-left">
          <div className="flex justify-center items-center">
            <img className="w-52 md:w-44" src="logo_withoutbg.png" alt="" />
          </div>
          <div className="text-4xl md:text-9xl lg:text-6xl font-bold mb-6">
            We are KJSCE - <span className="text-blue-800">ACM</span>
          </div>


          <div className="mt-8">
            <p className="text-xl md:text-2xl font-medium">
              Curious to find out what we do?
            </p>
            <p className="text-gray-300 text-xs mt-2">Scroll down to see</p>
          </div>
        </div>

        {/* Right Side: Globe */}
        <div className="relative lg:h-[40rem] md:h-[30rem] h-[20rem] w-full">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <World data={sampleArcs} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>
    </WavyBackground>
  );
}

export default Hero;