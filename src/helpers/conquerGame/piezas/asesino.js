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
  let arregloTemp = []
  if (bSegundoMovimientoAsesino) {
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
  } else {

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


  }
  return arregloPosiciones;
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
