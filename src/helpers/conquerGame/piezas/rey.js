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
  let vResultado = {}
  vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]

  vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  return [arregloPosiciones, []];
};