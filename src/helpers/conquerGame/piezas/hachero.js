// import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js";
// import {
//   colorOpciones,
//   colorSeleccionadoTablero,
//   tamanoTableroAncho,
//   tamanoTableroLargo,
//   validaPiezaMontana,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 25;
// export const valorPuntosElite = 40;

import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";
// import {
//   colorOpciones,
//   colorSeleccionadoTablero,
//   tamanoTableroAncho,
//   tamanoTableroLargo,
//   validaPiezaMontana,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 100;

const limitePosicionDiagonal = 13; //Tiene que ser el limite mas 1
const limitePosicionLineal = 1; //Tiene que ser el limite mas 1
const inicioPazos = 1;
export const movimientoHachero = (row, col, piezaJugador, turnoJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  return arregloPosiciones;
};
