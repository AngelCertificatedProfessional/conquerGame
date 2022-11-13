import React,{useEffect} from 'react';
const Tablero = ({ partida,setCantidadJugadores,agregarDivsTablero,coloring,accion,posicionPiezasJuego,setPartida,posicionPiezaJugador,usuario,setBloquearOpciones,limpiarVariables}) => {  
  useEffect(() => {
    limpiarVariables()
    setCantidadJugadores(partida.cantidadJugadores)
    agregarDivsTablero()
    coloring()
    if(accion === 2){
      const nValor = partida.jugadores.findIndex(obj => obj.usuario===usuario.usuario && obj.hasOwnProperty('posicionPiezasJugador'));
      console.log(nValor)
      if(nValor !== -1){
          posicionPiezaJugador(partida.jugadores[nValor])
          setBloquearOpciones(true)
        }
    }
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