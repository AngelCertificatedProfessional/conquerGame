// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoKing } from './piezas/king.js';
import { movimientoRook } from './piezas/rook.js';
import { movimientoBishoop } from './piezas/bishoop.js';
import { movimientoQueen } from './piezas/queen.js';
import { movimientoKnight } from './piezas/knight.js';
import {colorDisparoArcher, colorLago, colorMontana, colorOpciones} from './util/configuracionGeneral.js'
// import {piezasGame} from './config/configuracionPiezas.js'
import {montanas,lagos} from './config/configuracionTablero.js'
import { movimientoArcher } from './piezas/archer.js';
let pinkId = "";
let pinkText = "";
let numOfKings = 0;

const agregarDivsTablero = () => {
    for(let nContRow=8;nContRow>0;nContRow--){
        let divElement = document.createElement("div");
        divElement.id = "row"+nContRow;
        divElement.className = "row";  
        document.getElementById("tablero_juego").appendChild(divElement);
        for(let nContCol=1;nContCol<9;nContCol++){
            let liElement2 = document.createElement("li");
            liElement2.id = "b"+nContRow+"0"+nContCol;
            liElement2.className = "box white-box";  
            document.getElementById("row"+nContRow).appendChild(liElement2);
        }
    }
}
agregarDivsTablero();



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
    if(window.localStorage.getItem('piezas') === ""){
        window.open("http://127.0.0.1:5501/index.html","_self")
        return;
    }
    const piezasGame =JSON.parse(window.localStorage.getItem('piezas'))
    for ( const piecePosition in piezasGame ) {
        var div = document.getElementById(piezasGame[piecePosition]);
        div.innerHTML += piecePosition.replace(/[0-9]/g, '');
    }
    window.localStorage.setItem('piezas','')
}

posicionPiezas()

const insertImage = () => {
    document.querySelectorAll('.box').forEach(image => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            image.innerHTML = `${image.innerText} <img class='allimg' src="img/${image.innerText}.png" alt="">`
            image.style.cursor = 'pointer'
        }
    })
}
insertImage();

function coloring() {
    document.querySelectorAll('.white-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(240, 201, 150)'; 
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorMontana; 
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = colorLago; 
    })

    
}
coloring()

//function to not remove the same team element
function reddish(sPieza) {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {
            document.querySelectorAll('.box').forEach(i2 => {
                if ((i2.style.backgroundColor == colorOpciones || i2.style.backgroundColor == colorDisparoArcher)) {
                    if(i2.innerText.length !== 0){
                        let greenText = i2.innerText

                        let pinkText3 = i1.innerText;
                        let pinkColor = ((Array.from(pinkText3)).shift()).toString()
                        let greenColor = ((Array.from(greenText)).shift()).toString()
                        
                        //En esta validacion se pregunta si la pieza a pazar es del mismo color a otra del mismo
                        //team, aparte de condicionar si es un lago o una montana
                        if (pinkColor == greenColor) {
                            i2.style.backgroundColor = 'rgb(240, 201, 150)'
                        }
                    }
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
            //este segmento de codigo sirve para validar que se este eliminando la pieza
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    let pinkId2 = i.id
                    let pinkText2 = i.innerText
                    document.getElementById(pinkId2).innerText = '';
                    item.innerText = pinkText2
                    coloring()
                    insertImage()
                    tog = tog + 1
                    
                }
            })
        }else if (item.style.backgroundColor == colorDisparoArcher && item.innerText.length !== 0) {
            //este segmento de codigo sirve para validar que se este eliminando la pieza
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    document.getElementById(pinkId).innerText = '';
                    coloring()
                    insertImage()
                    tog = tog + 1
                    
                }
            })
        }

        let arr = Array.from(item.id)
        arr.shift()
        let aside = eval(arr.pop())
        arr.push('0')
        let aup = eval(arr.join(''))
        let a = aside + aup

        // Function to display the available paths for all pieces

        function whosTurn(toggle) {
            // PAWN
            // if (item.innerText == `${toggle}pawn`) {
            //     movimientoPawn(tog,a,aup,aside,item)
            // }else 
            if (item.innerText == `${toggle}archer`) {
                movimientoArcher(a,aup,aside,item)
            }else if (item.innerText == `${toggle}king`) {
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

        reddish(item.innerText)

        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }
        })

        if (numOfKings == 1) {
            if (tog % 2 == 0) {
                alert('White Wins !!')
            }
            else if (tog % 2 !== 0) {
                alert('Black Wins !!')
            }
            setTimeout(() => {
                window.open("http://127.0.0.1:5501/index.html","_self")
            }, 600)
        }else{
            numOfKings = 0;
        }
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
                        console.log('entre' + pinkText)
                        document.getElementById(pinkId).innerText = '';
                        hathiTest2.innerText = pinkText;
                        coloring()
                        insertImage()
                        pinkId = '';
                        pinkText = '';
                    }

                    // if (hathiTest2.style.backgroundColor == colorDisparoArcher && hathiTest2.innerText.length == 0) {    
                    //     console.log('entre')                    
                    //     // document.getElementById(pinkId).innerText = '';
                    //     hathiTest2.innerText = '';
                    //     coloring()
                    //     insertImage()
                    // }
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
