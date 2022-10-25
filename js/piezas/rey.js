import {colorOpciones,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoRey= (a,aup,laterales,item) =>{
    if (laterales < 8) {
        if(!validaPiezaMontana(`b${a + 1}`)){
            document.getElementById(`b${a + 1}`).style.backgroundColor = colorOpciones
        }
    }
    //Oeste
    if (laterales > 1) {
        if(!validaPiezaMontana(`b${a - 1}`)){
            document.getElementById(`b${a - 1}`).style.backgroundColor = colorOpciones
        }
    }
    //Norte
    if (aup < 800) {
        if(!validaPiezaMontana(`b${a + 100}`)){
            document.getElementById(`b${a + 100}`).style.backgroundColor = colorOpciones
        }
    }
    //Sur
    if (aup > 100) {
        if(!validaPiezaMontana(`b${a - 100}`)){
            document.getElementById(`b${a - 100}`).style.backgroundColor = colorOpciones
        }
    }
    
    if (aup > 100 && laterales < 8) {
        if(!validaPiezaMontana(`b${a - 100 + 1}`)){
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = colorOpciones
        }
    }
    if (aup > 100 && laterales > 1) {
        if(!validaPiezaMontana(`b${a - 100 - 1}`)){
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = colorOpciones
        }
    }
    if (aup < 800 && laterales < 8) {
        if(!validaPiezaMontana(`b${a + 100 + 1}`)){
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = colorOpciones
        }
    }
    if (aup < 800 && laterales > 1) {
        if(!validaPiezaMontana(`b${a + 100 - 1}`)){
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = colorOpciones
        }
    }

    item.style.backgroundColor = 'pink'
}