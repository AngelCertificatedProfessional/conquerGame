import {alfabetoANumero, colorOpciones,numeroAAlfabeto,tamanoTableroAncho,tamanoTableroLargo,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoLancero = (row,col,item)  =>{
    let nCol = alfabetoANumero(col) 
    if (row > 1 && nCol < tamanoTableroAncho) {
        if(!validaPiezaMontana(`${row-1}${numeroAAlfabeto(nCol+1)}`)){
            document.getElementById(`${row-1}${numeroAAlfabeto(nCol+1)}`).style.backgroundColor = colorOpciones
        }
    }
    if (row > 1 && nCol > 1) {
        if(!validaPiezaMontana(`${row-1}${numeroAAlfabeto(nCol-1)}`)){
            document.getElementById(`${row-1}${numeroAAlfabeto(nCol-1)}`).style.backgroundColor = colorOpciones
        }
    }
    if (row < tamanoTableroLargo && nCol < tamanoTableroAncho) {
        if(!validaPiezaMontana(`${row+1}${numeroAAlfabeto(nCol+1)}`)){
            document.getElementById(`${row+1}${numeroAAlfabeto(nCol+1)}`).style.backgroundColor = colorOpciones
        }
    }
    if (row < tamanoTableroLargo && nCol > 1) {
        if(!validaPiezaMontana(`${row+1}${numeroAAlfabeto(nCol-1)}`)){
            document.getElementById(`${row+1}${numeroAAlfabeto(nCol-1)}`).style.backgroundColor = colorOpciones
        }
    }

     //Norte
    for (let i = 1; i < 14; i++) {
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
    for (let i = 1; i < 14; i++) {
        if(validaPiezaMontana(`${row-1}${numeroAAlfabeto(nCol)}`)){
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
    for (let i = 1; i < 14; i++) {
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
    for (let i = 1; i < 14; i++) {
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
    item.style.backgroundColor = 'pink'
}
