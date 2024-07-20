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

// export const movimientoAsesinoElite = (row, col, item) => {
//   let nCol = alfabetoANumero(col);
//   //La funcionalidad del asesino es matar dos caminar dos veces, matar dos veces por eso
//   // se realiza una evaluacion de su movimiento
//   if (nCol < tamanoTableroAncho) {
//     if (!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol + 1)}`)) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol + 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   //Oeste
//   if (nCol > 1) {
//     if (!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol - 1)}`)) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol - 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   //Norte
//   if (row < tamanoTableroLargo) {
//     if (!validaPiezaMontana(`${row + 1}${numeroAAlfabeto(nCol)}`)) {
//       document.getElementById(
//         `${row + 1}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   //Sur
//   if (row > 1) {
//     if (!validaPiezaMontana(`${row - 1}${numeroAAlfabeto(nCol)}`)) {
//       document.getElementById(
//         `${row - 1}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   if (row > 1 && nCol < tamanoTableroAncho) {
//     if (!validaPiezaMontana(`${row - 1}${numeroAAlfabeto(nCol + 1)}`)) {
//       document.getElementById(
//         `${row - 1}${numeroAAlfabeto(nCol + 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   if (row > 1 && nCol > 1) {
//     if (!validaPiezaMontana(`${row - 1}${numeroAAlfabeto(nCol - 1)}`)) {
//       document.getElementById(
//         `${row - 1}${numeroAAlfabeto(nCol - 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   if (row < tamanoTableroLargo && nCol < tamanoTableroAncho) {
//     if (!validaPiezaMontana(`${row + 1}${numeroAAlfabeto(nCol + 1)}`)) {
//       document.getElementById(
//         `${row + 1}${numeroAAlfabeto(nCol + 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   if (row < tamanoTableroLargo && nCol > 1) {
//     if (!validaPiezaMontana(`${row + 1}${numeroAAlfabeto(nCol - 1)}`)) {
//       document.getElementById(
//         `${row + 1}${numeroAAlfabeto(nCol - 1)}`
//       ).style.backgroundColor = colorOpciones;
//     }
//   }
//   item.style.backgroundColor = COLORSELECCIONADOTABLERO;
// };
