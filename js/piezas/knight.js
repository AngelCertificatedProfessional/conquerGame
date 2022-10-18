let colorFuturaPosicion = 'rgb(0, 141, 155)';
export const movimientoKnight = (a,aup,aside,item) =>{
    if (aside < 7 && aup < 800) {
        document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside < 7 && aup > 200) {
        document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside < 8 && aup < 700) {
        document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside > 1 && aup < 700) {
        document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside > 2 && aup < 800) {
        document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside > 2 && aup > 100) {
        document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside < 8 && aup > 200) {
        document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = colorFuturaPosicion
    }
    if (aside > 1 && aup > 200) {
        document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = colorFuturaPosicion
    }
    item.style.backgroundColor = 'pink'
}