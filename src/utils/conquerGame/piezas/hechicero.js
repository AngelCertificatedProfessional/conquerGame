import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js"
import { colorOpciones, colorSeleccionadoTablero, tamanoTableroAncho, tamanoTableroLargo, validaPiezaMontana,colorDisparoArcher } from "../ConfiguracionTableroConquerGame.js"

export const movimientoHechicero =  (row,col,item) =>{
    let nCol = alfabetoANumero(col) 
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol+i)}`)){
            break
        }
        if ((row+i) < tamanoTableroLargo+1 && (nCol+i) < tamanoTableroAncho+1 && document.getElementById(`${row+i}${numeroAAlfabeto(nCol+i)}`).innerText == 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
        }else if ((row+i) < tamanoTableroLargo+1 && (nCol+i) < tamanoTableroAncho+1 && document.getElementById(`${row+i}${numeroAAlfabeto(nCol+i)}`).innerText !== 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
            break
        }
    }
    //sureste
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row-i}${numeroAAlfabeto(nCol+i)}`)){
            break
        }
        if ((row-i) >= 1 && (nCol+i) < tamanoTableroAncho+1 && document.getElementById(`${row-i}${numeroAAlfabeto(nCol+i)}`).innerText == 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
        }else if ((row-i) >= 1 && (nCol+i) < tamanoTableroAncho+1&& document.getElementById(`${row-i}${numeroAAlfabeto(nCol+i)}`).innerText !== 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
            break
        }
    }
    //noroeste
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol-i)}`)){
            break
        }
        if ((row+i) < tamanoTableroLargo+1 && (nCol-i) >= 1 && document.getElementById(`${row+i}${numeroAAlfabeto(nCol-i)}`).innerText == 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
        }else if ((row+i) < tamanoTableroLargo+1 && (nCol-i) >= 1 && document.getElementById(`${row+i}${numeroAAlfabeto(nCol-i)}`).innerText !== 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
            break
        }
    }
    //suroeste
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row-i}${numeroAAlfabeto(nCol-i)}`)){
            break
        }
        if ((row-i) >= 1 && (nCol-i) >= 1 && document.getElementById(`${row-i}${numeroAAlfabeto(nCol-i)}`).innerText == 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
        }else if ((row-i) >= 1 && (nCol-i) >= 1 && document.getElementById(`${row-i}${numeroAAlfabeto(nCol-i)}`).innerText !== 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
            break
        }

    }

    //Norte
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol)}`)){
            break
        }
        if ((row+i) < tamanoTableroLargo+1 && document.getElementById(`${row+i}${numeroAAlfabeto(nCol)}`).innerText == 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
        }else if ((row+i) < tamanoTableroLargo+1 && (nCol) && document.getElementById(`${row+i}${numeroAAlfabeto(nCol)}`).innerText !== 0) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
            break
        }
    }
    //sur
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row-i}${numeroAAlfabeto(nCol)}`)){
            break
        }
        if ((row-i) >=1 && document.getElementById(`${row-i}${numeroAAlfabeto(nCol)}`).innerText == 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
        }else if ((row-i) >= 1 && document.getElementById(`${row-i}${numeroAAlfabeto(nCol)}`).innerText !== 0) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
            break
        }
    }

    //Este
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row}${numeroAAlfabeto(nCol+i)}`)){
            break
        }
        if ((nCol+i) < tamanoTableroAncho+1 && document.getElementById(`${row}${numeroAAlfabeto(nCol+i)}`).innerText == 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
        }else if ((nCol+i) < tamanoTableroAncho+1 && document.getElementById(`${row}${numeroAAlfabeto(nCol+i)}`).innerText !== 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorOpciones
            break
        }
    }

    //Oeste
    for (let i = 1; i < 3; i++) {
        if(validaPiezaMontana(`${row}${numeroAAlfabeto(nCol-i)}`)){
            break
        }
        if ((nCol-i) >= 1 && document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).innerText == 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
        }else if ((nCol-i) >= 1 && document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).innerText !== 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
            break
        }
    }
    //Este segmento es para los disparos de archer
    //Este
    if (nCol < tamanoTableroAncho- 3) {
        document.getElementById(`${row}${numeroAAlfabeto(nCol+3)}`).style.backgroundColor = colorDisparoArcher
    }
    //Oeste
    if (nCol > 3) {
        document.getElementById(`${row}${numeroAAlfabeto(nCol-3)}`).style.backgroundColor = colorDisparoArcher
    }
    //Norte
    if (row < tamanoTableroLargo - 3) {
        document.getElementById(`${row+3}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorDisparoArcher
    }
    //Sur
    if (row > 3) {
        document.getElementById(`${row-3}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorDisparoArcher
    }

    for(let i = 3; i<5;i++){
        if (row > i && nCol < (tamanoTableroAncho- i)) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorDisparoArcher
        }
        if (row > i && nCol > i) {
            document.getElementById(`${row-i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorDisparoArcher
        }
        if (row < (tamanoTableroLargo- i) && nCol < (tamanoTableroAncho- i)) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol+i)}`).style.backgroundColor = colorDisparoArcher
        }
        if (row < (tamanoTableroAncho - i) && nCol > i) {
            document.getElementById(`${row+i}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorDisparoArcher
        }
    }
    item.style.backgroundColor = colorSeleccionadoTablero
}