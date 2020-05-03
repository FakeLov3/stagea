import React from "react";
import Lottie from "react-lottie";
import AnimatedLVL from "static/animation/somente_logo.json";

export default function Menu() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimatedLVL,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <article>
      <header className="menu">
        <h1 className="logo">
          <Lottie options={defaultOptions} height={45} width={260} />
        </h1>
        <div className="menu__sub">
          <a href="#oi">Use cases</a>
          <a href="#oi">How it works</a>
          <a href="#oi">Pricing</a>
        </div>
        <div className="menu__login">
          <a href="#oi">Sign in</a>
          <a className="b__blu__type" href="/platform">
            Try for free
          </a>
        </div>
      </header>
    </article>
  );
}
