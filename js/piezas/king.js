export const movimientoKing = (a,aup,laterales,item) =>{
    if (laterales < 8) {
        document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
    }
    if (laterales > 1) {
        document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
    }
    if (aup < 800) {
        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
    }
    if (aup > 100) {
        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
    }

    if (aup > 100 && laterales < 8) {
        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
    }
    if (aup > 100 && laterales > 1) {
        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
    }
    if (aup < 800 && laterales < 8) {
        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
    }
    if (aup < 800 && laterales > 1) {
        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
    }

    item.style.backgroundColor = 'pink'
}