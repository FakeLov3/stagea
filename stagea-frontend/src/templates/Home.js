import React from "react";
import Menu from "components/Menu";
import NextLVL from "static/svgs/nextlvl.svg";
import "static/styles/css/home.css";

export default function Home() {
  return [
    <Menu />,
    <div className="home">
      <div className="home__animation">
        <img alt="the next level event platform" src={NextLVL} />
      </div>
      <div className="home__content">
        <p>
          Your online event platform that combines the experience of the
          <br />
          in-person event with the advantages of the virtual.
        </p>
      </div>
      <button className="b__blu__type">
        <span>Try for free</span>
      </button>
    </div>,
  ];
}
