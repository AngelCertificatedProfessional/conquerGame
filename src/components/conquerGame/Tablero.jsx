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
  indicarSiguienteJugador,
  conometro,
  posicionPiezaJuego,
  turnoUsuario
}) => {
  useEffect(() => {
    setPartida(partida);
    agregarDivsTablero();
    coloring(partida.tipoJuego);
    if(accion ===2){
      if(partida.hasOwnProperty('posicionPiezasGlobal')){
        posicionPiezaJuego(partida,turnoUsuario)
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
