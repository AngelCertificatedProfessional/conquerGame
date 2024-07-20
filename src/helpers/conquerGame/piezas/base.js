import { tamanoTableroX, tamanoTableroY } from "../../../types";
import { numeroAAlfabeto } from "../../numeroAAlfabeto";
import { validaPiezaLago, validaPiezaMontana } from "../validaPosicionPieza";

export const movimientoNorEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${(row + nPos)}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si se sobrepasa las posiciones del tablero entonces regrese return
        if (row + nPos > tamanoTableroX || col + nPos > tamanoTableroY) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoSurEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {

    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (row - nPos <= 0 || col + nPos > tamanoTableroY) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoNorOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row + nPos}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (row + nPos > tamanoTableroX || col - nPos < 1) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoSurOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {

    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (row - nPos <= 0 || col - nPos <= 0) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoNorte = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row + nPos}${numeroAAlfabeto(col)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (row + nPos > tamanoTableroX) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoSur = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (row - nPos < 1) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (col + nPos > tamanoTableroY) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}

export const movimientoOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero, turnoJugador) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return { arregloPosiciones, encontrePared: true };
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
            return { arregloPosiciones, encontrePared: false };
        }
        if (col - nPos < 1) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una amiga entonces detenga el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) === turnoJugador)) {
            return { arregloPosiciones, encontrePared: false };
        }
        //Validamos que si existe la pieza donde esta una enemiga entonces la agregamos y detenemos el proceso
        if (piezaJugador.some(({ posicion, nombre }) => posicion === posicionCadena && nombre.at(0) !== turnoJugador)) {
            arregloPosiciones.push(posicionCadena)
            return { arregloPosiciones, encontrePared: false }
        }
        arregloPosiciones.push(posicionCadena)
    }
    return { arregloPosiciones, encontrePared: false };
}
