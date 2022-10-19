import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/generales/Layout';
import Home from './../containers/Home';
import Login from './../containers/Login';
// import Usuario from './../containers/Usuario';
// import Observacion from './../containers/Observacion';
import Error404 from './../containers/Error404';
// import AppConText from './../context/AppContext';
// import GenerarWord from './../containers/GenerarWord';
// import Actualizacion from './../containers/Actualizacion';
// import GenerarVariant from './../containers/GenerarVariant';
// import EstructuraJSON from './../containers/EstructuraJSON';
// import Eventos from './../containers/Eventos';
// import GenerarEquipoModelo from '../containers/GenerarEquipoModelo';

const App = () => {

  return (
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            {/* <Route exact path="/usuario" component={Usuario} />
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
      </HashRouter>
  );
};

export default App;
