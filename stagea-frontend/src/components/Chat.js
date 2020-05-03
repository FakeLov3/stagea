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
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
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
  },
}));

function GeneralChat() {
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  const ChatMessage = ({ author, message }) => {
    return (
      <ListItem alignItems="flex-start">
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
    return <List id="chat-container">{children}</List>;
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
      <form onSubmit={onSubmit}>
        <TextField
          id="chat-message"
          label="Type your message..."
          value={message}
          onChange={onTextChange}
        />
        <IconButton aria-label="send" type="submit">
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
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Paper className={classes.tabRoot}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Chat" id="tab-0" />
        <Tab label="Groups" id="tab-1" />
      </Tabs>

      {/*Chat content*/}
      <TabPanel value={value} index={0}>
        <GeneralChat />
      </TabPanel>

      {/*Groups content*/}
      <TabPanel value={value} index={1}>
        <GroupChat />
      </TabPanel>
    </Paper>
  );
}
