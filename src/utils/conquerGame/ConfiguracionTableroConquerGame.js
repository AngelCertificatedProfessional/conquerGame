import { alfabetoANumero, eliminarLetras, eliminarNumeros } from "../UtileriasPagina";

export const colorTablero = "rgb(240, 201, 150)";
export const colorMontana = "rgb(14, 155, 0)";
export const colorLago = "rgb(63, 234, 229)";
export const colorOpciones = "rgb(195, 208, 39)";
export const colorDisparoArcher = "rgb(223, 55, 19)";
export const colorSeleccionadoTablero = "rgb(213, 92, 209)";
export const colorSeleccionadoListado = "rgb(72, 66, 65)";
export const colorCasstilloEntrada = "rgb(185, 185, 179)";
export const colorCasstilloSala = "rgb(94, 94, 89)";
export const tamanoTableroLargo = 24;
export const tamanoTableroAncho = 24;
export const cantidadJugadores = 3;
export const arregloJugadores = ["O", "B", "R", "B", "G", "Y"];

export const validaPiezaMontana = (idDiv) => {
  if (montanas.includes(idDiv)) {
    return true;
  }
  return false;
};

export const validaPiezaLago = (idDiv) => {
  if (lagos.includes(idDiv)) {
    return true;
  }
  return false;
};

//Este metodo evalua si la pieza la estan poniendo en cesped rio o esta invadiendo terreno
export const validaPosicionPieza = (sPieza, sPosicion,nCantidadJugadores,sTurno) => {
  const nValor = eliminarLetras(sPosicion);

  //Evaluaremos si la pieza esta invadiendo terreno

  switch (nCantidadJugadores) {
    case 2:
      if (
        (sTurno === "O" && nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
        (sTurno === "B" &&
          nValor >= tamanoTableroLargo / 2 + 1 &&
          nValor <= tamanoTableroLargo)
      ) {
        alert("Esta pieza esta invadiendo terreno");
        return true;
      }
      break;
    case 3:
      if (
        (sTurno === "O" && nValor <= parseInt(tamanoTableroLargo * 0.66) + 1) ||
        (sTurno === "B" &&
          (nValor <= parseInt(tamanoTableroLargo * 0.33) + 1 ||
            nValor >= 1 + (tamanoTableroLargo / nCantidadJugadores) * 2)) ||
        (sTurno === "R" && nValor >= parseInt(tamanoTableroLargo * 0.33) + 2)
      ) {
        alert("Esta pieza esta invadiendo terreno");
        return true;
      }
      break;
    case 4:
      //eliminacion de numeros para el lado vertical
      const nValorCol = alfabetoANumero(eliminarNumeros(sPosicion));
      if (
        (sTurno === "O" &&
          ((nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
            (nValorCol >= tamanoTableroAncho / 2 + 1 &&
              nValorCol <= tamanoTableroAncho))) ||
        (sTurno === "B" &&
          ((nValor >= 1 && nValor <= tamanoTableroLargo / 2) ||
            (nValorCol >= 1 && nValorCol <= tamanoTableroAncho / 2))) ||
        (sTurno === "R" &&
          ((nValor >= tamanoTableroLargo / 2 + 1 &&
            nValor <= tamanoTableroLargo) ||
            (nValorCol >= tamanoTableroAncho / 2 + 1 &&
              nValorCol <= tamanoTableroAncho))) ||
        (sTurno === "P" &&
          ((nValor >= tamanoTableroLargo / 2 + 1 &&
            nValor <= tamanoTableroLargo) ||
            (nValorCol >= 1 && nValorCol <= tamanoTableroAncho / 2)))
      ) {
        alert("Esta pieza esta invadiendo terreno");
        return true;
      }
  }

  if (
    (eliminarNumeros(sPieza) === "caballero" ||
      eliminarNumeros(sPieza) === "castillo") &&
    lagos.includes(sPosicion)
  ) {
    alert("Esta pieza no puede invadir un lago");
    return true;
  }
  if (montanas.includes(sPosicion)) {
    alert("Esta pieza no puede invadir una montaña");
    return true;
  }
};


export const montanas = [
  "1F",
  "1G",
  "2V",
  "2W",
  "5L",
  "5M",
  "5P",
  "6M",
  "6P",
  "6R",
  "6S",
  "6T",
  "6D",
  "6E",
  "6F",
  "6G",
  "7Q",
  "8P",
  "8Q",
  "8T",
  "11U",
  "11V",
  "10V",
  "10W",
  "5B",
  "4E",
  "7F",
  "8F",
  "8G",
  "11C",
  "11D",
  "11H",
  "11I",
  "10I",
  "13G",
  "18G",
  "19G",
  "19F",
  "17F",
  "16F",
  "16E",
  "19A",
  "19B",
  "21E",
  "21F",
  "22F",
  "23K",
  "17H",
  "16J",
  "16K",
  "17K",
  "13N",
  "13O",
  "17N",
  "16N",
  "21R",
  "23W",
  "19U",
  "23O",
  "22O",
  "20P",
  "20Q",
  "19P",
  "18Q",
  "17R",
  "21Q",
  "22R",
  "23T",
];

export const lagos = [
  "4B",
  "5F",
  "8H",
  "11G",
  "13F",
  "18F",
  "22E",
  "20A",
  "18U",
  "16X",
  "18R",
  "23S",
  "4U",
  "5V",
  "6O",
  "11T",
];

export const arregloPiezas = [
  {
    nombre: "hachero1",
    icono: "hachero",
  },
  {
    nombre: "hachero2",
    icono: "hachero",
  },
  {
    nombre: "lancero1",
    icono: "lancero",
  },
  {
    nombre: "lancero2",
    icono: "lancero",
  },
  {
    nombre: "lancero3",
    icono: "lancero",
  },
  {
    nombre: "lancero4",
    icono: "lancero",
  },
  {
    nombre: "archer",
    icono: "archer",
  },
  {
    nombre: "asesino",
    icono: "asesino",
  },
  {
    nombre: "caballero1",
    icono: "caballero",
  },
  {
    nombre: "caballero2",
    icono: "caballero",
  },
  {
    nombre: "caballero3",
    icono: "caballero",
  },
  {
    nombre: "caballero4",
    icono: "caballero",
  },
  {
    nombre: "rey",
    icono: "rey",
  },
];
