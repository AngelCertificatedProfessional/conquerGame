// // import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js";
// // import {
// //   colorOpciones,
// //   COLORSELECCIONADOTABLERO,
// //   tamanoTableroAncho,
// //   tamanoTableroLargo,
// //   validaPiezaMontana,
// //   COLORDISPAROArcher,
// // } from "../ConfiguracionTableroConquerGame.js";
// // export const valorPuntos = 40;

// export const movimientoCanon = (row, col, item) => {
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

//   if (nCol < tamanoTableroAncho - 8) {
//     document.getElementById(
//       `${row}${numeroAAlfabeto(nCol + 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   //Oeste
//   if (nCol > 8) {
//     document.getElementById(
//       `${row}${numeroAAlfabeto(nCol - 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   //Norte
//   if (row < tamanoTableroLargo - 8) {
//     document.getElementById(
//       `${row + 8}${numeroAAlfabeto(nCol)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   //Sur
//   if (row > 8) {
//     document.getElementById(
//       `${row - 8}${numeroAAlfabeto(nCol)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }

//   if (row > 8 && nCol < tamanoTableroAncho - 8) {
//     document.getElementById(
//       `${row - 8}${numeroAAlfabeto(nCol + 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   if (row > 8 && nCol > 8) {
//     document.getElementById(
//       `${row - 8}${numeroAAlfabeto(nCol - 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   if (row < tamanoTableroLargo - 8 && nCol < tamanoTableroAncho - 8) {
//     document.getElementById(
//       `${row + 8}${numeroAAlfabeto(nCol + 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }
//   if (row < tamanoTableroAncho - 8 && nCol > 8) {
//     document.getElementById(
//       `${row + 8}${numeroAAlfabeto(nCol - 8)}`
//     ).style.backgroundColor = COLORDISPAROArcher;
//   }

//   item.style.backgroundColor = COLORSELECCIONADOTABLERO;
// };
