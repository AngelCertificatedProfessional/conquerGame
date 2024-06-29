import { tamanoTableroX, tamanoTableroY } from "../../../types";
import { numeroAAlfabeto } from "../../numeroAAlfabeto";
import { alfabetoANumero } from "../../numerosLetras";
import { validaPiezaMontana } from "../validaPosicionPieza";
// import {
//   colorOpciones,
//   colorSeleccionadoTablero,
//   tamanoTableroAncho,
//   tamanoTableroLargo,
//   validaPiezaMontana,
// } from "../ConfiguracionTableroConquerGame.js";
// export const valorPuntos = 100;


export const movimientoRey = (row, col, piezaJugador) => {
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let arregloTemp = []

  arregloTemp = movimientoNorEste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoSurEste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  arregloTemp = movimientoNorOeste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSurOeste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoNorte(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoSur(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoEste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }

  arregloTemp = movimientoOeste(row, nCol, piezaJugador);
  if (arregloTemp.length > 0) {
    arregloPosiciones = [...arregloPosiciones, ...arregloTemp]
  }
  return arregloPosiciones;
};

const movimientoNorEste = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${(row + nPos)}${numeroAAlfabeto(col + nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    //Validamos que si se sobrepasa las posiciones del tablero entonces regrese return
    if (row + nPos > tamanoTableroX || col + nPos > tamanoTableroY) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoSurEste = (row, col, piezaJugador) => {

  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row - nPos}${numeroAAlfabeto(col + nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (row - nPos <= 0 || col + nPos > tamanoTableroY) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoNorOeste = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row + nPos}${numeroAAlfabeto(col - nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (row + nPos > tamanoTableroX || col - nPos < 1) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoSurOeste = (row, col, piezaJugador) => {

  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row - nPos}${numeroAAlfabeto(col - nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (row - nPos <= 0 || col - nPos <= 0) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoNorte = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row + nPos}${numeroAAlfabeto(col)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (row + nPos > tamanoTableroX) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoSur = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row - nPos}${numeroAAlfabeto(col)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (row - nPos < 1) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoEste = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row}${numeroAAlfabeto(col + nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (col + nPos > tamanoTableroY) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}

const movimientoOeste = (row, col, piezaJugador) => {
  const arregloPosiciones = [];
  for (let nPos = 1; nPos < 3; nPos++) {
    const posicionCadena = `${row}${numeroAAlfabeto(col - nPos)}`
    if (validaPiezaMontana(posicionCadena)) {
      return arregloPosiciones;
    }
    if (col - nPos < 1) {
      return arregloPosiciones;
    }
    //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
    if (piezaJugador.some(({ posicion }) => posicion === posicionCadena)) {
      return arregloPosiciones
    }
    arregloPosiciones.push(posicionCadena)
  }
  return arregloPosiciones;
}
