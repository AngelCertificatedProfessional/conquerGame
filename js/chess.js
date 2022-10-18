// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoKing } from './piezas/king.js';
import { movimientoRook } from './piezas/rook.js';
import { movimientoBishoop } from './piezas/bishoop.js';
import { movimientoQueen } from './piezas/queen.js';
import { movimientoKnight } from './piezas/knight.js';
import {colorOpciones} from './util/configuracionGeneral.js'
import {piezasGame} from './config/configuracionPiezas.js'
import {montanas,lagos} from './config/configuracionTablero.js'
let pinkId = "";
let pinkText = "";

const posicionClasesTablero = () => {
    for ( const piecePosition in montanas ) {
        const div = document.getElementById(montanas[piecePosition]);
        div.classList.remove( 'white-box' )
        div.classList.add( 'green-box' )
    }

    for ( const piecePosition in lagos ) {
        const div = document.getElementById(lagos[piecePosition]);
        div.classList.remove("white-box");
        div.classList.add( 'blue-box' )
    }

}

posicionClasesTablero()


const posicionPiezas = () => {
    for ( const piecePosition in piezasGame ) {
        console.log(piecePosition)
        var div = document.getElementById(piecePosition);
        div.innerHTML += piezasGame[piecePosition];
    }
}

posicionPiezas()

const insertImage = () => {
    document.querySelectorAll('.box').forEach(image => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="img/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText} <img class='allimg' src="img/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage();

function coloring() {
    // document.querySelectorAll('.box').forEach(color => {
    //     let arr = Array.from(color.id);
    //     arr.shift()
    //     let a = eval(arr.pop()) + eval(arr.shift())
    //     if (a % 2 == 0) {
    //         color.style.backgroundColor = 'rgb(240, 201, 150)'
    //     }
    //     if (a % 2 !== 0) {
    //         color.style.backgroundColor = 'rgb(100, 75, 43)'
    //     }
    // })
    document.querySelectorAll('.white-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(240, 201, 150)'; 
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(14, 155, 0)'; 
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(63, 234, 229)'; 
    })

    
}
coloring()

//function to not remove the same team element
function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {
            document.querySelectorAll('.box').forEach(i2 => {
                if (i2.style.backgroundColor == colorOpciones && i2.innerText.length !== 0) {

                    let greenText = i2.innerText

                    let pinkText = i1.innerText

                    let pinkColor = ((Array.from(pinkText)).shift()).toString()
                    let greenColor = ((Array.from(greenText)).shift()).toString()

                    let getId = i2.id
                    let arr = Array.from(getId)
                    arr.shift()
                    let aside = eval(arr.pop())
                    let aup = eval(arr.shift())
                    let a = aside + aup
            
                    if (pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }

//                     // if (pinkColor == greenColor) {
//                     //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
//                     // }
                }
            })
        }
    })
}

let tog = 1

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // To delete the opposite element
        if (item.style.backgroundColor == colorOpciones && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.backgroundColor == colorOpciones && item.innerText.length !== 0) {
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1
                    
                }
            })
        }

        let arr = Array.from(item.id)
        arr.shift()
        let aside = eval(arr.pop())
        console.log(aside)
        arr.push('0')
        console.log(arr)
        let aup = eval(arr.join(''))
        console.log(aup)
        let a = aside + aup
        console.log(a)

        // Function to display the available paths for all pieces

        function whosTurn(toggle) {
            // PAWN
            // if (item.innerText == `${toggle}pawn`) {
            //     movimientoPawn(tog,a,aup,aside,item)
            // }else 
            if (item.innerText == `${toggle}king`) {
                movimientoKing(a,aup,aside,item)
            }else if (item.innerText == `${toggle}rook`) {
                movimientoRook(a,aup,item)
            }else if(item.innerText == `${toggle}bishop`) {
                movimientoBishoop(a,aup,aside,item)
            }else if(item.innerText == `${toggle}queen`) {
                movimientoQueen(a,aup,aside,item)
            }else if(item.innerText == `${toggle}knight`) {
                movimientoKnight(a,aup,aside,item)
            }
        }


        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        reddish()

        // // winning()

        // numOfKings = 0


        // document.querySelectorAll('.box').forEach(win => {
        //     if (win.innerText == 'Wking' || win.innerText == 'Bking') {
        //         numOfKings += 1
        //     }

        // })

        // if (numOfKings == 1) {
        //     setTimeout(() => {
        //         // console.log(`${toggle}`) 
        //         if (tog % 2 == 0) {
        //             alert('White Wins !!')
        //             location.reload()
        //         }
        //         else if (tog % 2 !== 0) {
        //             alert('Black Wins !!')
        //             location.reload()
        //         }
        //     }, 100)
        // }
    })

})

// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        if (hathiTest.style.backgroundColor == 'pink') {
            pinkId = hathiTest.id;
            pinkText = hathiTest.innerText;
            document.querySelectorAll('.box').forEach(hathiTest2 => {
                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == colorOpciones && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = '';
                        hathiTest2.innerText = pinkText;
                        coloring()
                        insertImage()
                    }
                })
            })
        }
    })
})

// // Prvents from selecting multiple elements
let z = 0;
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== colorOpciones) {
            coloring()
        }
    })
})
