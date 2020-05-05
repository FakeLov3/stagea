import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core";
import Rooms from "../../components/Rooms";
import NetworkingDrawer from "../../components/NetworkingDrawer";
import { makeStyles } from "@material-ui/core/styles";
import globoImage from "static/images/sponsors/globo.png";
import epocaImage from "static/images/sponsors/epoca.png";
import shaweeImage from "static/images/sponsors/shawee.png";
import vtexImage from "static/images/sponsors/vtex.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5fb",
  },
  container: {
    flexBasis: 0,
    flexGrow: 1,
    margin: theme.spacing(7),
    backgroundColor: "#f5f5fb",
  },
  titleContainer: {
    marginBottom: "60px",
  },
  card: {
    borderRadius: "15px",
    backgroundColor: "white",
    height: "50vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  cardMedia: {
    width: "70%",
  },
  classContent: {
    fontSize: "0.7em",
  },
  attendeesProgress: {
    display: "inline-block",
    width: "120px",
    height: "5px",
    borderRadius: "25px",
    backgroundColor: "#506CF0",
  },
  attendeesProgressDisabled: {
    display: "inline-block",
    width: "100px",
    height: "5px",
    borderRadius: "25px",
    backgroundColor: "#DBDBDB",
  },
  attendeesTime: {
    display: "inline-block",
    marginLeft: "5px",
    fontSize: "0.7em",
    color: "#979797",
  },
  justified: {
    justifyContent: "space-around",
  },
  globo: {
    width: "30%",
  }
}));

function SponsorsArea() {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid container className={classes.titleContainer}>
        <Typography variant="h5">PEGN Expo 2020</Typography>
      </Grid>
      <Grid container spacing={10} className={classes.justified}>
        <Grid item xs={5}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia, classes.globo}
            component="img"
            src={globoImage}
            />
            <CardContent className={classes.cardContent}>
            <Typography variant="body2">
                <strong>Globo</strong>
            </Typography>
            <Typography variant="body2">
                Rooms that randomly put together 4 people interested in UX/UI
                Design. Interested? Enter now!
            </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            component="img"
            src={epocaImage}
            />
            <CardContent>
            <Typography variant="body2">
                <strong>Época Negócios</strong>
            </Typography>
            <Typography variant="body2">
                40% disccount on subscription
            </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
          <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            component="img"
            src={shaweeImage}
            />
            <CardContent className={classes.cardContent}>
            <Typography variant="body2">
                <strong>Shawee</strong>
            </Typography>
            <Typography variant="body2">
                Join us and drink a cofee
            </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                component="img"
                src={vtexImage}
                />
                <CardContent>
                <Typography variant="body2">
                    <strong>Vtex</strong>
                </Typography>
                <Typography variant="body2">
                    Rooms that randomly put together 4 people interested in UX/UI
                    Design. Interested? Enter now!
                </Typography>
                </CardContent>
            </Card>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default function Sponsors() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Rooms />
      <SponsorsArea />
      <NetworkingDrawer />
    </Grid>
  );
}
