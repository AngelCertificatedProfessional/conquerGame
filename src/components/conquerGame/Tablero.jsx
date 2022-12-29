import React, { useEffect } from "react";
const Tablero = ({
  partida,
  agregarDivsTablero,
  coloring,
  accion,
  posicionPiezasJuego,
  setPartida,
  posicionPiezaJugador,
  usuario,
  setBloquearOpciones,
  indicarSiguienteJugador,
  conometro,
  posicionPiezaJuegoConfiguracion,
  turnoUsuario
}) => {
  useEffect(() => {
    setPartida(partida);
    agregarDivsTablero();
    coloring(partida.tipoJuego);
    if (accion === 2) {
      const nValor = partida.jugadores.findIndex(
        (obj) =>
          obj.usuario === usuario.usuario &&
          obj.hasOwnProperty("posicionPiezasJugador")
      );
      //esta condicion es para pintar las piezas del jugador que ya dio aceptar
      console.log('turnoUsuario')
      console.log(turnoUsuario)
      if (nValor !== -1) {
        if(partida.tipoJuego === 1){
          posicionPiezaJugador(partida.jugadores[nValor]);
        }
        setBloquearOpciones(true);
      }else if (partida.tipoJuego === 2){
        //Este else es para indetificar las pieas del los juegadores en caso de que la partida sea en equipos
        posicionPiezaJuegoConfiguracion(partida,turnoUsuario);
      }
    }
    if (accion === 3) {
      posicionPiezasJuego(partida);
      indicarSiguienteJugador();
      conometro(partida);
    }
  }, []);

  return (
    <>
      <div className="juego">
        <ul id="tablero_juego"></ul>
      </div>
    </>
  );
};

export default Tablero;
