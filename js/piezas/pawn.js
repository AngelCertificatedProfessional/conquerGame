let colorFuturaPosicion = 'rgb(0, 141, 155)';
export const movimientoPawn = (tog,a,aup,laterales,item) =>{
    item.style.backgroundColor = 'pink'
    if (tog % 2 !== 0 && aup < 800) {

        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor = colorFuturaPosicion
        }

        if (laterales < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = colorFuturaPosicion
        }

        if (laterales > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = colorFuturaPosicion
        }
    }

    if (tog % 2 == 0 && aup > 100) {

        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor = colorFuturaPosicion
        }
        if (laterales < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = colorFuturaPosicion
        }
        if (laterales > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = colorFuturaPosicion
        }
    }
}
