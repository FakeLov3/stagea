const CHAT_MESSAGES = "chat:messages";
const CHAT_AUTHOR = "chat:author";

export function getMessages() {
  return JSON.parse(localStorage.getItem(CHAT_MESSAGES));
}

export function storeMessage({ author, message }) {
  const messages = getMessages();

  if (!messages) {
    localStorage.setItem(CHAT_MESSAGES, JSON.stringify([{ author, message }]));
  } else {
    messages.push({ author, message });
    localStorage.setItem(CHAT_MESSAGES, JSON.stringify(messages));
  }
}

export function getAuthor() {
  return localStorage.getItem(CHAT_AUTHOR);
}

export function storeAuthor(author) {
  localStorage.setItem(CHAT_AUTHOR, author);
}
