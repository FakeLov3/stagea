import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import Rooms from "../../components/Rooms";
import NetworkingDrawer from "../../components/NetworkingDrawer";
import { makeStyles } from "@material-ui/core/styles";
import speakerVideoImage from "static/images/stage/speaker_video.png";

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
  },
  cardMedia: {
    borderRadius: "15px",
  },
  classContent: {
    fontSize: "0.7em",
  },
  img: {
    width: "100%",
  },
}));

function StageFragment() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container} justify="center">
      <Grid className={classes.titleContainer} xs={10}>
        <Typography variant="h5">PEGN Expo 2020</Typography>
      </Grid>

      <Grid item xs={10}>
        <img className={classes.img} src={speakerVideoImage} />
      </Grid>

      <Grid item xs={5}>
        <Card className={classes.card}>
          <CardContent>
            <Typography>Learn Figma</Typography>
            <Box>
              <img src="" />
              <Typography variant="body1">UX Designer</Typography>
              <Typography variant="body2">Stagea</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card className={classes.card}>
          <CardContent>
            <Typography>Matthew Takenesse</Typography>
            <Box>
              <img src="" />
              <Typography variant="body1">From NY</Typography>
              <Typography variant="body2">takenessma.co</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1">PDF/Figma kit</Typography>
            <Typography variant="body2">450mb</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1">Slides/Figma</Typography>
            <Typography variant="body2">150mb</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card className={classes.card}>
          <CardMedia></CardMedia>
          <CardContent>
            <Typography variant="body1">Invite me to chat</Typography>
            <Typography variant="body2">matthew@stagea.com</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default function Stage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Rooms />
      <StageFragment />
      <NetworkingDrawer />
    </Grid>
  );
}
