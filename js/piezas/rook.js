let colorFuturaPosicion = 'rgb(0, 141, 155)';
export const movimientoRook = (a,aup,item) =>{
    for (let i = 1; i < 9; i++) {
        if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = colorFuturaPosicion
        }
        else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor = colorFuturaPosicion
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = colorFuturaPosicion
        }
        else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor = colorFuturaPosicion
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
            document.getElementById(`b${a + i}`).style.backgroundColor = colorFuturaPosicion
        }
        else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
            document.getElementById(`b${a + i}`).style.backgroundColor = colorFuturaPosicion
            break
        }
    }

    for (let i = 1; i < 9; i++) {
        if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
            document.getElementById(`b${a - i}`).style.backgroundColor = colorFuturaPosicion
        }
        else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
            document.getElementById(`b${a - i}`).style.backgroundColor = colorFuturaPosicion
            break
        }
    }

    item.style.backgroundColor = 'pink'
}

        