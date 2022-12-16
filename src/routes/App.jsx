import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/generales/Layout";
import Home from "./../containers/Home";
import Login from "./../containers/Login";
import ConquerGameOpciones from "../containers/ConquerGameOpciones";
import ConquerGame from "../containers/ConquerGame";
import Usuario from "../containers/Usuario";
import Mejoras from "./../containers/Mejoras";
import { env } from "../config/config";
import Error404 from "./../containers/Error404";
import { io } from "socket.io-client";
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
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/ConquerGameOpciones"
            element={<ConquerGameOpciones />}
          />
          <Route
            exact
            path="/ConquerGame/:numeroPartida"
            element={<ConquerGame socket={socket} />}
          />
          <Route exact path="/usuario" element={<Usuario />} />
          <Route exact path="/mejoras" element={<Mejoras />} />
          <Route element={Error404} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
