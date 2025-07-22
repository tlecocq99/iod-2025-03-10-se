const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

//Store connected users and their nicknames
const users = new Map();
const typingUsers = new Set();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  //Broadcast to everyone when a user connects
  socket.broadcast.emit("user connected", "A user connected");

  //Send current online users count
  io.emit("users online", users.size + 1); // +1 for the newly connected user

  //Handle setting nickname
  socket.on("set nickname", (nickname) => {
    users.set(socket.id, nickname);
    socket.emit("nickname set", nickname);
    //Broadcast updated user list
    io.emit("users online", users.size);
    io.emit("user list", Array.from(users.values()));
  });

  //Handle chat messages
  socket.on("chat message", (data) => {
    const nickname = users.get(socket.id) || "Anonymous";
    const messageData = {
      nickname: nickname,
      message: data.message,
      timestamp: new Date().toLocaleTimeString(),
    };

    //send to all users including sender
    io.emit("chat message", messageData);
  });

  //Handle indicating a user is typing
  socket.on("typing", () => {
    const nickname = users.get(socket.id) || "Anonymous";
    socket.broadcast.emit("user typing", nickname);
  });

  //Handle indicating user stopped typing
  socket.on("stop typing", () => {
    const nickname = users.get(socket.id) || "Anonymous";
    socket.broadcast.emit("user stop typing", nickname);
  });

  //Handle when a user disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    const nickname = users.get(socket.id);
    users.delete(socket.id);
    typingUsers.delete(socket.id);

    //Broadcast to everyone remaining when a user disconnects
    socket.broadcast.emit(
      "user disconnected",
      `${nickname || "A user"} has disconnected`
    );
    io.emit("users online", users.size);
    io.emit("user list", Array.from(users.values()));
  });
});

//To chat with other devices on the same network as your, add in your IPV4 address after the comma following '3000'
server.listen(3000, () => {
  console.log("listening on *:3000");
  //Just for fun - if you wanted to access from other devices on the same network to have a chat :)
  console.log("Access from other devices at: http://[PUT_YOUR_IP_HERE]:3000");
});
