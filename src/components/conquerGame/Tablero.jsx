import React,{useEffect} from 'react';
const Tablero = ({ partida,setCantidadJugadores,agregarDivsTablero,coloring,accion,posicionPiezasJuego,setPartida}) => {  
  useEffect(() => {
    setCantidadJugadores(partida.cantidadJugadores)
    agregarDivsTablero()
    coloring()
    if(accion === 3){
      posicionPiezasJuego(partida)
      setPartida(partida)
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