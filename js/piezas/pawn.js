export const movimientoPawn = (tog,a,aup,laterales,item) =>{
    item.style.backgroundColor = 'pink'
    if (tog % 2 !== 0 && aup < 800) {

        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
        }

        if (laterales < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
        }

        if (laterales > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
        }
    }

    if (tog % 2 == 0 && aup > 100) {

        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
        }
        if (laterales < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
        }
        if (laterales > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
        }
    }
}
