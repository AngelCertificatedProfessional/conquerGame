import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';
import { agregarDivsTablero, coloring, setCantidadJugadores } from '../../utils/ConquerGame';
const Tablero = ({ partida}) => {
  
  useEffect(() => {
    setCantidadJugadores(partida.cantidadJugadores)
    agregarDivsTablero()
    coloring()
  }, []);
  
  return (  
    <>
      <div className="juego">
          <ul id="tablero_juego">
          </ul>
      </div>
    </>
  );
};


export default Tablero;