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
import karaokeImage from "static/images/connect/karaoke.png";
import devImage from "static/images/connect/devs.png";
import introvertImage from "static/images/connect/introvert.png";
import justChatImage from "static/images/connect/just_chat.png";
import uxuiImage from "static/images/connect/uxui.png";
import yogaImage from "static/images/connect/yoga.png";
import businessImage from "static/images/connect/business.png";

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
}));

function ConnectFragment() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container className={classes.titleContainer}>
        <Typography variant="h5">PEGN Expo 2020</Typography>
      </Grid>
      <Grid container spacing={7}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={karaokeImage}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="body2">
                  <strong>Karaoke Lounge</strong>
                </Typography>
                <Typography variant="body2">
                  <strong>Brought to you by:</strong> JAM
                </Typography>
                <Typography variant="body2">
                  <strong>Attendees:</strong> 200/200
                </Typography>
                <Box>
                  <Box className={classes.attendeesProgress} />
                  <Typography className={classes.attendeesTime} variant="body2">
                    5 min left
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={introvertImage}
              />
              <CardContent>
                <Typography variant="body2">
                  <strong>For introverts only</strong>
                </Typography>
                <Typography variant="body2">
                  Rooms that randomly put together 4 introverts. Don't know how
                  to start conversations? That's ok, nobody here does. Just be
                  yourself.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={yogaImage}
              />
              <CardContent>
                <Typography variant="body2">
                  <strong>Yoga Class</strong>
                </Typography>
                <Typography variant="body2">
                  <strong>Brought to you by:</strong> ROUND
                </Typography>
                <Typography variant="body2">
                  <strong>Attendees:</strong> 0/100
                </Typography>
                <Box>
                  <Box className={classes.attendeesProgressDisabled} />
                  <Typography className={classes.attendeesTime} variant="body2">
                    Starts in 10 min
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={uxuiImage}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="body2">
                  <strong>UX/UI</strong>
                </Typography>
                <Typography variant="body2">
                  Rooms that randomly put together 4 people interested in UX/UI
                  Design. Interested? Enter now!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={devImage}
              />
              <CardContent>
                <Typography variant="body2">
                  <strong>Devs</strong>
                </Typography>
                <Typography variant="body2">
                  Rooms that randomly put together 4 people interested in
                  programming. Join now!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={businessImage}
              />
              <CardContent>
                <Typography variant="body2">
                  <strong>Business black</strong>
                </Typography>
                <Typography variant="body2">
                  Now, if you are interested in business, that's the room for
                  you. Come on in and share your knowledge with other!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                src={justChatImage}
              />
              <CardContent>
                <Typography variant="body2">
                  <strong>Just chat</strong>
                </Typography>
                <Typography variant="body2">
                  Just want to chat about random things? We've got you covered,
                  too! Join others now!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Connect() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Rooms />
      <ConnectFragment />
      <NetworkingDrawer />
    </Grid>
  );
}
