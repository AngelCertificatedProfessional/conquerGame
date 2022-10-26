import {alfabetoANumero, colorOpciones,numeroAAlfabeto,tamanoTableroAncho,tamanoTableroLargo,validaPiezaLago,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoCaballero = (row,col,item) =>{
    //Noreste
    let nCol = alfabetoANumero(col) 
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row+i) < tamanoTableroLargo+1 && (nCol+i) < tamanoTableroAncho+1 && validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol+i)}`) && validaPiezaLago(`${row+i}${numeroAAlfabeto(nCol+i)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row-i) >= 1 && (nCol+i) < tamanoTableroAncho+1 && validaPiezaMontana(`${row-i}${numeroAAlfabeto(nCol+i)}`) && validaPiezaLago(`${row-i}${numeroAAlfabeto(nCol+i)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row+i) < tamanoTableroLargo+1 && (nCol-i) >= 1 && validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol-i)}`) && validaPiezaLago(`${row+i}${numeroAAlfabeto(nCol-i)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row-i) >= 1 && (nCol-i) >= 1 && validaPiezaMontana(`${row-i}${numeroAAlfabeto(nCol-i)}`) && validaPiezaLago(`${row-i}${numeroAAlfabeto(nCol-i)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row+i) < tamanoTableroLargo+1 && validaPiezaMontana(`${row+i}${numeroAAlfabeto(nCol)}`) && validaPiezaLago(`${row+i}${numeroAAlfabeto(nCol)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((row-i) >= 1 && validaPiezaMontana(`${row-1}${numeroAAlfabeto(nCol)}`) && validaPiezaLago(`${row-i}${numeroAAlfabeto(nCol)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((nCol+i) < tamanoTableroAncho+1 && validaPiezaMontana(`${row}${numeroAAlfabeto(nCol+i)}`) && validaPiezaLago(`${row}${numeroAAlfabeto(nCol+1)}`)){
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
    for (let i = 1; i < tamanoTableroLargo+1; i++) {
        if((nCol-i) >= 1 && validaPiezaMontana(`${row}${numeroAAlfabeto(nCol-i)}`) && validaPiezaLago(`${row}${numeroAAlfabeto(nCol-1)}`)){
            break
        }
        if ((nCol-i) >= 1 && document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).innerText == 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
        }else if ((nCol-i) >= 1 && document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).innerText !== 0) {
            document.getElementById(`${row}${numeroAAlfabeto(nCol-i)}`).style.backgroundColor = colorOpciones
            break
        }
    }

    item.style.backgroundColor = 'pink'
}