import React from "react";
import { Navigate,BrowserRouter, Route, Routes } from "react-router-dom";
import {Home,Login,ConquerGameOpciones,ConquerGame,Usuario,Mejoras} from "./../containers";
import { env } from "../config/config";
import { io } from "socket.io-client";
import Navigation from "../components/generales/Navigation";
const socket = io.connect(env.apiLiutsVideoURL, {
  // "force new connection" : true,
  // "reconnectionAttempts": "Infinity",
  // "timeout" : 10000,
  transports: ["websocket"],
  // withCredentials:true,
  // extraHeaders:{
  //   "my-custom-header": "abcd"
  // }
});

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/conquerGameOpciones"
          element={<ConquerGameOpciones />}
        />
        <Route
          exact
          path="/conquerGame/:numeroPartida"
          element={<ConquerGame socket={socket} />}
        />
        <Route exact path="/usuario" element={<Usuario />} />
        <Route exact path="/mejoras" element={<Mejoras />} />
        <Route path="/*" element={<Navigate to="/"/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
