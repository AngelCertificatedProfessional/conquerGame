let colorFuturaPosicion = 'rgb(0, 141, 155)';
export const movimientoKing = (a,aup,laterales,item) =>{
    if (laterales < 8) {
        document.getElementById(`b${a + 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (laterales > 1) {
        document.getElementById(`b${a - 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aup < 800) {
        document.getElementById(`b${a + 100}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aup > 100) {
        document.getElementById(`b${a - 100}`).style.backgroundColor = colorFuturaPosicion
    }

    if (aup > 100 && laterales < 8) {
        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aup > 100 && laterales > 1) {
        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aup < 800 && laterales < 8) {
        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aup < 800 && laterales > 1) {
        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = colorFuturaPosicion
    }

    item.style.backgroundColor = 'pink'
}