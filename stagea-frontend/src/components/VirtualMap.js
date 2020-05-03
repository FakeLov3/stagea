import React from "react";
import { ReactComponent as Vmap } from "static/svgs/map.svg";
import PeqGNC from "static/svgs/peqgnc.svg";
import Schedule from "../components/schedule";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    borderRadius: "19px",
    color: "rgba(2, 2, 45, 0.9)",
    fontSize: "0.8em",
    fontWeight: "450",
    lineHeight: "1.6em",
    margin: "0 4vh",
  }
}))

export default function VMaps() {
  const classes = useStyles();

  return (
    <div className="vmaps">
      <img src={PeqGNC} />
      <div className={classes.content}>
        PEGN Expo is America's BIGGEST & most anticipated business-to-business
        networking & educational event, trade show & conference for business
        owners, entrepreneurs, start-ups, decision-makers or anyone who works or
        is interested in starting a small business.
      </div>
      <Vmap />
      <Schedule />
    </div>
  );
}
