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
  seccionTableroJugador
} from "./ConfiguracionTableroConquerGame.js";
import swal from "sweetalert";

let sTurno = "O";
let nCantidadJugadores = 0;
let sPiezaAColocar = "";
let piezaSeleccionada = null;

let arregloPiezas = [
  {
    nombre: "hachero1",
    posicion: "",
    icono: "hachero",
    direccion: "",
  },
  {
    nombre: "hachero2",
    posicion: "",
    icono: "hachero",
    direccion: "",
  },
  {
    nombre: "lancero1",
    posicion: "",
    icono: "lancero",
    direccion: "",
  },
  {
    nombre: "lancero2",
    posicion: "",
    icono: "lancero",
    direccion: "",
  },
  {
    nombre: "lancero3",
    posicion: "",
    icono: "lancero",
    direccion: "",
  },
  {
    nombre: "lancero4",
    posicion: "",
    icono: "lancero",
    direccion: "",
  },
  {
    nombre: "archer",
    posicion: "",
    icono: "archer",
    direccion: "",
  },
  {
    nombre: "asesino",
    posicion: "",
    icono: "asesino",
    direccion: "",
  },
  {
    nombre: "caballero1",
    posicion: "",
    icono: "caballero",
    direccion: "",
  },
  {
    nombre: "caballero2",
    posicion: "",
    icono: "caballero",
    direccion: "",
  },
  {
    nombre: "caballero3",
    posicion: "",
    icono: "caballero",
    direccion: "",
  },
  {
    nombre: "caballero4",
    posicion: "",
    icono: "caballero",
    direccion: "",
  },
  {
    nombre: "rey",
    posicion: "",
    icono: "rey",
    direccion: "",
  },
];

export const limpiarVariables = () => {
  for (const piecePosition in arregloPiezas) {
    arregloPiezas[piecePosition].direccion = "";
    arregloPiezas[piecePosition].posicion = "";
  }
};

//indica el listado de las piesas del usuario
export const agregarImagenesListado = async (turnoUsuario) => {
  sTurno = turnoUsuario;
  arregloPiezas = await agregarImagenesListadoTablero(sTurno,arregloPiezas);

  document.querySelectorAll(".iconoMenu").forEach((hathiTest) => {
    hathiTest.addEventListener("click", function () {
      //guardamos la pieza
      sPiezaAColocar = sTurno + hathiTest.innerText;
      //Segmento para deselecconar las opciones tanto del tablero como del listado
      if (piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id) {
        piezaSeleccionada.style.backgroundColor = "rgb(255, 255, 255)";
        let nValor = arregloPiezas.findIndex(
          (obj) => obj.nombre === piezaSeleccionada.innerText.replace(/\s/g, "")
        );
        if (nValor !== -1 && arregloPiezas[nValor].posicion !== "") {
          if (lagos.includes(arregloPiezas[nValor].posicion)) {
            document.getElementById(
              arregloPiezas[nValor].posicion
            ).style.backgroundColor = colorLago;
          } else {
            document.getElementById(
              arregloPiezas[nValor].posicion
            ).style.backgroundColor = colorTablero;
          }
        }
        piezaSeleccionada = null;
      }
      //pintar el seleccionado normal o gris sobre la misma pieza
      if (hathiTest.style.backgroundColor === colorSeleccionadoListado) {
        hathiTest.style.backgroundColor = "rgb(255, 255, 255)";
        let nValor = arregloPiezas.findIndex(
          (obj) =>
            obj.nombre === sTurno + hathiTest.innerText.replace(/\s/g, "")
        );
        if (nValor !== -1 && arregloPiezas[nValor].posicion !== "") {
          if (lagos.includes(arregloPiezas[nValor].posicion)) {
            document.getElementById(
              arregloPiezas[nValor].posicion
            ).style.backgroundColor = colorLago;
          } else {
            document.getElementById(
              arregloPiezas[nValor].posicion
            ).style.backgroundColor = colorTablero;
          }
        }
        piezaSeleccionada = null;
      } else {
        hathiTest.style.backgroundColor = colorSeleccionadoListado;
        piezaSeleccionada = hathiTest;
        //Detectamos que si la pieza ya fue puesta la marcamos para no confundir al usuario
        let nValor = arregloPiezas.findIndex(
          (obj) => obj.nombre === hathiTest.innerText.replace(/\s/g, "")
        );
        if (nValor !== -1 && arregloPiezas[nValor].posicion !== "") {
          document.getElementById(
            arregloPiezas[nValor].posicion
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
      let nValor = arregloPiezas.findIndex(
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
      nValor = arregloPiezas.findIndex(
        (obj) =>
          obj.nombre ===
          sPiezaAColocar.replace(/\s/g, "").substring(1, sPiezaAColocar.length)
      );
      if (nValor !== -1 && arregloPiezas[nValor].posicion !== "") {
        document.getElementById(arregloPiezas[nValor].posicion).innerHTML = "";
        if (lagos.includes(arregloPiezas[nValor].posicion)) {
          document.getElementById(
            arregloPiezas[nValor].posicion
          ).style.backgroundColor = colorLago;
        } else {
          document.getElementById(
            arregloPiezas[nValor].posicion
          ).style.backgroundColor = colorTablero;
        }
      }

      hathiTest.style.backgroundColor = colorSeleccionadoTablero;
      //agrega el escrito de la pieza a color
      hathiTest.innerHTML = sPiezaAColocar;
      //se le asigna la nueva posicion
      arregloPiezas[nValor].posicion = hathiTest.id;

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
  for (const piecePosition in arregloPiezas) {
    if (arregloPiezas[piecePosition].posicion === "") {
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
  for (const piecePosition in arregloPiezas) {
    piezasGame[sTurno + arregloPiezas[piecePosition].nombre] =
      arregloPiezas[piecePosition].posicion;
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