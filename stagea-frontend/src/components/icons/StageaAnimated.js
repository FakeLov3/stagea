import React from "react";
import Lottie from "react-lottie";
import AnimatedLVL from "static/animation/somente_logo.json";

export default function StageaAnimated() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimatedLVL,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <h1 className="logo">
      <Lottie options={defaultOptions} height={45} width={260} />
    </h1>
  );
}
