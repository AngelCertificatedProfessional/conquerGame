import { tamanoTableroX, tamanoTableroY } from "../../../types";
import { numeroAAlfabeto } from "../../numeroAAlfabeto";
import { validaPiezaLago, validaPiezaMontana } from "../validaPosicionPieza";

export const movimientoNorEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${(row + nPos)}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoSurEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {

    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoNorOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row + nPos}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoSurOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {

    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoNorte = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row + nPos}${numeroAAlfabeto(col)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoSur = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row - nPos}${numeroAAlfabeto(col)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoEste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row}${numeroAAlfabeto(col + nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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

export const movimientoOeste = (row, col, piezaJugador, inicioPosicion, limit, bCaballero) => {
    const arregloPosiciones = [];
    for (let nPos = inicioPosicion; nPos <= limit; nPos++) {
        const posicionCadena = `${row}${numeroAAlfabeto(col - nPos)}`
        if (validaPiezaMontana(posicionCadena)) {
            return arregloPosiciones;
        }
        if (bCaballero && validaPiezaLago(posicionCadena)) {
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
