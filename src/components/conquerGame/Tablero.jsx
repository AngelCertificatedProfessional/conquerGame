import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
const Tablero = ({ partida,setCantidadJugadores,agregarDivsTablero,coloring,accion,posicionPiezasJuego}) => {  
  useEffect(() => {
    setCantidadJugadores(partida.cantidadJugadores),
    agregarDivsTablero(),
    coloring()

    if(accion === 3){
      posicionPiezasJuego(partida)
    }

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