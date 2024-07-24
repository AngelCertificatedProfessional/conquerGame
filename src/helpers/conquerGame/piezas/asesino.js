import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";
// export const valorPuntos = 100;
const limitePosicionDiagonal = 1;
const limitePosicionLineal = 1;
const inicioPazos = 1;
export const movimientoAsesino = (row, col, piezaJugador, bSegundoMovimientoAsesino, turnoJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let vResultado = {}
  if (bSegundoMovimientoAsesino) {
    vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  } else {

    vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

    vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  }
  return [arregloPosiciones, []];
};

export const movimientoAsesinoElite = (row, col, piezaJugador, turnoJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let vResultado = {}
  vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionDiagonal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limitePosicionLineal, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  return [arregloPosiciones, []];
};