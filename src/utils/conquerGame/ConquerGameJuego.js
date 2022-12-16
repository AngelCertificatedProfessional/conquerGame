import { movimientoRey, valorPuntos as valorPuntosRey } from "./piezas/rey.js";
import { actualizarEspecifico } from "../ConexionAPI.js";
import {
  colorDisparoArcher,
  colorOpciones,
  colorSeleccionadoTablero,
  colorTablero,
  tamanoTableroAncho,
  tamanoTableroLargo,
  arregloPiezas,
  validaPosicionPieza,
  agregarImagenesListado as agregarImagenesListadoTablero,
  agregarDivsTablero as agregarDivsTableroConfiguracion,
  coloring as coloringTablero,
  insertImage
} from "./ConfiguracionTableroConquerGame.js";
import {
  movimientoHachero,
  valorPuntos as valorPuntosHachero,
  movimientoHacheroElite,
  valorPuntos as valorPuntosHacheroElite,
} from "./piezas/hachero.js";
import {
  movimientoLancero,
  valorPuntos as valorPuntosLancero,
  movimientoLanceroElite,
  valorPuntos as valorPuntosLanceroElite,
} from "./piezas/lancero.js";
import {
  movimientoCaballero,
  valorPuntos as valorPuntosCaballero,
} from "./piezas/caballero.js";
import {
  movimientoAsesino,
  valorPuntos as valorPuntosAsesino,
  movimientoAsesinoElite,
  valorPuntosElite as valorPuntosAsesinoElite,
} from "./piezas/asesino.js";
import {
  movimientoArcher,
  valorPuntos as valorPuntosArcher,
  movimientoArcherElite,
  valorPuntosElite as valorPuntosArcherElite,
} from "./piezas/archer.js";
import {
  alfabetoANumero,
  eliminarLetras,
  eliminarNumeros,
  numeroAAlfabeto,
} from "../UtileriasPagina";
import {
  movimientoHechicero,
  valorPuntos as valorPuntosHechicero,
} from "./piezas/hechicero.js";
import {
  movimientoCanon,
  valorPuntos as valorPuntosCanon,
} from "./piezas/canon.js";
let pinkId = "";
let pinkText = "";
let nTurno = 0;
let bMovioAsesino = false;
let bMovioAsesinoElite = false;
let sPiezaMovimiento = "";
let arrReyes = [];
let sTurnoJugador = "";
let sJugador = "";
let z = 0;
let partida = {};
let posicionPiezasGlobal = {};
let nIntervalo = null;
let mostrarMenuUnidadEspecial = null;
let sAgregarPiezaEspecial = "";
let sReyEliminoTemp = "";
export const mostrarMenuUnidadEspecialM = (vMetodo) => {
  mostrarMenuUnidadEspecial = vMetodo;
  return;
};

export const limpiarVariablesJuego = () => {
  pinkId = "";
  pinkText = "";
  nTurno = 0;
  bMovioAsesino = false;
  sPiezaMovimiento = "";
  arrReyes = [];
  sTurnoJugador = "";
  z = 0;
  partida = {};
  posicionPiezasGlobal = {};
  nIntervalo = null;
  bMovioAsesinoElite = false;
  sReyEliminoTemp;
};

export const agregarDivsTableroJuego = () => {
  agregarDivsTableroConfiguracion();

  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("click", function () {
      if (sAgregarPiezaEspecial !== "") {
        agregarPiezaEspecialClick(item.id);
        return;
      }

      //hacemos respetar el turno del usuario
      if (!esTurnoJugadorTurno()) return;

      // To delete the opposite element
      if (
        item.style.backgroundColor == colorOpciones &&
        item.innerText.length == 0
      ) {
        //Se realiza la evaluacion con el asesino elite para poder evaluar primero con el caracter
        if (sPiezaMovimiento.includes("asesinoE") && !bMovioAsesinoElite) {
          bMovioAsesinoElite = true;
        } else if (
          sPiezaMovimiento.includes("asesino") &&
          !sPiezaMovimiento.includes("asesinoE") &&
          !bMovioAsesino
        ) {
          bMovioAsesino = true;
        } else {
          nTurno++;
          bMovioAsesino = false;
          bMovioAsesinoElite = false;
        }
        posicionPiezasGlobal[sPiezaMovimiento] = item.id;

        evaluartTurnoJugador(
          `Jugador ${sJugador} movio la pieza ${sPiezaMovimiento.substring(1)}`,
          0,
          "",
          ""
        );
        return;
        //en este segmento enviaremos la peticion de la posicion de las unidades
      } else if (
        item.style.backgroundColor == colorOpciones &&
        item.innerText.length !== 0
      ) {
        //este segmento de codigo sirve para validar que se este eliminando la pieza
        document.querySelectorAll(".box").forEach((i) => {
          if (i.style.backgroundColor == colorSeleccionadoTablero) {
            let pinkId2 = i.id;
            let pinkText2 = i.innerText;

            document.getElementById(pinkId2).innerText = "";
            let piezaAnterior = item.innerText;
            //Sirve para indicar si una pieza esta muerta o no
            //document.getElementById(piezaAnterior).style.opacity = 0.5;

            item.innerText = pinkText2;
            coloring();
            insertImage();
            //Se realiza la evaluacion con el asesino elite para poder evaluar primero con el caracter
            if (sPiezaMovimiento.includes("asesinoE") && !bMovioAsesinoElite) {
              bMovioAsesinoElite = true;
            } else if (
              sPiezaMovimiento.includes("asesino") &&
              !sPiezaMovimiento.includes("asesinoE") &&
              !bMovioAsesino
            ) {
              bMovioAsesino = true;
            } else {
              nTurno++;
              bMovioAsesino = false;
              bMovioAsesinoElite = false;
            }

            posicionPiezasGlobal[piezaAnterior] = "";
            posicionPiezasGlobal[sPiezaMovimiento] = item.id;

            if (piezaAnterior.includes("rey")) {
              if (!bMovioAsesinoElite) {
                nTurno--;
              }
              //detectamos la posicion del rey que estan atacando
              const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
              //detectamos la posicion del rey que esta ordenando el ataque.
              const indexReyOrden = arrReyes.indexOf(pinkText2[0] + "rey");
              if (indexReyMuerto < indexReyOrden) {
                nTurno--;
              }
              if (indexReyMuerto > -1) {
                // only splice array when item is found
                arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
                //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
              }
              if (arrReyes.length > 1) {
                mostrarMenuUnidadEspecial(true);
                sAgregarPiezaEspecial = "pieza";
                sReyEliminoTemp = piezaAnterior[0];
                return;
              } else {
                evaluartTurnoJugador(
                  `Jugador ${sJugador} ataco la pieza ${piezaAnterior.substring(
                    1
                  )} ${getColorPorLetra(
                    piezaAnterior[0],
                    false
                  )} con ${sPiezaMovimiento.substring(1)}`,
                  getPuntuajePieza(piezaAnterior),
                  piezaAnterior[0],
                  sTurnoJugador
                );
                return;
              }
            } else {
              evaluartTurnoJugador(
                `Jugador ${sJugador} ataco la pieza ${piezaAnterior.substring(
                  1
                )} ${getColorPorLetra(
                  piezaAnterior[0],
                  false
                )} con ${sPiezaMovimiento.substring(1)}`,
                getPuntuajePieza(piezaAnterior),
                piezaAnterior[0],
                sTurnoJugador
              );
              return;
            }
          }
        });
      } else if (
        item.style.backgroundColor == colorDisparoArcher &&
        item.innerText.length !== 0
      ) {
        //este segmento de codigo sirve para validar que se este eliminando la pieza
        document.querySelectorAll(".box").forEach((i) => {
          if (i.style.backgroundColor == colorSeleccionadoTablero) {
            let piezaAnterior = item.innerText;
            let pinkText2 = i.innerText;
            posicionPiezasGlobal[piezaAnterior] = "";
            item.innerText = "";
            coloring();
            insertImage();
            if (
              sPiezaMovimiento.includes("asesinoE") &&
              !sPiezaMovimiento.includes("asesinoE") &&
              !bMovioAsesinoElite
            ) {
              bMovioAsesinoElite = true;
            } else if (sPiezaMovimiento.includes("asesino") && !bMovioAsesino) {
              bMovioAsesino = true;
            } else {
              nTurno++;
              bMovioAsesino = false;
              bMovioAsesinoElite = false;
            }
            if (piezaAnterior.includes("rey")) {
              if (!bMovioAsesinoElite) {
                nTurno--;
              }
              //detectamos la posicion del rey que estan atacando
              const indexReyMuerto = arrReyes.indexOf(piezaAnterior);
              //detectamos la posicion del rey que esta ordenando el ataque.
              const indexReyOrden = arrReyes.indexOf(pinkText2[0] + "rey");
              if (indexReyMuerto < indexReyOrden) {
                nTurno--;
              }

              if (indexReyMuerto > -1) {
                // only splice array when item is found
                arrReyes.splice(indexReyMuerto, 1); // 2nd parameter means remove one item only
                //validamos que no disminuya el valor del arreglo para que no regrese a la primera posicion
              }
              if (arrReyes.length > 1) {
                mostrarMenuUnidadEspecial(true);
                sAgregarPiezaEspecial = "pieza";
                sReyEliminoTemp = piezaAnterior[0];
                return;
              } else {
                evaluartTurnoJugador(
                  `Jugador ${sJugador} disparo al rey ${piezaAnterior.substring(
                    1
                  )} ${getColorPorLetra(
                    piezaAnterior[0],
                    false
                  )} usando ${sPiezaMovimiento.substring(1)}`,
                  getPuntuajePieza(piezaAnterior),
                  piezaAnterior[0],
                  sTurnoJugador
                );
                return;
              }
            } else {
              evaluartTurnoJugador(
                `Jugador ${sJugador} disparo a la pieza ${piezaAnterior.substring(
                  1
                )} ${getColorPorLetra(
                  piezaAnterior[0],
                  false
                )} usando ${sPiezaMovimiento.substring(1)} `,
                getPuntuajePieza(piezaAnterior),
                piezaAnterior[0],
                sTurnoJugador
              );
              return;
            }
          }
        });
      }

      const col = eliminarNumeros(item.id);
      const row = eliminarLetras(item.id);

      // // Toggling the turn
      sPiezaMovimiento = item.innerText;
      if (
        item.innerText.includes(`${sTurnoJugador}archerE`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoArcherElite(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}archer`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoArcher(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}rey`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoRey(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}hacheroE`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoHacheroElite(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}hachero`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoHachero(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}lanceroE`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoLanceroElite(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}lancero`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoLancero(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}caballero`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoCaballero(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}asesinoE`) &&
        !bMovioAsesino
      ) {
        //Las unidades especiales que se llamen igual que el original deben ir primero para que el algoritno no lo confunda con la pieza normal
        movimientoAsesinoElite(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}asesino`) &&
        !bMovioAsesinoElite
      ) {
        movimientoAsesino(parseInt(row), col, item, bMovioAsesino);
      } else if (
        item.innerText.includes(`${sTurnoJugador}hechicero`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoHechicero(parseInt(row), col, item);
      } else if (
        item.innerText.includes(`${sTurnoJugador}canon`) &&
        !bMovioAsesino &&
        !bMovioAsesinoElite
      ) {
        movimientoCanon(parseInt(row), col, item);
      }

      reddish(item.innerText);
    });
  });

  // // Moving the element
  document.querySelectorAll(".box").forEach((hathiTest) => {
    hathiTest.addEventListener("click", function () {
      if (hathiTest.style.backgroundColor == colorSeleccionadoTablero) {
        pinkId = hathiTest.id;
        pinkText = hathiTest.innerText;
        document.querySelectorAll(".box").forEach((hathiTest2) => {
          hathiTest2.addEventListener("click", function () {
            if (
              hathiTest2.style.backgroundColor == colorOpciones &&
              hathiTest2.innerText.length == 0
            ) {
              document.getElementById(pinkId).innerText = "";
              hathiTest2.innerText = pinkText;
              coloring();
              insertImage();
              pinkId = "";
              pinkText = "";
            }
          });
        });
      }
    });
  });

  // Prvents from selecting multiple elements
  document.querySelectorAll(".box").forEach((ee) => {
    ee.addEventListener("click", function () {
      z = z + 1;
      if (z % 2 == 0 && ee.style.backgroundColor !== colorOpciones) {
        coloring();
      }
    });
  });
};

//indica el listado de las piesas del usuario
export const agregarImagenesListado = async (turnoUsuario) => {
  sTurnoJugador = turnoUsuario;
  await agregarImagenesListadoTablero(sTurnoJugador,arregloPiezas)
};

export const posicionPiezasJuego = (partida) => {
  arrReyes = [];
  posicionPiezasGlobal = {};
  if (partida.hasOwnProperty("posicionPiezasGlobal")) {
    //limpiamos las piezas del mapa para volverlas a colocar
    document.querySelectorAll(".box").forEach((ee) => {
      ee.innerHTML = "";
      ee.title = "";
      ee.style.cursor = "default";
    });
    for (const piecePosition in partida.posicionPiezasGlobal) {
      posicionPiezasGlobal[piecePosition] =
        partida.posicionPiezasGlobal[piecePosition];
      const div = document.getElementById(
        partida.posicionPiezasGlobal[piecePosition]
      );
      if (typeof div != "undefined" && div != null) {
        div.innerHTML = piecePosition.replace(" ", "");
        div.title =
          eliminarNumeros(piecePosition.substring(1)) +
          "\nPieza " +
          getColorPorLetra(piecePosition[0]);
        if (piecePosition.replace(/[0-9]/g, "").includes("rey")) {
          arrReyes.push(piecePosition.replace(/[0-9]/g, ""));
        }
      }
    }
  }
  insertImage();
};

export const coloring = () => {
  document.querySelectorAll(".box").forEach((colorNegro) => {
    coloringTablero(colorNegro)
  })
};

//function to not remove the same team element
const reddish = () => {
  document.querySelectorAll(".box").forEach((i1) => {
    if (i1.style.backgroundColor == colorSeleccionadoTablero) {
      document.querySelectorAll(".box").forEach((i2) => {
        if (
          i2.style.backgroundColor == colorOpciones ||
          i2.style.backgroundColor == colorDisparoArcher
        ) {
          if (i2.innerText.length !== 0) {
            let greenText = i2.innerText;
            let pinkText3 = i1.innerText;
            let pinkColor = Array.from(pinkText3).shift().toString();
            let greenColor = Array.from(greenText).shift().toString();
            //En esta validacion se pregunta si la pieza es del mismo valor (B,O) a otra del mismo
            if (pinkColor == greenColor) {
              i2.style.backgroundColor = colorTablero;
            }
          }
        }
      });
    }
  });
};

export const saltarTurno = () => {
  if (sAgregarPiezaEspecial === "") {
    if (!esTurnoJugadorTurno()) {
      return;
    }
    nTurno++;
  } else {
    mostrarMenuUnidadEspecial(false);
    pintarMapaOpacity(false);
    sAgregarPiezaEspecial = "";
    sReyEliminoTemp = "";
  }

  // Toggling the turn
  coloring();
  bMovioAsesino = false;
  bMovioAsesinoElite = false;
  evaluartTurnoJugador(`Jugador ${sJugador} salto turno`, 0, "", "");
};

const evaluartTurnoJugador = (
  sAccionJugador,
  nPuntuaje,
  sJugadorPiezaEliminada,
  sJugadorEliminoPieza
) => {
  detenerCronometro();
  if (nTurno + 1 > arrReyes.length) {
    nTurno = 0;
  }
  actualizarPiezasPosicionJuego(
    false,
    sAccionJugador,
    nPuntuaje,
    sJugadorPiezaEliminada,
    sJugadorEliminoPieza
  );
};
//toast representa el metodo para mostrar mensaje del jugador en turno
export const indicarSiguienteJugador = () => {
  if (arrReyes.length <= 0) {
    return;
  }

  if (
    document.getElementById(`targetaJugador0`) !== null &&
    !document.getElementById(`targetaJugador0`).classList.contains("opa-50")
  ) {
    document.getElementById(`targetaJugador0`).classList.add("opa-50");
  }

  if (
    document.getElementById(`targetaJugador1`) !== null &&
    !document.getElementById(`targetaJugador1`).classList.contains("opa-50")
  ) {
    document.getElementById(`targetaJugador1`).classList.add("opa-50");
  }

  if (
    document.getElementById(`targetaJugador2`) !== null &&
    !document.getElementById(`targetaJugador2`).classList.contains("opa-50")
  ) {
    document.getElementById(`targetaJugador2`).classList.add("opa-50");
  }

  if (
    document.getElementById(`targetaJugador3`) !== null &&
    !document.getElementById(`targetaJugador3`).classList.contains("opa-50")
  ) {
    document.getElementById(`targetaJugador3`).classList.add("opa-50");
  }
  switch (arrReyes[nTurno][0]) {
    case "O":
      if (
        document.getElementById(`targetaJugador0`) !== null &&
        document.getElementById(`targetaJugador0`).classList.contains("opa-50")
      ) {
        document.getElementById(`targetaJugador0`).classList.remove("opa-50");
      }
      break;
    case "B":
      if (
        document.getElementById(`targetaJugador1`) !== null &&
        document.getElementById(`targetaJugador1`).classList.contains("opa-50")
      ) {
        document.getElementById(`targetaJugador1`).classList.remove("opa-50");
      }
      break;
    case "R":
      if (
        document.getElementById(`targetaJugador2`) !== null &&
        document.getElementById(`targetaJugador2`).classList.contains("opa-50")
      ) {
        document.getElementById(`targetaJugador2`).classList.remove("opa-50");
      }
      break;
    case "P":
      if (
        document.getElementById(`targetaJugador3`) !== null &&
        document.getElementById(`targetaJugador3`).classList.contains("opa-50")
      ) {
        document.getElementById(`targetaJugador3`).classList.remove("opa-50");
      }
      break;
  }
  return esTurnoJugadorTurno();
};

export const setCantidadJugadores = (cantidadJugadoresT) => {
  nCantidadJugadores = cantidadJugadoresT;
};

export const setPartida = (partidaT) => {
  partida = partidaT;
};

export const setTurno = (turno) => {
  nTurno = turno;
};

export const setJugador = (sJugadorT) => {
  sJugador = sJugadorT;
};

const esTurnoJugadorTurno = () => {
  if (arrReyes === null || arrReyes.length <= 0) {
    return false;
  }
  if (sTurnoJugador === arrReyes[nTurno][0]) {
    return true;
  }
  return false;
};

const actualizarPiezasPosicionJuego = (
  bRendirse,
  sAccionUsuario,
  nPuntuaje,
  sJugadorPiezaEliminada,
  sJugadorEliminoPieza
) => {
  let vResultado = {};
  vResultado.numeroPartida = partida.numeroPartida;
  vResultado.posicionPiezasGlobal = posicionPiezasGlobal;
  vResultado.accionUsuario = sAccionUsuario;
  vResultado.puntuaje = nPuntuaje;
  vResultado.jugadorPiezaEliminada = sJugadorPiezaEliminada;
  vResultado.jugadorEliminoPieza = sJugadorEliminoPieza;
  //if(!bRendirse){
  vResultado.turno = nTurno;
  //}

  actualizarEspecifico("conquerGame/actualizarPiezasPosicionJuego", vResultado)
    .then((resultado) => {})
    .catch((error) => {
      swal({
        title: "Error",
        text: error.toString(),
        icon: "error",
        button: "OK",
      });
    });
};

export const evaluarResultadoPartida = (partidaT) => {
  //detectamos que jugador gano
  return getColorPorLetra(partidaT.ganador) + " Ganan !!";
};

export const conometro = (partidaT) => {
  if (!partidaT.hasOwnProperty("fechaTurno")) {
    return;
  }
  detenerCronometro();
  var countDownDate = new Date(partidaT.fechaTurno).getTime() + 1 * 60000;
  // Update the count down every 1 second
  nIntervalo = setInterval(function () {
    // Get today's date and time
    var now = Date.now(partidaT.fechaTurno);

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("temporizador").innerHTML =
      minutes + "m " + seconds + "s ";
    if (esTurnoJugadorTurno()) {
      document.getElementById("temporizador").classList.remove("col-gray");
      document.getElementById("tiempo").classList.remove("col-gray");
      if (seconds === 20) {
        document.getElementById("temporizador").classList.add("col-orange");
        document.getElementById("tiempo").classList.add("col-orange");
      } else if (seconds === 10) {
        document.getElementById("temporizador").classList.remove("col-orange");
        document.getElementById("tiempo").classList.remove("col-orange");
        document.getElementById("temporizador").classList.add("col-red");
        document.getElementById("tiempo").classList.add("col-red");
      }
    } else {
      document.getElementById("temporizador").classList.remove("col-orange");
      document.getElementById("tiempo").classList.remove("col-orange");
      document.getElementById("temporizador").classList.remove("col-red");
      document.getElementById("tiempo").classList.remove("col-red");
      document.getElementById("temporizador").classList.add("col-gray");
      document.getElementById("tiempo").classList.add("col-gray");
    }

    // If the count down is over, write some text
    if (distance < 0) {
      saltarTurno();
      document.getElementById("temporizador").innerHTML = 0 + "m " + 0 + "s ";
    }
  }, 1000);
};

export const detenerCronometro = () => {
  if (nIntervalo != null) {
    clearInterval(nIntervalo);
    nIntervalo = null;
  }
};

export const rendirseJugador = () => {
  posicionPiezasGlobal[sTurnoJugador + "rey"] = "";
  actualizarPiezasPosicionJuego(
    true,
    `Jugador ${sJugador} se rindio`,
    0,
    sTurnoJugador,
    ""
  );
};

export const colocarPiezaEspecial = (sPieza) => {
  pintarMapaOpacity(true);
  sAgregarPiezaEspecial = sPieza;
};

export const pintarMapaOpacity = (bPintarOpacity) => {
  document.querySelectorAll(".box").forEach((colorNegro) => {
    if (bPintarOpacity) {
      const nValor = eliminarLetras(colorNegro.id);
      switch (partida.cantidadJugadores) {
        case 3:
          if (
            (sTurnoJugador === "O" &&
              nValor <= parseInt(tamanoTableroLargo * 0.66) + 1) ||
            (sTurnoJugador === "B" &&
              (nValor <= parseInt(tamanoTableroLargo * 0.33) + 1 ||
                nValor >=
                  1 + (tamanoTableroLargo / partida.cantidadJugadores) * 2)) ||
            (sTurnoJugador === "R" &&
              nValor >= parseInt(tamanoTableroLargo * 0.33) + 2)
          ) {
            colorNegro.style.opacity = 0.3;
          } else {
            colorNegro.style.opacity = 1;
          }
          break;
        case 4:
          //eliminacion de numeros para el lado vertical
          const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id));
          if (
            (sTurnoJugador === "O" &&
              ((nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
                (nValorCol >= tamanoTableroAncho / 2 + 1 &&
                  nValorCol <= tamanoTableroAncho))) ||
            (sTurnoJugador === "B" &&
              ((nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
                (nValorCol >= 1 && nValorCol <= tamanoTableroAncho / 2))) ||
            (sTurnoJugador === "R" &&
              ((nValor >= tamanoTableroLargo / 2 + 1 &&
                nValor <= tamanoTableroLargo) ||
                (nValorCol >= tamanoTableroAncho / 2 + 1 &&
                  nValorCol <= tamanoTableroAncho))) ||
            (sTurnoJugador === "P" &&
              ((nValor >= tamanoTableroLargo / 2 + 1 &&
                nValor <= tamanoTableroLargo) ||
                (nValorCol >= 1 && nValorCol <= tamanoTableroAncho / 2)))
          ) {
            colorNegro.style.opacity = 0.3;
          } else {
            colorNegro.style.opacity = 1;
          }
          break;
      }
    } else {
      colorNegro.style.opacity = 1;
    }
  });
};

export const agregarPiezaEspecialClick = (sId) => {
  //En este segmento detectamos si hay otra pieza en ese lugar
  let bVarible = false;
  //Se busca si la posicion ya estaba siendo usada por otra unidad
  Object.keys(partida.posicionPiezasGlobal).forEach((col) => {
    if (partida.posicionPiezasGlobal[col] === sId) {
      bVarible = true;
      return;
    }
  });

  if (bVarible) {
    alert("Ya se encuentra una pieza en esta posición");
    return;
  }

  //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
  if (
    validaPosicionPieza(
      sAgregarPiezaEspecial
        .replace(/\s/g, "")
        .substring(1, sAgregarPiezaEspecial.length),
      sId,
      partida.cantidadJugadores,
      sTurnoJugador
    )
  ) {
    return;
  }
  nTurno++;
  posicionPiezasGlobal[sTurnoJugador + sAgregarPiezaEspecial] = sId;
  let sPiezaEspecialTemp = sAgregarPiezaEspecial;
  sAgregarPiezaEspecial = "";

  let sReyEliminoTempT = sReyEliminoTemp;
  sReyEliminoTemp = "";

  pintarMapaOpacity(false);
  evaluartTurnoJugador(
    `Jugador ${sJugador} Elimino al rey ${getColorPorLetra(
      sReyEliminoTempT,
      false
    )} y accedio a la pieza especial ${sPiezaEspecialTemp}`,
    100,
    sReyEliminoTempT,
    sTurnoJugador
  );
};

export const getColorPorLetra = (sLetra, bPlural = true) => {
  //detectamos que jugador gano
  switch (sLetra) {
    case "O":
      return bPlural ? "Naranjas" : "Naranjas";
    case "B":
      return bPlural ? "Negros" : "Negro";
    case "R":
      return bPlural ? "Rojos" : "Rojo";
    case "P":
      return bPlural ? "Morados" : "Morado";
    default:
      return "";
  }
};

const getPuntuajePieza = (sPieza) => {
  if (sPieza.includes(`archerE`)) {
    return valorPuntosArcherElite;
  } else if (sPieza.includes(`archer`)) {
    return valorPuntosArcher;
  } else if (sPieza.includes(`rey`)) {
    return valorPuntosRey;
  } else if (sPieza.includes(`hacheroE`)) {
    return valorPuntosHacheroElite;
  } else if (sPieza.includes(`hachero`)) {
    return valorPuntosHachero;
  } else if (sPieza.includes(`lanceroE`)) {
    return valorPuntosLanceroElite;
  } else if (sPieza.includes(`lancero`)) {
    return valorPuntosLancero;
  } else if (sPieza.includes(`caballero`)) {
    return valorPuntosCaballero;
  } else if (sPieza.includes(`asesinoE`)) {
    return valorPuntosAsesinoElite;
  } else if (sPieza.includes(`asesino`)) {
    return valorPuntosAsesino;
  } else if (sPieza.includes(`hechicero`)) {
    return valorPuntosHechicero;
  } else if (sPieza.includes(`canon`)) {
    return valorPuntosCanon;
  } else {
    return 0;
  }
};