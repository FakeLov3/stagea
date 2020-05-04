import React from "react";
import StageaAnimated from "./icons/StageaAnimated";

export default function Menu() {
  return (
    <article>
      <header className="menu">
        <StageaAnimated />
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
