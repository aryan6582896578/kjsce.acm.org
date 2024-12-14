import React, { Suspense } from "react";
import sampleArcs from "../data/SampleArcs";
import globeConfig from "../data/GlobeConfig";


const World = React.lazy(() => import("./ui/globe"));

export function Earth() {
  return (
    (<div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <World data={sampleArcs} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>)
  );
}
