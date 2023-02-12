import React, { useEffect } from "react";
import {numeroAAlfabeto } from "../../utils/UtileriasPagina";
import {
  tamanoTableroLargo,
  tamanoTableroAncho,
  lagos,
  montanas
} from "../../utils/conquerGame/ConfiguracionTableroConquerGame";
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
      if (nValor !== -1) {
        if(partida.tipoJuego === 1){
          posicionPiezaJugador(partida.jugadores[nValor]);
        }else if (partida.tipoJuego === 2){
          //Este else es para indetificar las pieas del los juegadores en caso de que la partida sea en equipos
          posicionPiezaJuegoConfiguracion(partida,turnoUsuario);
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
        <ul id="tablero_juego">
          {[...Array(tamanoTableroLargo)].map((x, row) =>
            <div id={`row${tamanoTableroLargo - (row)}`} className="row">
              {[...Array(tamanoTableroAncho)].map((x, col) =>
                <li id={`${tamanoTableroLargo - row}${numeroAAlfabeto(col+1)}`} className = {lagos.includes(`${tamanoTableroLargo - row}${numeroAAlfabeto(col+1)}`) ? "box blue-box" : montanas.includes(`${tamanoTableroLargo - row}${numeroAAlfabeto(col+1)}`) ? "box green-box" : "box white-box"}>

                </li>
              )}
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default Tablero;
