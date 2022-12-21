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
      if (nValor !== -1) {
        posicionPiezaJugador(partida.jugadores[nValor]);
        setBloquearOpciones(true);
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
