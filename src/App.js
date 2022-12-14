import React, { useState } from "react";
import useWebSocket from "react-use-websocket";

const webSocketURL = "ws://localhost:5000";

const App = () => {
  const [connected, setConnected] = useState(null);
  const [error, setError] = useState(null);
  const { lastMessage, readyState } = useWebSocket(webSocketURL, {
    onOpen: () => setConnected("Connected"),
    shouldReconnect: (closeEvent) => true,
    onError: (errorEvent) => setError("Yes"),
  });
  return (
    <>
      <div>Hello</div>
      <div>Hello</div>
      <div>{lastMessage?.data}</div>
      <div>{connected}</div>
      <div>{error}</div>
      <div>{readyState}</div>
    </>
  );
};

export default App;
