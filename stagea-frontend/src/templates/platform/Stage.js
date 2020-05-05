import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from "@material-ui/core";
import Rooms from "../../components/Rooms";
import NetworkingDrawer from "../../components/NetworkingDrawer";
import { makeStyles } from "@material-ui/core/styles";
import speakerVideoImage from "static/images/stage/speaker_video.png";
import speakerThumb from "static/images/stage/speaker_thumbnail.png";
import figmaKitImage from "static/images/stage/figma_kit.png";
import figmaSlideImage from 'static/images/stage/figma_slide.png'
import inviteChatImage from 'static/images/stage/invite_chat.png'

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
    maxWidth: "80%",
  },
  card: {
    borderRadius: "15px",
    backgroundColor: "white",
  },
  cardTitle: {
    color: "#4b4b69",
    fontSize: "1.5em",
  },
  cardMedia: {
    borderRadius: "15px",
  },
  cardContent: {
    padding: "40px",
  },
  cardContentTag: {
    margin: "20px 0",
  },
  cardContentDetail: {
    fontSize: "0.7em",
    color: "#4b4b69",
  },
  cardContentDetailTitle: {
    fontSize: "1.2em",
    margin: "0 20px",
  },
  cardContentDetailSubtitle: {
    fontSize: "0.8em",
    margin: "0 20px",
    color: "#596cf0",
  },
  attachmentContainer: {
    display: "inline-flex",
    width: "100%"
  },
  attachmentMedia: {
    width: "170px",
  },
  attachmentTextContainer: {
    margin: theme.spacing(2),
  },
  img: {
    width: "100%",
  },
  imgThumb: {
    width: "20%",
  },
  previewButton: {
    backgroundColor: "#7d92f4",
    color: "white",
    textTransform: "none",
    width: "100px"
  },
  downloadButton: {
    backgroundColor: "#506cf0",
    color: "white",
    textTransform: "none",
    width: "100px"
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
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle}>Learn Figma</Typography>
            <Box className={classes.cardContentTag} style={{ display: "flex" }}>
              <img
                className={classes.imgThumb}
                src={speakerThumb}
                alt="speaker thumbnail"
              />
              <Box>
                <Typography
                  className={classes.cardContentDetailTitle}
                  variant="body1"
                >
                  UX Designer
                </Typography>
                <Typography
                  className={classes.cardContentDetailSubtitle}
                  variant="body2"
                >
                  Stagea
                </Typography>
              </Box>
            </Box>
            <Typography className={classes.cardContentDetail} variant="body2">
              Jump in and learn Figma as we build something new every week, drop
              tips and tricks, with live Q&A and chat as we go!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardTitle}>
              Matthew Takenesse
            </Typography>
            <Box className={classes.cardContentTag} style={{ display: "flex" }}>
              <img
                className={classes.imgThumb}
                src={speakerThumb}
                alt="speaker thumbnail"
              />
              <Box>
                <Typography
                  className={classes.cardContentDetailTitle}
                  variant="body1"
                >
                  From NY
                </Typography>
                <Typography
                  className={classes.cardContentDetailSubtitle}
                  variant="body2"
                >
                  takenessma.co
                </Typography>
              </Box>
            </Box>
            <Typography className={classes.cardContentDetail} variant="body2">
              Advocate at Figma, use Auto Layout and other features to speed
              workflows up for their fellow designers and non-designers.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card
          className={classes.attachmentContainer}
          classes={{ root: classes.card }}
        >
          <CardMedia
            className={classes.attachmentMedia}
            component="img"
            image={figmaKitImage}
          />
          <CardContent classes={{root: classes.attachmentTextContainer}}>
            <Typography variant="body1">PDF/Figma kit</Typography>
            <Typography variant="body2">450mb</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.previewButton}>Preview</Button>
            <Button className={classes.downloadButton}>Download</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card
          className={classes.attachmentContainer}
          classes={{ root: classes.card }}
        >
          <CardMedia className={classes.attachmentMedia} component="img" image={figmaSlideImage} />
          <CardContent classes={{root: classes.attachmentTextContainer}}>
            <Typography variant="body1">Slides/Figma</Typography>
            <Typography variant="body2">150mb</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.previewButton}>Preview</Button>
            <Button className={classes.downloadButton}>Download</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={10}>
        <Card
          className={classes.attachmentContainer}
          classes={{ root: classes.card }}
        >
          <CardMedia className={classes.attachmentMedia} component="img" image={inviteChatImage} />
          <CardContent classes={{root: classes.attachmentTextContainer}}>
            <Typography variant="body1">Invite me to chat</Typography>
            <Typography variant="body2">matthew@stagea.com</Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.previewButton}>Preview</Button>
            <Button className={classes.downloadButton}>Download</Button>
          </CardActions>
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
