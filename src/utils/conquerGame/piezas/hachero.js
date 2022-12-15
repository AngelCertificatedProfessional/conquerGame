import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js";
import {
  colorOpciones,
  colorSeleccionadoTablero,
  tamanoTableroAncho,
  tamanoTableroLargo,
  validaPiezaMontana,
} from "../ConfiguracionTableroConquerGame.js";
export const valorPuntos = 25;
export const valorPuntosElite = 40;
export const movimientoHachero = (row, col, item) => {
  //Este
  let nCol = alfabetoANumero(col);
  if (nCol < tamanoTableroAncho) {
    if (!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol + 1)}`)) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol + 1)}`
      ).style.backgroundColor = colorOpciones;
    }
  }
  //Oeste
  if (nCol > 1) {
    if (!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol - 1)}`)) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol - 1)}`
      ).style.backgroundColor = colorOpciones;
    }
  }
  //Norte
  if (row < tamanoTableroLargo) {
    if (!validaPiezaMontana(`${row + 1}${numeroAAlfabeto(nCol)}`)) {
      document.getElementById(
        `${row + 1}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
    }
  }
  //Sur
  if (row > 1) {
    if (!validaPiezaMontana(`${row - 1}${numeroAAlfabeto(nCol)}`)) {
      document.getElementById(
        `${row - 1}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
    }
  }
  //Noreste
  for (let i = 1; i < 14; i++) {
    if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol + i)}`)) {
      break;
    }
    if (
      row + i < tamanoTableroLargo + 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row + i < tamanoTableroLargo + 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //sureste
  for (let i = 1; i < 14; i++) {
    if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol + i)}`)) {
      break;
    }
    if (
      row - i >= 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row - i >= 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //noroeste
  for (let i = 1; i < 14; i++) {
    if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol - i)}`)) {
      break;
    }
    if (
      row + i < tamanoTableroLargo + 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row + i < tamanoTableroLargo + 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //suroeste
  for (let i = 1; i < 14; i++) {
    if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol - i)}`)) {
      break;
    }
    if (
      row - i >= 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row - i >= 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }

  item.style.backgroundColor = colorSeleccionadoTablero;
};

export const movimientoHacheroElite = (row, col, item) => {
  let nCol = alfabetoANumero(col);

  //Norte
  for (let i = 1; i < 3; i++) {
    if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol)}`)) {
      break;
    }
    if (
      row + i < tamanoTableroLargo + 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol)}`).innerText ==
        0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row + i < tamanoTableroLargo + 1 &&
      nCol &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //sur
  for (let i = 1; i < 3; i++) {
    if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol)}`)) {
      break;
    }
    if (
      row - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol)}`).innerText ==
        0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }

  //Este
  for (let i = 1; i < 3; i++) {
    if (validaPiezaMontana(`${row}${numeroAAlfabeto(nCol + i)}`)) {
      break;
    }
    if (
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row}${numeroAAlfabeto(nCol + i)}`).innerText ==
        0
    ) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row}${numeroAAlfabeto(nCol + i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }

  //Oeste
  for (let i = 1; i < 3; i++) {
    if (validaPiezaMontana(`${row}${numeroAAlfabeto(nCol - i)}`)) {
      break;
    }
    if (
      nCol - i >= 1 &&
      document.getElementById(`${row}${numeroAAlfabeto(nCol - i)}`).innerText ==
        0
    ) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      nCol - i >= 1 &&
      document.getElementById(`${row}${numeroAAlfabeto(nCol - i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }

  //Noreste
  for (let i = 1; i < 15; i++) {
    if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol + i)}`)) {
      break;
    }
    if (
      row + i < tamanoTableroLargo + 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row + i < tamanoTableroLargo + 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol + i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //sureste
  for (let i = 1; i < 15; i++) {
    if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol + i)}`)) {
      break;
    }
    if (
      row - i >= 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row - i >= 1 &&
      nCol + i < tamanoTableroAncho + 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol + i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol + i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //noroeste
  for (let i = 1; i < 15; i++) {
    if (validaPiezaMontana(`${row + i}${numeroAAlfabeto(nCol - i)}`)) {
      break;
    }
    if (
      row + i < tamanoTableroLargo + 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row + i < tamanoTableroLargo + 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row + i}${numeroAAlfabeto(nCol - i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row + i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }
  //suroeste
  for (let i = 1; i < 15; i++) {
    if (validaPiezaMontana(`${row - i}${numeroAAlfabeto(nCol - i)}`)) {
      break;
    }
    if (
      row - i >= 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
        .innerText == 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
    } else if (
      row - i >= 1 &&
      nCol - i >= 1 &&
      document.getElementById(`${row - i}${numeroAAlfabeto(nCol - i)}`)
        .innerText !== 0
    ) {
      document.getElementById(
        `${row - i}${numeroAAlfabeto(nCol - i)}`
      ).style.backgroundColor = colorOpciones;
      break;
    }
  }

  item.style.backgroundColor = colorSeleccionadoTablero;
};
