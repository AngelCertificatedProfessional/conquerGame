import {colorOpciones,colorDisparoArcher,validaPiezaMontana, alfabetoANumero, numeroAAlfabeto, tamanoTableroAncho, tamanoTableroLargo} from '../util/configuracionGeneral.js'
export const movimientoArcher= (row,col,item) =>{
    //Este
    let nCol = alfabetoANumero(col) 
    if (nCol < tamanoTableroAncho) {
        if(!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol+1)}`)){
            console.log(row+numeroAAlfabeto(nCol+1))
            document.getElementById(`${row}${numeroAAlfabeto(nCol+1)}`).style.backgroundColor = colorOpciones
        }
    }
    //Oeste
    if (nCol > 1) {
        if(!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol-1)}`)){
            document.getElementById(`${row}${numeroAAlfabeto(nCol-1)}`).style.backgroundColor = colorOpciones
        }
    }
    //Norte
    if (row < tamanoTableroLargo) {
        if(!validaPiezaMontana(`${row+1}${numeroAAlfabeto(nCol)}`)){
            document.getElementById(`${row+1}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
        }
    }
    //Sur
    if (row > 1) {
        if(!validaPiezaMontana(`${row-1}${numeroAAlfabeto(nCol)}`)){
            document.getElementById(`${row-1}${numeroAAlfabeto(nCol)}`).style.backgroundColor = colorOpciones
        }
    }
    
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

    if (row > 3 && nCol < (tamanoTableroAncho- 3)) {
        document.getElementById(`${row-3}${numeroAAlfabeto(nCol+3)}`).style.backgroundColor = colorDisparoArcher
    }
    if (row > 3 && nCol > 3) {
        document.getElementById(`${row-3}${numeroAAlfabeto(nCol-3)}`).style.backgroundColor = colorDisparoArcher
    }
    if (row < (tamanoTableroLargo- 3) && nCol < (tamanoTableroAncho- 3)) {
        document.getElementById(`${row+3}${numeroAAlfabeto(nCol+3)}`).style.backgroundColor = colorDisparoArcher
    }
    if (row < (tamanoTableroAncho - 3) && nCol > 3) {
        document.getElementById(`${row+3}${numeroAAlfabeto(nCol-3)}`).style.backgroundColor = colorDisparoArcher
    }

    item.style.backgroundColor = 'pink'
}