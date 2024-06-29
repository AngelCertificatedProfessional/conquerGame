import { ARREGLOTIPOPIEZAS, lagosConquerGame, montanasConquerGame, tamanoTableroX, tamanoTableroY } from "../../types";
import { eliminarLetras, eliminarNumeros, alfabetoANumero } from "../numerosLetras";
import { movimientoRey } from "./piezas/rey";
export const validaPiezaMontana = (idDiv) => {
    return montanasConquerGame.includes(idDiv);
};

export const validaPiezaLago = (idDiv) => {
    return lagosConquerGame.includes(idDiv);
};

export const validaInvacionTerreno2Jugadores = (sPiezaNuevaPosicion, turno) => {
    const nValor = eliminarLetras(sPiezaNuevaPosicion);
    return (
        (turno === "O" && nValor >= 1 && nValor <= tamanoTableroX / 2) ||
        (turno === "B" &&
            nValor >= tamanoTableroX / 2 + 1 &&
            nValor <= tamanoTableroX)
    )
}

export const validaInvacionTerreno4Jugadores = (sPiezaNuevaPosicion, turno) => {
    const nValor = eliminarLetras(sPiezaNuevaPosicion);
    //eliminacion de numeros para el lado vertical
    const nValorCol = alfabetoANumero(eliminarNumeros(sPosicion));
    return (
        (turno === "O" &&
            ((nValor >= 1 && nValor <= tamanoTableroX / 2) ||
                (nValorCol >= tamanoTableroY / 2 + 1 &&
                    nValorCol <= tamanoTableroY))) ||
        (turno === "B" &&
            ((nValor >= 1 && nValor <= tamanoTableroX / 2) ||
                (nValorCol >= 1 && nValorCol <= tamanoTableroY / 2))) ||
        (turno === "R" &&
            ((nValor >= tamanoTableroX / 2 + 1 &&
                nValor <= tamanoTableroX) ||
                (nValorCol >= tamanoTableroY / 2 + 1 &&
                    nValorCol <= tamanoTableroY))) ||
        (turno === "P" &&
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
        (eliminarNumeros(nombrePiezaSeleccinada) === "caballero") &&
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

export const pintarCuadrosTableroPosicion = (pieza, posicionPieza, piezaJugador) => {
    const col = eliminarNumeros(posicionPieza);
    const row = parseInt(eliminarLetras(posicionPieza));
    switch (pieza) {
        case ARREGLOTIPOPIEZAS.ARCHERE:
            return [];
        case ARREGLOTIPOPIEZAS.ARCHER:
            return [];
        case ARREGLOTIPOPIEZAS.REY:
            return movimientoRey(row, col, piezaJugador)
        case ARREGLOTIPOPIEZAS.HACHEROE:
            return [];
        case ARREGLOTIPOPIEZAS.HACHERO:
            return [];
        case ARREGLOTIPOPIEZAS.LANCEROE:
            return [];
        case ARREGLOTIPOPIEZAS.LANCERO:
            return [];
        case ARREGLOTIPOPIEZAS.CABALLERO:
            return [];
        case ARREGLOTIPOPIEZAS.ASESINOE:
            return [];
        case ARREGLOTIPOPIEZAS.ASESINO:
            return [];
        case ARREGLOTIPOPIEZAS.HECHICERO:
            return [];
        case ARREGLOTIPOPIEZAS.CANON:
            return [];
    }
}