import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/generales/Layout';
import Home from './../containers/Home';
import Login from './../containers/Login';
import ConquerGameOpciones from '../containers/ConquerGameOpciones';
import ConquerGame from '../containers/ConquerGame';
import Usuario from './../containers/Usuario';
// import Observacion from './../containers/Observacion';

import {env} from "../config/config";
import Error404 from './../containers/Error404';
import { io } from "socket.io-client";
// import AppConText from './../context/AppContext';
// import GenerarWord from './../containers/GenerarWord';
// import Actualizacion from './../containers/Actualizacion';
// import GenerarVariant from './../containers/GenerarVariant';
// import EstructuraJSON from './../containers/EstructuraJSON';
// import Eventos from './../containers/Eventos';
// import GenerarEquipoModelo from '../containers/GenerarEquipoModelo';

const socket = io.connect(env.apiLiutsVideoURL,{
  // "force new connection" : true,
  // "reconnectionAttempts": "Infinity", 
  // "timeout" : 10000,                  
  "transports" : ["websocket"],
  // withCredentials:true,
  // extraHeaders:{
  //   "my-custom-header": "abcd"
  // }
});

const App = () => {

  return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/ConquerGameOpciones" element={<ConquerGameOpciones/>} />
          <Route exact path="/ConquerGame/:numeroPartida" element={<ConquerGame socket={socket}/>} />
          <Route exact path="/usuario" element={<Usuario/>} />
          {/* 
          <Route exact path="/observacion" component={Observacion} />
          <Route exact path="/actualizacion" component={Actualizacion} />
          <Route exact path="/generarWord" component={GenerarWord} />
          <Route exact path="/generarVariant" component={GenerarVariant} />
          <Route exact path="/eventos" component={Eventos} />
          <Route exact path="/generarEquipoModelo" component={GenerarEquipoModelo} />
          <Route exact path="/estructuraJSON" component={EstructuraJSON} /> */}
          <Route element={Error404} />
        </Routes>
      </Layout>
  );
};

export default App;
