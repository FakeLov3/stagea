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
import sessionsUIImage from "static/images/sessions/ui.png";
import sessionsUXImage from "static/images/sessions/ux.png";
import sessionsFirebaseImage from "static/images/sessions/firebase.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5fb"
  },
  container: {
    flexBasis: 0,
    flexGrow: 1,
    margin: theme.spacing(7),
    backgroundColor: "#f5f5fb",
    height: "100%"
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
    width: "120px",
    height: "5px",
    borderRadius: "25px",
    backgroundColor: "#DBDBDB",
  },
  attendeesTime: {
    display: "inline-block",
    marginLeft: "10px",
    fontSize: "0.7em",
    color: "#979797"
  }
}));

function SessionsFragment() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container className={classes.titleContainer}>
        <Typography variant="h5">PEGN Expo 2020</Typography>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              src={sessionsUIImage}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2">
                <strong>Improve your UI skills</strong>
              </Typography>
              <Typography variant="body2">
                <strong>Speaker:</strong> Gabriela Lima
              </Typography>
              <Typography variant="body2">
                <strong>Attendees:</strong> 150/150
              </Typography>
              <Box>
                <Box className={classes.attendeesProgress} />
                <Typography className={classes.attendeesTime} variant="body2">
                  5 min left
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              src={sessionsFirebaseImage}
            />
            <CardContent>
              <Typography variant="body2">
                <strong>Using Firebase with Ionic</strong>
              </Typography>
              <Typography variant="body2">
                <strong>Speaker:</strong> Diego Buzanello
              </Typography>
              <Typography variant="body2">
                <strong>Attendees:</strong> 150/150
              </Typography>
              <Box>
                <Box className={classes.attendeesProgress} />
                <Typography className={classes.attendeesTime} variant="body2">
                  5 min left
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              src={sessionsUXImage}
            />
            <CardContent>
              <Typography variant="body2">
                <strong>UX is the new black</strong>
              </Typography>
              <Typography variant="body2">
                <strong>Speaker:</strong> Mauro Cortella
              </Typography>
              <Typography variant="body2">
                <strong>Attendees:</strong> 0/150
              </Typography>
              <Box>
                <Box className={classes.attendeesProgressDisabled} />
                <Typography className={classes.attendeesTime} variant="body2">
                  5 min left
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Sessions() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Rooms />
      <SessionsFragment />
      <NetworkingDrawer />
    </Grid>
  );
}
