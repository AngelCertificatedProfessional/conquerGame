import { ACCIONTIPOJUEGOOBJETO, lagosConquerGame, montanasConquerGame, tamanoTableroX, tamanoTableroY } from "../../types";
import { eliminarLetras, eliminarNumeros, alfabetoANumero } from "../numerosLetras";
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

export const piezaInvadePosicionConfiguracion = (sPiezaNuevaPosicion, nombrePiezaSeleccinada, conquerGame, piezasJugador) => {
    //Evaluaremos si la pieza esta invadiendo terreno
    //Validamos que el usuario pueda poner la pieza en esa posicion
    if (ACCIONTIPOJUEGOOBJETO.INDIVIDUAL === conquerGame.tipoJuego) {
        switch (conquerGame.cantidadJugadores) {
            case 2:
                if (validaInvacionTerreno2Jugadores(sPiezaNuevaPosicion, conquerGame.turno)) {
                    alert("Esta pieza esta invadiendo terreno");
                    return true
                }
                break;
            case 4:
                if (validaInvacionTerreno4Jugadores(sPiezaNuevaPosicion, conquerGame.turno)) {
                    alert("Esta pieza esta invadiendo terreno");
                    return true
                }
                break;
        }
        // } else if (nTipoJuego === 2) {
        //     switch (nCantidadJugadores) {
        //         case 4:
        //             if (
        //                 ((sTurno === "O" || sTurno === "B") && nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
        //                 ((sTurno === "R" || sTurno === "P") &&
        //                     nValor >= tamanoTableroLargo / 2 + 1 &&
        //                     nValor <= tamanoTableroLargo)
        //             ) {
        //                 alert("Esta pieza esta invadiendo terreno");
        //                 return true;
        //             }
        //             break;
        //         case 6:
        //             if (
        //                 ((sTurno === "O" || sTurno === "B" || sTurno === "R") && nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
        //                 ((sTurno === "P" || sTurno === "G" || sTurno === "Y") &&
        //                     nValor >= tamanoTableroLargo / 2 + 1 &&
        //                     nValor <= tamanoTableroLargo)
        //             ) {
        //                 alert("Esta pieza esta invadiendo terreno");
        //                 return true;
        //             }
        //             break;
        //     }
    }

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