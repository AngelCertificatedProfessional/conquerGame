import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";

const limitePosicionDiagonal = 13; //Tiene que ser el limite mas 1
const limitePosicionLineal = 1; //Tiene que ser el limite mas 1
const limitePosicionDiagonalElite = 14;
const limitePosicionLinealElite = 2;
const inicioPazos = 1;
export const movimientoHachero = (row, col, piezaJugador, turnoJugador, bElite) => {
  let limitePosicionDiagonalT = bElite ? limitePosicionDiagonalElite : limitePosicionDiagonal
  let limitePosicionLinealT = bElite ? limitePosicionLinealElite : limitePosicionLineal

  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let vResultado = {}

  vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonalT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonalT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonalT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonalT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limitePosicionLinealT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limitePosicionLinealT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limitePosicionLinealT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionLinealT, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  return [arregloPosiciones, []];
};