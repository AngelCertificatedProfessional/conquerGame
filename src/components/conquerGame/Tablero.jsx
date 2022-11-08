import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';
const Tablero = ({ partida,setCantidadJugadores,agregarDivsTablero,coloring}) => {  
  useEffect(() => {
    setCantidadJugadores(partida.cantidadJugadores),
    agregarDivsTablero(),
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