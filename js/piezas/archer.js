import {colorOpciones,colorDisparoArcher} from '../util/configuracionGeneral.js'
export const movimientoArcher= (a,aup,laterales,item) =>{
    //Este
    if (laterales < 8) {
        document.getElementById(`b${a + 1}`).style.backgroundColor = colorOpciones
    }
    //Oeste
    if (laterales > 1) {
        document.getElementById(`b${a - 1}`).style.backgroundColor = colorOpciones
    }
    //Norte
    if (aup < 800) {
        document.getElementById(`b${a + 100}`).style.backgroundColor = colorOpciones
    }
    //Sur
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
    //Este segmento es para los disparos de archer
    //Este
    if (laterales < 5) {
        document.getElementById(`b${a + 3}`).style.backgroundColor = colorDisparoArcher
    }
    //Oeste
    if (laterales > 3) {
        document.getElementById(`b${a - 3}`).style.backgroundColor = colorDisparoArcher
    }
    //Norte
    if (aup < 500) {
        document.getElementById(`b${a + 300}`).style.backgroundColor = colorDisparoArcher
    }
    //Sur
    if (aup > 300) {
        document.getElementById(`b${a - 300}`).style.backgroundColor = colorDisparoArcher
    }

    if (aup > 300 && laterales < 5) {
        document.getElementById(`b${a - 300 + 3}`).style.backgroundColor = colorDisparoArcher
    }
    if (aup > 300 && laterales > 3) {
        document.getElementById(`b${a - 300 - 3}`).style.backgroundColor = colorDisparoArcher
    }
    if (aup < 500 && laterales < 5) {
        document.getElementById(`b${a + 300 + 3}`).style.backgroundColor = colorDisparoArcher
    }
    if (aup < 500 && laterales > 3) {
        document.getElementById(`b${a + 300 - 3}`).style.backgroundColor = colorDisparoArcher
    }

    item.style.backgroundColor = 'pink'
}