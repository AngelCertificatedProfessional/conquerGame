import {colorOpciones} from '../util/configuracionGeneral.js'
export const movimientoKnight = (a,aup,aside,item) =>{
    if (aside < 7 && aup < 800) {
        document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = colorOpciones
    }
    if (aside < 7 && aup > 200) {
        document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = colorOpciones
    }
    if (aside < 8 && aup < 700) {
        document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = colorOpciones
    }
    if (aside > 1 && aup < 700) {
        document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = colorOpciones
    }
    if (aside > 2 && aup < 800) {
        document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = colorOpciones
    }
    if (aside > 2 && aup > 100) {
        document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = colorOpciones
    }
    if (aside < 8 && aup > 200) {
        document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = colorOpciones
    }
    if (aside > 1 && aup > 200) {
        document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = colorOpciones
    }
    item.style.backgroundColor = 'pink'
}