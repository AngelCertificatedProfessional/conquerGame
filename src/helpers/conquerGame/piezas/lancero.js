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
const limitePosicionDiagonal = 1;
const limitePosicionLineal = 13;
const inicioPazos = 1;
export const movimientoLancero = (row, col, piezaJugador, turnoJugador) => {
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



// import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js";
// import {
//   colorOpciones,
//   colorSeleccionadoTablero,
//   tamanoTableroAncho,
//   tamanoTableroLargo,
//   validaPiezaMontana,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 20;
// export const valorPuntosElite = 40;
// export const movimientoLancero = (row, col, item) => {
//   let nCol = alfabetoANumero(col);
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

//   //Norte
//   for (let i = 1; i < 14; i++) {
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
//   for (let i = 1; i < 14; i++) {
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
//   for (let i = 1; i < 14; i++) {
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
//   for (let i = 1; i < 14; i++) {
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
//   item.style.backgroundColor = colorSeleccionadoTablero;
// };

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
//   item.style.backgroundColor = colorSeleccionadoTablero;
// };
