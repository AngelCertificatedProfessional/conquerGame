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
const limiteCantidadPazos = 2; //Tiene que ser el limite mas 1
const inicioPazos = 1;
const inicioDisparoArcher = 3;
export const movimientoArcher = (row, col, piezaJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  return arregloPosiciones;
};

export const disparoArcher = (row, col, piezaJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador, inicioDisparoArcher, inicioDisparoArcher, false);
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
//   colorDisparoArcher,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 15;

// export const movimientoArcher = (row, col, item) => {
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   //Este segmento es para los disparos de archer
//   //Este
//   if (nCol < tamanoTableroAncho - 3) {
//     document.getElementById(
//       `${row}${numeroAAlfabeto(nCol + 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   //Oeste
//   if (nCol > 3) {
//     document.getElementById(
//       `${row}${numeroAAlfabeto(nCol - 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   //Norte
//   if (row < tamanoTableroLargo - 3) {
//     document.getElementById(
//       `${row + 3}${numeroAAlfabeto(nCol)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   //Sur
//   if (row > 3) {
//     document.getElementById(
//       `${row - 3}${numeroAAlfabeto(nCol)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }

//   if (row > 3 && nCol < tamanoTableroAncho - 3) {
//     document.getElementById(
//       `${row - 3}${numeroAAlfabeto(nCol + 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row > 3 && nCol > 3) {
//     document.getElementById(
//       `${row - 3}${numeroAAlfabeto(nCol - 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row < tamanoTableroLargo - 3 && nCol < tamanoTableroAncho - 3) {
//     document.getElementById(
//       `${row + 3}${numeroAAlfabeto(nCol + 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row < tamanoTableroAncho - 3 && nCol > 3) {
//     document.getElementById(
//       `${row + 3}${numeroAAlfabeto(nCol - 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }

//   item.style.backgroundColor = colorSeleccionadoTablero;
// };

// export const valorPuntosElite = 40;
// export const movimientoArcherElite = (row, col, item) => {
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
//     //Se pregunta que si se cumple el tamano del mapa y si la posicion de la pieza no existe otra, en caso de haber una se pone el color y se limpiar el mapa
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   for (let i = 1; i < 3; i++) {
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
//   //Este segmento es para los disparos de archer
//   for (let i = 3; i < 5; i++) {
//     //Este
//     if (nCol < tamanoTableroAncho - i) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol + i)}`
//       ).style.backgroundColor = colorDisparoArcher;
//     }

//     //Oeste
//     if (nCol > i) {
//       document.getElementById(
//         `${row}${numeroAAlfabeto(nCol - i)}`
//       ).style.backgroundColor = colorDisparoArcher;
//     }
//     //Norte
//     if (row < tamanoTableroLargo - i) {
//       document.getElementById(
//         `${row + i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorDisparoArcher;
//     }
//     //Sur
//     if (row > i) {
//       document.getElementById(
//         `${row - i}${numeroAAlfabeto(nCol)}`
//       ).style.backgroundColor = colorDisparoArcher;
//     }
//   }

//   if (row > 3 && nCol < tamanoTableroAncho - 3) {
//     document.getElementById(
//       `${row - 3}${numeroAAlfabeto(nCol + 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row > 3 && nCol > 3) {
//     document.getElementById(
//       `${row - 3}${numeroAAlfabeto(nCol - 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row < tamanoTableroLargo - 3 && nCol < tamanoTableroAncho - 3) {
//     document.getElementById(
//       `${row + 3}${numeroAAlfabeto(nCol + 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }
//   if (row < tamanoTableroAncho - 3 && nCol > 3) {
//     document.getElementById(
//       `${row + 3}${numeroAAlfabeto(nCol - 3)}`
//     ).style.backgroundColor = colorDisparoArcher;
//   }

//   item.style.backgroundColor = colorSeleccionadoTablero;
// };