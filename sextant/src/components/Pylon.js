import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useState, useEffect } from "react";
const client = new W3CWebSocket("ws://localhost:55455");
const Pylon = () => {
  const [latency, setLatency] = useState(null);
  useEffect(() => {
    client.onmessage = (message) => {
      let calclatency = new Date().getTime() - message.data;
      setLatency(calclatency);
    };
  }, []);
  return (
    <div className="latency-card">
      <h2>Latency:</h2>
      {latency && <h3>{latency}</h3>}
    </div>
  );
};
export default Pylon;
