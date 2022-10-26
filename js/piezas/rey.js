import {alfabetoANumero, colorOpciones,numeroAAlfabeto,tamanoTableroAncho,tamanoTableroLargo,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoRey= (row,col,item) =>{
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
        console.log(`${ row+1}${numeroAAlfabeto(nCol)}`)
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

    item.style.backgroundColor = 'pink'
}