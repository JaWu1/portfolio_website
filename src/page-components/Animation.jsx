import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/comp_animated.json";

const AnimationComponent = () => {
  return (
    <div className="relative flex justify-center items-center pt-24 h-[500px] overflow-hidden">
      {/* Rain effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute top-[-10%] w-px h-8 bg-white opacity-30 animate-raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Lottie animation */}
      <div className="w-80 z-10">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default AnimationComponent;
