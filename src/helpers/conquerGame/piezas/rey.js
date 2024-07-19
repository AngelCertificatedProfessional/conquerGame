import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";
// export const valorPuntos = 100;
const limiteCantidadPazos = 2;
const inicioPazos = 1;
export const movimientoRey = (row, col, piezaJugador, turnoJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  return arregloPosiciones;
};