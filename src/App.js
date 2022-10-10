import io from "socket.io-client";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Messenger from "./Pages/Messenger/Messenger.jsx";
import RequireUser from './Authentication/RequireUser'
const socket = io.connect("http://localhost:5000");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* user protection routes */}
        <Route element={<RequireUser />}>
          <Route path="/messenger" element={<Messenger />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
