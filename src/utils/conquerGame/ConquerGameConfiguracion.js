import {
  colorLago,
  colorSeleccionadoListado,
  colorSeleccionadoTablero,
  colorTablero,
  lagos,
  validaPosicionPieza,
  agregarImagenesListado as agregarImagenesListadoTablero,
  agregarDivsTablero as agregarDivsTableroConfiguracion,
  coloring as coloringTablero,
  insertImage,
  seccionTableroJugador,
  arregloPiezas
} from "./ConfiguracionTableroConquerGame.js";
import swal from "sweetalert";

let sTurno = "O";
let nCantidadJugadores = 0;
let sPiezaAColocar = "";
let piezaSeleccionada = null;

let vArregloPiezas = arregloPiezas;

export const limpiarVariables = () => {
  for (const piecePosition in vArregloPiezas) {
    vArregloPiezas[piecePosition].direccion = "";
    vArregloPiezas[piecePosition].posicion = "";
  }
};

//indica el listado de las piesas del usuario
export const agregarImagenesListado = async (turnoUsuario) => {
  sTurno = turnoUsuario;
  vArregloPiezas = await agregarImagenesListadoTablero(sTurno,vArregloPiezas);

  document.querySelectorAll(".iconoMenu").forEach((hathiTest) => {
    hathiTest.addEventListener("click", function () {
      //guardamos la pieza
      sPiezaAColocar = sTurno + hathiTest.innerText;
      //Segmento para deselecconar las opciones tanto del tablero como del listado
      if (piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id) {
        piezaSeleccionada.style.backgroundColor = "rgb(255, 255, 255)";
        let nValor = vArregloPiezas.findIndex(
          (obj) => obj.nombre === piezaSeleccionada.innerText.replace(/\s/g, "")
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
      }
      //pintar el seleccionado normal o gris sobre la misma pieza
      if (hathiTest.style.backgroundColor === colorSeleccionadoListado) {
        hathiTest.style.backgroundColor = "rgb(255, 255, 255)";
        let nValor = vArregloPiezas.findIndex(
          (obj) =>
            obj.nombre === sTurno + hathiTest.innerText.replace(/\s/g, "")
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
    });
  });
};

export const agregarDivsTablero = () => {
  agregarDivsTableroConfiguracion();

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

      //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
      if (
        validaPosicionPieza(
          sPiezaAColocar.replace(/\s/g, "").substring(1, sPiezaAColocar.length),
          hathiTest.id,
          nCantidadJugadores,
          sTurno
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
    });
  });
};

export const coloring = () => {
  document.querySelectorAll(".box").forEach((vDivTablero) => {
    coloringTablero(vDivTablero)
    seccionTableroJugador(vDivTablero,sTurno,nCantidadJugadores,true)
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
    piezasGame[sTurno + vArregloPiezas[piecePosition].nombre] =
      vArregloPiezas[piecePosition].posicion;
  }
  sPiezaAColocar = "";
  return piezasGame;
};

export const setCantidadJugadores = (cantidadJugadoresT) => {
  nCantidadJugadores = cantidadJugadoresT;
};

export const posicionPiezaJugador = (partidaJugador) => {
  for (const piecePosition in partidaJugador.posicionPiezasJugador) {
    var div = document.getElementById(
      partidaJugador.posicionPiezasJugador[piecePosition]
    );
    div.innerHTML = piecePosition.replace(" ", "");
  }
  insertImage();
};