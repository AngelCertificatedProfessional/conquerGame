import {
    ESTRUCTURAPIEZAS2JUGADORESNARANJA, ESTRUCTURAPIEZAS2JUGADORESNEGRO,
    ESTRUCTURAPIEZAS4JUGADORESNARANJA, ESTRUCTURAPIEZAS4JUGADORESNEGRO,
    ESTRUCTURAPIEZAS4JUGADORESPURPURA, ESTRUCTURAPIEZAS4JUGADORESROJO
} from "../../test";
import { CONTENIDOLISTADO, ESTRUCTURAPIEZAS } from "../../types";
import { getEnvVariables } from "../getEnvVariables";
const direccionRuta = `../../images/conquerGame/piezas/`
const direccionRutaMovimiento = `../../images/conquerGame/movimientos/Y`

export const inicializarPiezasJugador = async (conquerGame) => {
    const { VITE_TEST } = getEnvVariables()
    let piezas = ESTRUCTURAPIEZAS;
    if (!!!conquerGame) {
        piezas = CONTENIDOLISTADO;
    } else if (parseInt(VITE_TEST) === 0) {
        piezas = ESTRUCTURAPIEZAS;
    } else if (parseInt(VITE_TEST) === 1) {
        piezas = inicializarPiezasJugadorTEST(conquerGame);
    }
    const piezasFinal = await Promise.all(
        piezas.map(async (pieza) => {
            if (!!conquerGame) {
                return {
                    ...pieza,
                    jugador: conquerGame.turnoJugador,
                    nombre: `${conquerGame.turnoJugador}${pieza.nombre}`,
                    direccion: (await import(/* @vite-ignore */`${direccionRuta}${conquerGame.turnoJugador}${pieza.icono}.png`)).default,
                }
            } else {
                //Piezas de ayuda
                return {
                    ...pieza,
                    direccion: (await import(/* @vite-ignore */`${direccionRuta}Y${pieza.icono}.png`)).default,
                    direccionMovimiento: (await import(/* @vite-ignore */`${direccionRutaMovimiento}${pieza.icono}.png`)).default
                }
            }
        })
    );
    return piezasFinal
}

//Metodo creado simplemente para cargar las piezas en el trablero
const inicializarPiezasJugadorTEST = (conquerGame) => {
    if (conquerGame.cantidadJugadores === 2) {
        switch (conquerGame.turnoJugador) {
            case "O":
                return ESTRUCTURAPIEZAS2JUGADORESNARANJA
            case "B":
                return ESTRUCTURAPIEZAS2JUGADORESNEGRO
        }
    } else if (conquerGame.cantidadJugadores === 4) {
        switch (conquerGame.turnoJugador) {
            case "O":
                return ESTRUCTURAPIEZAS4JUGADORESNARANJA
            case "B":
                return ESTRUCTURAPIEZAS4JUGADORESNEGRO
            case "R":
                return ESTRUCTURAPIEZAS4JUGADORESROJO
            case "P":
                return ESTRUCTURAPIEZAS4JUGADORESPURPURA
        }
    }
}