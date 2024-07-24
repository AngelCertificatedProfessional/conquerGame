import { alfabetoANumero } from "../../numerosLetras";
import {
  movimientoEste, movimientoNorEste, movimientoNorOeste,
  movimientoNorte, movimientoOeste, movimientoSur,
  movimientoSurEste, movimientoSurOeste
} from "./base";

// export const valorPuntos = 100;
const limiteCantidadPazos = 2; //Tiene que ser el limite mas 1
const inicioPazos = 1;
const inicioDisparoArcher = 3;
const finalizaDisparoArcherElite = 4;
export const movimientoArcher = (row, col, piezaJugador, turnoJugador, bElite) => {
  let finalizaDisparoArcherT = bElite ? finalizaDisparoArcherElite : inicioDisparoArcher
  let arregloPosiciones = []
  const nCol = alfabetoANumero(col);
  let vResultado = {}
  let arregloPosicionesDisparo = []
  //Seccion Movimiento
  vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //SeccionDisparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoNorEste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoSurEste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoNorOeste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoSurOeste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoNorte(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoNorte(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoSur(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoSur(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoEste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoEste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  //Seccion Movimiento
  vResultado = movimientoOeste(row, nCol, piezaJugador, inicioPazos, limiteCantidadPazos, false, turnoJugador);
  if (vResultado.arregloPosiciones.length > 0) arregloPosiciones = [...arregloPosiciones, ...vResultado.arregloPosiciones]
  //Seccion Disparo
  if (!vResultado.encontrePared) {
    vResultado = movimientoOeste(row, nCol, piezaJugador, inicioDisparoArcher, finalizaDisparoArcherT, false, turnoJugador);
    if (vResultado.arregloPosiciones.length > 0) arregloPosicionesDisparo = [...arregloPosicionesDisparo, ...vResultado.arregloPosiciones]
  }
  return [arregloPosiciones, arregloPosicionesDisparo];
};