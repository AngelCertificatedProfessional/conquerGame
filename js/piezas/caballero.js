import {colorOpciones,validaPiezaLago,validaPiezaMontana} from '../util/configuracionGeneral.js'
export const movimientoCaballero = (a,aup,aside,item) =>{
    for (let i = 1; i < 9; i++) {
        if((a + i * 100) < 900 && (validaPiezaMontana(`b${a + i * 100}`) || validaPiezaLago(`b${a + i * 100}`))){
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
        if((a - i * 100) > 100 && (validaPiezaMontana(`b${a - i * 100}`) || validaPiezaLago(`b${a - i * 100}`))){
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
        if((a + i) < (aup + 9) && (validaPiezaMontana(`b${a + i}`) || validaPiezaLago(`b${a + i}`))){
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
        if((a - i) > (aup) && (validaPiezaMontana(`b${a - i}`) || validaPiezaLago(`b${a - i}`))){
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

    for (let i = 1; i < 9; i++) {
        if(i < (900 - aup) / 100 && i < 9 - aside && (validaPiezaMontana(`b${a + i * 100 + i}`) || validaPiezaLago(`b${a + i * 100 + i}`))){
            break
        }
        if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = colorOpciones
        }
        else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = colorOpciones
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if(i < aup / 100 && i < 9 - aside && (validaPiezaMontana(`b${a - i * 100 + i}`) || validaPiezaLago(`b${a - i * 100 + i}`))){
            break
        }
        if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = colorOpciones
        }
        else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = colorOpciones
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if(i < (900 - aup) / 100 && i < aside && (validaPiezaMontana(`b${a + i * 100 - i}`) || validaPiezaLago(`b${a + i * 100 - i}`))){
            break
        }
        if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = colorOpciones
        }
        else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = colorOpciones
            break
        }

    }

    for (let i = 1; i < 9; i++) {
        if(i < aup / 100 && i < aside && (validaPiezaMontana(`b${a - i * 100 - i}`) || validaPiezaLago(`b${a - i * 100 - i}`))){
            break
        }
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