import React from "react";
import Menu from "components/Menu";
import NextLVL from "static/svgs/nextlvl.svg";
import "static/styles/css/home.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="wrapper">
      <Menu />
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
          <span>
            <a className={classes.button} href="/platform">
              Try for free
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}
