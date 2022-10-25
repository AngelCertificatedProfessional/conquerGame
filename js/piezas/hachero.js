import {colorOpciones,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoHachero = (a,aup,item) =>{
    for (let i = 1; i < 9; i++) {
        if((a + i * 100) < 900 && validaPiezaMontana(`b${a + i * 100}`)){
            break
        }
        if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = colorOpciones
        }
        else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = colorOpciones
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if((a - i * 100) > 100 && validaPiezaMontana(`b${a - i * 100}`)){
            break
        }
        if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = colorOpciones
        }
        else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = colorOpciones
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if((a + i) < (aup + 9) && validaPiezaMontana(`b${a + i}`)){
            break
        }
        if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
            document.getElementById(`b${a + i}`).style.backgroundColor = colorOpciones
        }
        else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
            document.getElementById(`b${a + i}`).style.backgroundColor = colorOpciones
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if((a - i) > (aup) && validaPiezaMontana(`b${a - i}`)){
            break
        }
        if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
            document.getElementById(`b${a - i}`).style.backgroundColor = colorOpciones
        }
        else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
            document.getElementById(`b${a - i}`).style.backgroundColor = colorOpciones
            break
        }
    }

    item.style.backgroundColor = 'pink'
}

        