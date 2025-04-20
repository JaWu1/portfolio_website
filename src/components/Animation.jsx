import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/comp_animated.json";

const AnimationComponent = () => {
  return (
    <div className="flex justify-center items-center pt-24">
      <div className="w-80">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default AnimationComponent;
