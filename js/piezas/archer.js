import {colorOpciones} from '../util/configuracionGeneral.js'
export const movimientoArcher= (a,aup,laterales,item) =>{
    if (laterales < 8) {
        document.getElementById(`b${a + 1}`).style.backgroundColor = colorOpciones
    }
    if (laterales > 1) {
        document.getElementById(`b${a - 1}`).style.backgroundColor = colorOpciones
    }
    if (aup < 800) {
        document.getElementById(`b${a + 100}`).style.backgroundColor = colorOpciones
    }
    if (aup > 100) {
        document.getElementById(`b${a - 100}`).style.backgroundColor = colorOpciones
    }

    if (aup > 100 && laterales < 8) {
        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = colorOpciones
    }
    if (aup > 100 && laterales > 1) {
        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = colorOpciones
    }
    if (aup < 800 && laterales < 8) {
        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = colorOpciones
    }
    if (aup < 800 && laterales > 1) {
        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = colorOpciones
    }

    item.style.backgroundColor = 'pink'
}