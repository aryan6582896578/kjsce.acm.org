import React, { Suspense, useRef } from "react";
import { WavyBackground } from "./ui/wavy-background";
// import sampleArcs from "../data/SampleArcs";
// import globeConfig from "../data/GlobeConfig";
import "./styles/Hero.css"

// const World = React.lazy(() => import("./ui/globe"));

function Hero() {

  const modelRef = useRef();
  return (
    <WavyBackground className="max-w-7xl mx-auto px-4 py-16 sm:mt-64 md:mt-96 mt-72 lg:mt-0">

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-0 items-center">
        {/* Left Side: Text Content */}
        <div className="flex absolute top-0 left-0 w-full">
        {/* <div className="glow"></div> */}
        </div>
        <div className="text-white text-center lg:text-left">
          <div className="flex justify-center items-center">
            <img className="w-52 md:w-44" src="logo_withoutbg.png" alt="" />
          </div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb:mb-6 md:mt-2 mt-8 opacity-90">
            We are KJSCE - <span className="text-blue-300 opacity-100">ACM</span>
          </div>


          <div className="mt-8">
            <p className="text-xl md:text-2xl font-medium">
              Curious to find out what we do?
            </p>
            <p className="text-gray-300 text-xs mt-2">Scroll down to see</p>
          </div>
        </div>

        {/* Right Side: Globe */}
        <div className="relative lg:h-[35rem] md:h-[30rem] h-[20rem] w-full">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
            <model-viewer src="/model/Earth.glb"
                  ios-src="/model/Earth.usdz"
                  poster="/assets/01EarthModel.png"
                  alt="A 3D model of an Earth"
                  style = {{width: "100%", height: "100%"}}
                  camera-controls
                  auto-rotate ar
                  disable-zoom
                  disable-pan
                  exposure="0.8"
                  shadow-intensity="1"
                  ref={(ref) => {
                    modelRef.current = ref;
                  }}>
            </model-viewer>
          </Suspense>
          <div className="absolute top-0 md:hidden h-[16rem] w-full bg-transparent"/>

        </div>
      </div>
    </WavyBackground>
  );
}

export default Hero;