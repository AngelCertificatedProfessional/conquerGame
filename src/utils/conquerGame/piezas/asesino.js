import { alfabetoANumero, numeroAAlfabeto } from "../../UtileriasPagina.js"
import { colorOpciones, colorSeleccionadoTablero, tamanoTableroAncho, tamanoTableroLargo, validaPiezaMontana } from "../ConfiguracionTableroConquerGame.js"

export const movimientoAsesino = (row,col,item,bMovioAsesino)  =>{
    let nCol = alfabetoANumero(col) 
    //La funcionalidad del asesino es matar dos caminar dos veces, matar dos veces por eso 
    // se realiza una evaluacion de su movimiento
    if(!bMovioAsesino){
        if (nCol < tamanoTableroAncho) {
            if(!validaPiezaMontana(`${row}${numeroAAlfabeto(nCol+1)}`)){
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
    }else{
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
    }
    item.style.backgroundColor = colorSeleccionadoTablero
}