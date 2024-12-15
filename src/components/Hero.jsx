import React, { Suspense } from "react";
import sampleArcs from "../data/SampleArcs";
import globeConfig from "../data/GlobeConfig";

const World = React.lazy(() => import("./ui/globe"));

export function Earth() {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Suspense>
    </div>
  );
}

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center mt-20">
      <div className="space-y-6">
      <div className="text-7xl text-white font-bold">
        We are,
      </div>
        <div className="">
          <img 
            src="logo_withoutbg.png" 
            alt="Description" 
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
      
      
      <div className="h-[40rem] w-full relative">
        <div className="absolute w-full h-full">
          <Earth />
        </div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
      </div>
    </div>
  );
}

export default Hero;