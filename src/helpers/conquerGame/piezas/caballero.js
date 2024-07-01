// import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js";
// import {
//   colorOpciones,
//   colorSeleccionadoTablero,
//   tamanoTableroAncho,
//   tamanoTableroLargo,
//   validaPiezaLago,
//   validaPiezaMontana,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 35;
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";
import { alfabetoANumero } from "../../numerosLetras";
import { tamanoTableroX } from "../../../types";

const limiteCantidadPazos = tamanoTableroX
const inicioPazos = 1;
export const movimientoCaballero = (row, col, piezaJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, true);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  return arregloPosiciones;
}
