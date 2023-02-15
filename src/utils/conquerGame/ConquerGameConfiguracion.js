import {
  colorLago,
  colorSeleccionadoListado,
  colorSeleccionadoTablero,
  colorTablero,
  lagos,
  validaPosicionPieza,
  coloring as coloringTablero,
  insertImage,
  seccionTableroJugador
} from "./ConfiguracionTableroConquerGame.js";
import swal from "sweetalert";
import { actualizarEspecifico } from "../ConexionAPI.js";

let sTurnoJugador = "Z";
let vPartida = {};
let sPiezaAColocar = "";
let piezaSeleccionada = null;
let vArregloPiezas = null;

export const setTurnoJugador = (turnoUsuario) => {
  sTurnoJugador = turnoUsuario;
};

export const setArregloPiezas = (arrPiezas) => {
  console.log('entre')
  vArregloPiezas = arrPiezas;
};

//indica el listado de las piesas del usuario
export const seleccionImagenListadoPieza = async (nombreDiv) => {
  //guardamos la pieza
  const hathiTest = document.getElementById(nombreDiv);
  sPiezaAColocar = sTurnoJugador + hathiTest.innerText;
  //Segmento para deselecconar las opciones tanto del tablero como del listado

  if (piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id) {
    console.log(piezaSeleccionada)
    console.log(piezaSeleccionada.id)
    console.log(hathiTest)
    piezaSeleccionada.style.backgroundColor = "rgb(255, 255, 255)";
    let nValor = vArregloPiezas.findIndex(
      (obj) => obj.nombre === piezaSeleccionada.innerText.replace(/\s/g, "")
    );
    console.log(vArregloPiezas)
    if (nValor !== -1 && vArregloPiezas[nValor].posicion !== "") {
      if (lagos.includes(vArregloPiezas[nValor].posicion)) {
        document.getElementById(
          vArregloPiezas[nValor].posicion
        ).style.backgroundColor = colorLago;
      } else {
        document.getElementById(
          vArregloPiezas[nValor].posicion
        ).style.backgroundColor = colorTablero;
      }
    }
    piezaSeleccionada = null;
  }
  //pintar el seleccionado normal o gris sobre la misma pieza
  if (hathiTest.style.backgroundColor === colorSeleccionadoListado) {
    hathiTest.style.backgroundColor = "rgb(255, 255, 255)";
    let nValor = vArregloPiezas.findIndex(
      (obj) =>
        obj.nombre === hathiTest.innerText.replace(/\s/g, "")
    );
    if (nValor !== -1 && vArregloPiezas[nValor].posicion !== "") {
      if (lagos.includes(vArregloPiezas[nValor].posicion)) {
        document.getElementById(
          vArregloPiezas[nValor].posicion
        ).style.backgroundColor = colorLago;
      } else {
        document.getElementById(
          vArregloPiezas[nValor].posicion
        ).style.backgroundColor = colorTablero;
      }
    }
    piezaSeleccionada = null;
  } else {
    hathiTest.style.backgroundColor = colorSeleccionadoListado;
    piezaSeleccionada = hathiTest;
    //Detectamos que si la pieza ya fue puesta la marcamos para no confundir al usuario
    let nValor = vArregloPiezas.findIndex(
      (obj) => obj.nombre === hathiTest.innerText.replace(/\s/g, "")
    );
    if (nValor !== -1 && vArregloPiezas[nValor].posicion !== "") {
      document.getElementById(
        vArregloPiezas[nValor].posicion
      ).style.backgroundColor = colorSeleccionadoTablero;
    }
  }
};

export const agregarDivsTablero = () => {
  // Moving the element
  document.querySelectorAll(".box").forEach((hathiTest) => {
    hathiTest.addEventListener("click", function () {
      if (
        sPiezaAColocar === "" ||
        piezaSeleccionada === "" ||
        piezaSeleccionada === null
      ) {
        return;
      }

      //En este segmento detectamos si hay otra pieza en ese lugar
      let nValor = vArregloPiezas.findIndex(
        (obj) => obj.posicion === hathiTest.id
      );
      if (nValor !== -1) {
        alert("Ya se encuentra una pieza en esta posición");
        return;
      }

      //Realizmaos la misma evaluacion pero ahora con todas las piezas de los jugadores
      if(vPartida.tipoJuego === 2 && vPartida.hasOwnProperty("posicionPiezasGlobal")){
        for (const piecePosition in vPartida.posicionPiezasGlobal) {
          if(vPartida.posicionPiezasGlobal[piecePosition] === hathiTest.id){
            alert("Ya se encuentra una pieza de un compañero en esta posición");
            return;
          }
        }
      }
      //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
      if (
        validaPosicionPieza(
          sPiezaAColocar.replace(/\s/g, "").substring(1, sPiezaAColocar.length),
          hathiTest.id,
          vPartida.cantidadJugadores,
          sTurnoJugador,
          vPartida.tipoJuego
        )
      ) {
        return;
      }

      //En este segmento detectaremos que si la pieza ya fue colocada, esta se eliminara del mapa para ponerla de nuevo
      nValor = vArregloPiezas.findIndex(
        (obj) =>
          obj.nombre ===
          sPiezaAColocar.replace(/\s/g, "").substring(1, sPiezaAColocar.length)
      );
      console.log("agregar valores")
      console.log(nValor)
      console.log(vArregloPiezas[nValor].posicion )
      if (nValor !== -1 && vArregloPiezas[nValor].posicion !== "") {
        document.getElementById(vArregloPiezas[nValor].posicion).innerHTML = "";
        if (lagos.includes(vArregloPiezas[nValor].posicion)) {
          document.getElementById(
            vArregloPiezas[nValor].posicion
          ).style.backgroundColor = colorLago;
        } else {
          document.getElementById(
            vArregloPiezas[nValor].posicion
          ).style.backgroundColor = colorTablero;
        }
      }

      hathiTest.style.backgroundColor = colorSeleccionadoTablero;
      //agrega el escrito de la pieza a color
      hathiTest.innerHTML = sPiezaAColocar;
      //se le asigna la nueva posicion
      vArregloPiezas[nValor].posicion = hathiTest.id;

      insertImage();

      if(vPartida.tipoJuego === 2){
        const vPeticion = {};
        vPeticion.numeroPartida = vPartida.numeroPartida;
        vPeticion.piezasId = hathiTest.innerText;
        vPeticion.posicion = hathiTest.id;
        if (vPeticion.piezas === null) return;
        actualizarEspecifico("conquerGame/agregarPiezaTablero/", vPeticion)
        .then((resultado) => {
          
        })
        .catch((error) => {
          swal({
            title: "Error",
            text: error.toString(),
            icon: "error",
            button: "OK",
          });
        });
      }

    });
  });
};

export const coloring = (nTipoJuego) => {
  document.querySelectorAll(".box").forEach((vDivTablero) => {
    coloringTablero(vDivTablero)
    seccionTableroJugador(vDivTablero,sTurnoJugador,vPartida.cantidadJugadores,true,nTipoJuego)
  });
}

export const guardarConfiguracionPiezas = () => {
  //Validamos que no halla piezas vacias
  for (const piecePosition in vArregloPiezas) {
    if (vArregloPiezas[piecePosition].posicion === "") {
      swal({
        title: "Error",
        text: "Debe agregar todas las piezas al tablero primero",
        icon: "error",
        button: "OK",
      });
      return null;
    }
  }
  //agregamos la informaicon a un arreglo para poderlo limpar la info despues
  const piezasGame = {};
  for (const piecePosition in vArregloPiezas) {
    piezasGame[sTurnoJugador + vArregloPiezas[piecePosition].nombre] =
      vArregloPiezas[piecePosition].posicion;
  }
  sPiezaAColocar = "";
  return piezasGame;
};

export const setPartida= (vPartidaT) => {
  vPartida = vPartidaT;
};

//Este metodo es para indicar que el jugador esta colocando las piezas en el mapa, solo se usa en partidas de equipo
export const posicionPiezaJuego= (partidaJugador,turnoUsuario) => {
  console.log('entre posicionPiezaJuego' )
  document.querySelectorAll(".box").forEach((ee) => {
    ee.innerHTML = "";
    ee.title = "";
    ee.style.cursor = "default";
  });

  if(turnoUsuario === undefined){
    turnoUsuario = sTurnoJugador
  }
  for (const piecePosition in partidaJugador.posicionPiezasGlobal) {
    if((partidaJugador.cantidadJugadores === 4 && 
      (((turnoUsuario !== "R" && turnoUsuario !== "P") && (piecePosition[0] === "R" || piecePosition[0] === "P")) || 
      ((turnoUsuario !== "O" && turnoUsuario !== "B") && (piecePosition[0] === "O" || piecePosition[0] === "B")))) || 
      (partidaJugador.cantidadJugadores === 6 && 
        (((turnoUsuario !== "P" && turnoUsuario !== "G" && turnoUsuario !== "Y") && (piecePosition[0] === "P" || piecePosition[0] === "G" || piecePosition[0] === "Y")) || 
        ((turnoUsuario !== "O" && turnoUsuario !== "B" && turnoUsuario !== "R") && (piecePosition[0] === "O" || piecePosition[0] === "B" || piecePosition[0] === "R"))))){
      continue;
    }
    var div = document.getElementById(
      partidaJugador.posicionPiezasGlobal[piecePosition]
    );
    if (typeof div != "undefined" && div != null) {
      div.innerHTML = piecePosition.replace(" ", "");
    }
    let nValor = vArregloPiezas.findIndex(
      (obj) => obj.nombre === piecePosition.substring(1,piecePosition.length) &&  turnoUsuario === piecePosition[0]
    );
    if(nValor >= 0){
      console.log(vArregloPiezas[nValor].posicion)
      vArregloPiezas[nValor].posicion = partidaJugador.posicionPiezasGlobal[piecePosition]
    }
  }
  /*DESPUES*/
  insertImage();
};