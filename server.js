const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const server = require("http").createServer(app);
const ws = require("ws");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const wss = new ws.Server({ server: server });

const clients = [];

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/static")));
app.use(express.static(path.join(__dirname)));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

wss.on("connection", (newClient) => {
  clients.push(newClient);
  newClient.on("message", (msg) => {
    msg = JSON.parse(msg);

    switch (msg.event) {
      case "connect":
        sendMessage(msg);
        break;
      case "message":
        sendMessage(msg);
        break;
      default:
        return;
    }
  });
  newClient.on("close", (code, reason) => {
    // wss.clients.forEach((client) => {
    //   client.send(JSON.stringify(x));
    // });

    const index = clients.findIndex((client) => client === newClient);
    clients.splice(index, 1);
  });
});

const sendMessage = (message) => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
};

app.get("/", (req, res) => res.send("hello world!"));

server.listen(PORT, () => {
  console.log(`Сервер запустился на порту ${PORT}`);
});
