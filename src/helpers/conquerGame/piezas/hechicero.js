import { alfabetoANumero } from "../../numerosLetras";
import {
    movimientoEste, movimientoNorEste, movimientoNorOeste,
    movimientoNorte, movimientoOeste, movimientoSur,
    movimientoSurEste, movimientoSurOeste
} from "./base";

// export const valorPuntos = 100;
const limiteCantidadPazos = 2; //Tiene que ser el limite mas 1
const inicioPazos = 1;
const inicioDisparoHechicero = 3;
const finalizaDisparoHechicero = 3;
export const movimientoHechicero = (row, col, piezaJugador, turnoJugador) => {
    let arregloPosiciones = []
    const nCol = alfabetoANumero(col);
    let vResultado = {}
    let arregloPosicionesDisparo = []
    //Seccion Movimiento
    vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //SeccionDisparo
    vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    //Seccion Movimiento
    vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador); if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    //Seccion Movimiento
    vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    //Seccion Movimiento
    vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    //Seccion Movimiento
    vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoNorte(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    //Seccion Movimiento
    vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoSur(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    //Seccion Movimiento
    vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoEste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    //Seccion Movimiento
    vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    vResultado = movimientoOeste(row, nCol, piezaJugador, inicioDisparoHechicero, finalizaDisparoHechicero, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]

    return [arregloPosiciones, arregloPosicionesDisparo];
};