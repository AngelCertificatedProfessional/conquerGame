import { ARREGLOTIPOPIEZAS, lagosConquerGame, montanasConquerGame, tamanoTableroX, tamanoTableroY } from "../../types";
import { eliminarLetras, eliminarNumeros, alfabetoANumero } from "../numerosLetras";
import { movimientoArcher } from "./piezas/archer";
import { movimientoAsesino, movimientoAsesinoElite } from "./piezas/asesino";
import { movimientoCaballero } from "./piezas/caballero";
import { movimientoCanon } from "./piezas/canon";
import { movimientoHachero } from "./piezas/hachero";
import { movimientoHechicero } from "./piezas/hechicero";
import { movimientoLancero } from "./piezas/lancero";
import { movimientoRey } from "./piezas/rey";
export const validaPiezaMontana = (idDiv) => {
    return montanasConquerGame.includes(idDiv);
};

export const validaPiezaLago = (idDiv) => {
    return lagosConquerGame.includes(idDiv);
};

export const validaInvacionTerreno2Jugadores = (sPiezaNuevaPosicion, turnoJugador) => {
    const nValor = eliminarLetras(sPiezaNuevaPosicion);
    return (
        (turnoJugador === "O" && nValor >= 1 && nValor <= tamanoTableroX / 2) ||
        (turnoJugador === "B" &&
            nValor >= tamanoTableroX / 2 + 1 &&
            nValor <= tamanoTableroX)
    )
}

export const validaInvacionTerreno4Jugadores = (sPiezaNuevaPosicion, turnoJugador) => {
    const nValor = eliminarLetras(sPiezaNuevaPosicion);
    //eliminacion de numeros para el lado vertical
    const nValorCol = alfabetoANumero(eliminarNumeros(sPiezaNuevaPosicion));
    return (
        (turnoJugador === "O" &&
            ((nValor >= 1 && nValor <= tamanoTableroX / 2) ||
                (nValorCol >= tamanoTableroY / 2 + 1 &&
                    nValorCol <= tamanoTableroY))) ||
        (turnoJugador === "B" &&
            ((nValor >= 1 && nValor <= tamanoTableroX / 2) ||
                (nValorCol >= 1 && nValorCol <= tamanoTableroY / 2))) ||
        (turnoJugador === "R" &&
            ((nValor >= tamanoTableroX / 2 + 1 &&
                nValor <= tamanoTableroX) ||
                (nValorCol >= tamanoTableroY / 2 + 1 &&
                    nValorCol <= tamanoTableroY))) ||
        (turnoJugador === "P" &&
            ((nValor >= tamanoTableroX / 2 + 1 &&
                nValor <= tamanoTableroX) ||
                (nValorCol >= 1 && nValorCol <= tamanoTableroY / 2)))
    )
}

export const piezaInvadePosicionConfiguracion = (sPiezaNuevaPosicion, nombrePiezaSeleccinada, piezasJugador) => {
    //Validamos que la pieza no este en esa posicion previamente
    const nPosicion = piezasJugador.findIndex(({ posicion, nombre }) => posicion === sPiezaNuevaPosicion && nombre !== nombrePiezaSeleccinada)
    if (nPosicion > -1) {
        alert("Ya existe una pieza en esta posicion");
        return true;
    }
    if (
        (eliminarNumeros(nombrePiezaSeleccinada).includes("caballero")) &&
        validaPiezaLago(sPiezaNuevaPosicion)
    ) {
        alert("Esta pieza no puede invadir un lago");
        return true;
    }
    if (validaPiezaMontana(sPiezaNuevaPosicion)) {
        alert("Esta pieza no puede invadir una montaña");
        return true;
    }
    return false;
}

export const posicionesMovimientosPiezas = (pieza, posicionPieza, piezaJugador, turnoJugador, bSegundoMovimientoAsesino) => {
    const col = eliminarNumeros(posicionPieza);
    const row = parseInt(eliminarLetras(posicionPieza));
    switch (pieza) {
        case ARREGLOTIPOPIEZAS.ARCHERE:
            return movimientoArcher(row, col, piezaJugador, turnoJugador, true)
        case ARREGLOTIPOPIEZAS.ARCHER:
            return movimientoArcher(row, col, piezaJugador, turnoJugador, false)
        case ARREGLOTIPOPIEZAS.REY:
            return movimientoRey(row, col, piezaJugador, turnoJugador)
        case ARREGLOTIPOPIEZAS.HACHEROE:
            return movimientoHachero(row, col, piezaJugador, turnoJugador, true);
        case ARREGLOTIPOPIEZAS.HACHERO:
            return movimientoHachero(row, col, piezaJugador, turnoJugador, false)
        case ARREGLOTIPOPIEZAS.LANCEROE:
            return movimientoLancero(row, col, piezaJugador, turnoJugador, true)
        case ARREGLOTIPOPIEZAS.LANCERO:
            return movimientoLancero(row, col, piezaJugador, turnoJugador, false)
        case ARREGLOTIPOPIEZAS.CABALLERO:
            return movimientoCaballero(row, col, piezaJugador, turnoJugador)
        case ARREGLOTIPOPIEZAS.ASESINOE:
            return movimientoAsesinoElite(row, col, piezaJugador, turnoJugador)
        case ARREGLOTIPOPIEZAS.ASESINO:
            return movimientoAsesino(row, col, piezaJugador, bSegundoMovimientoAsesino, turnoJugador, false)
        case ARREGLOTIPOPIEZAS.HECHICERO:
            return movimientoHechicero(row, col, piezaJugador, turnoJugador);
        case ARREGLOTIPOPIEZAS.CANON:
            return movimientoCanon(row, col, piezaJugador, turnoJugador);
    }
}