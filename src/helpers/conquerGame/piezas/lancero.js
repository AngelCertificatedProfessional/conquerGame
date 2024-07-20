import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";
// export const valorPuntos = 100;
const limitePosicionDiagonal = 1;
const limitePosicionLineal = 13;
const inicioPazos = 1;
export const movimientoLancero = (row, col, piezaJugador, turnoJugador) => {
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
// export const valorPuntos = 20;
// export const valorPuntosElite = 40;

// export const movimientoLanceroElite = (row, col, item) => {
//   let nCol = alfabetoANumero(col);
//   for (let i = 1; i < 3; i++) {
//     if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol + i)}`)) {
//       break;
//     }
//     if (
//       row + i < tamanoTableroLargo + 1 &&
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
//         .innerText == 0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row + i < tamanoTableroLargo + 1 &&
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }
//   //sureste
//   for (let i = 1; i < 3; i++) {
//     if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol + i)}`)) {
//       break;
//     }
//     if (
//       row - i >= 1 &&
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
//         .innerText == 0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row - i >= 1 &&
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }
//   //noroeste
//   for (let i = 1; i < 3; i++) {
//     if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol - i)}`)) {
//       break;
//     }
//     if (
//       row + i < tamanoTableroLargo + 1 &&
//       nCol - i >= 1 &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
//         .innerText == 0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row + i < tamanoTableroLargo + 1 &&
//       nCol - i >= 1 &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }
//   //suroeste
//   for (let i = 1; i < 3; i++) {
//     if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol - i)}`)) {
//       break;
//     }
//     if (
//       row - i >= 1 &&
//       nCol - i >= 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
//         .innerText == 0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row - i >= 1 &&
//       nCol - i >= 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }

//   //Norte
//   for (let i = 1; i < 15; i++) {
//     if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol)}`)) {
//       break;
//     }
//     if (
//       row + i < tamanoTableroLargo + 1 &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol)}`).innerText ==
//       0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row + i < tamanoTableroLargo + 1 &&
//       nCol &&
//       document.getElementById(`${row + i}${numeroAAlfabeto(nCol)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }
//   //sur
//   for (let i = 1; i < 15; i++) {
//     if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol)}`)) {
//       break;
//     }
//     if (
//       row - i >= 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol)}`).innerText ==
//       0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       row - i >= 1 &&
//       document.getElementById(`${row - i}${numeroAAlfabeto(nCol)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }

//   //Este
//   for (let i = 1; i < 15; i++) {
//     if (validaPiezaMontana(`${row}${numeroAAlfabeto(nCol + i)}`)) {
//       break;
//     }
//     if (
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row}${numeroAAlfabeto(nCol + i)}`).innerText ==
//       0
//     ) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       nCol + i < tamanoTableroAncho + 1 &&
//       document.getElementById(`${row}${numeroAAlfabeto(nCol + i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }

//   //Oeste
//   for (let i = 1; i < 15; i++) {
//     if (validaPiezaMontana(`${row}${numeroAAlfabeto(nCol - i)}`)) {
//       break;
//     }
//     if (
//       nCol - i >= 1 &&
//       document.getElementById(`${row}${numeroAAlfabeto(nCol - i)}`).innerText ==
//       0
//     ) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//     } else if (
//       nCol - i >= 1 &&
//       document.getElementById(`${row}${numeroAAlfabeto(nCol - i)}`)
//         .innerText !== 0
//     ) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorOpciones;
//       break;
//     }
//   }
//   item.style.backgroundColor = COLORSELECCIONADOTABLERO;
// };
