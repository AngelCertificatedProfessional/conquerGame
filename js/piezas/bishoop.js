import {colorOpciones} from '../util/configuracionGeneral.js'
export const movimientoBishoop = (a,aup,aside,item) =>{
    for (let i = 1; i < 9; i++) {
        if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = colorOpciones
        }
        else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = colorOpciones
            break
        }
    }
    for (let i = 1; i < 9; i++) {
        if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = colorOpciones
        }
        else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = colorOpciones
            break
        }
    }
    for (let i = 1; i < 9; i++) {
        if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = colorOpciones
        }
        else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = colorOpciones
            break
        }

    }
    for (let i = 1; i < 9; i++) {
        if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = colorOpciones
        }
        else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = colorOpciones
            break
        }
    }
    item.style.backgroundColor = 'pink'
}
