import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import avatar_1 from "static/images/avatar/1.png";
import { ReactComponent as SendIconSvg } from "static/svgs/send_icon.svg";
import {
  storeMessage,
  getMessages,
  getAuthor,
  storeAuthor,
} from "storage/chat";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  tabRoot: {
    flexGrow: 1,
    minWidth: "50px",
    textTransform: "none",
    fontWeight: "bold",
  },
  paperRoot: {
    marginTop: "45px",
    marginLeft: "12px",
    width: "247px",
    height: "391px",
  },
  tabs: {
    backgroundColor: "#F5F5FB",
  },
  tabPanel: {
    backgroundColor: "#F2F2F2",
    position: "relative",
    height: "92%",
  },
  tab__root: {
    "&:hover": {
      color: "#506CF0",
      opacity: 1,
    },
  },
  tab__selected: {
    // TODO: implement brackets exhibition on selected
    color: "#506CF0",
  },
  chatContainer: {
    overflow: "auto",
    height: "281px",
  },
  chatMessage: {
    padding: 0,
    overflowWrap: "break-word",
  },
  form: {
    position: "absolute",
    bottom: 5,
  },
  formTextField: {
    height: "100%",
    width: "80%"
  },
  formButton: {
    paddingLeft: "5px"
  }
}));

function GeneralChat() {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const ChatMessage = ({ author, message }) => {
    return (
      <ListItem alignItems="flex-start" className={classes.chatMessage}>
        <ListItemAvatar>
          <Avatar alt="You" src={avatar_1} />
        </ListItemAvatar>
        <ListItemText primary={author} secondary={message} />
      </ListItem>
    );
  };

  const ChatMessageList = () => {
    const messages = getMessages();
    return messages
      ? messages.map(({ author, message }) => (
          <ChatMessage author={author} message={message} />
        ))
      : null;
  };

  const ChatContainer = ({ children }) => {
    return (
      <List className={classes.chatContainer} id="chat-container">
        {children}
      </List>
    );
  };

  const pushMessage = ({ author, message }) => {
    storeMessage({ author, message });
  };

  const onTextChange = (e) => {
    // TODO: add debounce here
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (message) {
      pushMessage({ author, message });
      setMessage("");
    }
  };

  useEffect(() => {
    // TODO: find better place for this store
    storeAuthor("You (Dev)");
    setAuthor(getAuthor());
  }, []);

  return (
    <React.Fragment>
      <ChatContainer>
        <ChatMessageList />
      </ChatContainer>
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          id="chat-message"
          label="Type your message..."
          value={message}
          onChange={onTextChange}
          size="small"
          className={classes.formTextField}
        />
        <IconButton className={classes.formButton} aria-label="send" type="submit">
          <SendIconSvg />
        </IconButton>
      </form>
    </React.Fragment>
  );
}

function GroupChat() {
  return <>Group</>;
}

export default function Chat() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paperRoot}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="transparent"
      >
        <Tab
          label="Chat"
          className={classes.tabRoot}
          classes={{ root: classes.tab__root, selected: classes.tab__selected }}
        />
        <Tab label="Groups" id="tab-1" className={classes.tabRoot} />
      </Tabs>

      {/*Chat content*/}
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <GeneralChat />
      </TabPanel>

      {/*Groups content*/}
      <TabPanel value={value} index={1}>
        <GroupChat />
      </TabPanel>
    </Paper>
  );
}
