import { alfabetoANumero } from "../../numerosLetras";
import {
    movimientoEste, movimientoNorEste, movimientoNorOeste,
    movimientoNorte, movimientoOeste, movimientoSur,
    movimientoSurEste, movimientoSurOeste
} from "./base";

const limiteCantidadPazos = 2; //Tiene que ser el limite mas 1
const inicioPazos = 1;
const inicioDisparoCanon = 8;
const finalizaDisparoCanon = 9;
export const movimientoCanon = (row, col, piezaJugador, turnoJugador) => {
    let arregloPosiciones = []
    const nCol = alfabetoANumero(col);
    let vResultado = {}
    let arregloPosicionesDisparo = []
    //Seccion Movimiento
    vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //SeccionDisparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoNorte(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoSur(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoEste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    //Seccion Movimiento
    vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
    //Seccion Disparo
    if (!vResultado.encontrePared) {
        vResultado = movimientoOeste(row, nCol, piezaJugador, inicioDisparoCanon, finalizaDisparoCanon, false, turnoJugador);
        if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
    }
    return [arregloPosiciones, arregloPosicionesDisparo];
};