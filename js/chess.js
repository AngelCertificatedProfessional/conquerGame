// import { movimientoPawn } from './piezas/pawn.js';
import { movimientoRey } from './piezas/rey.js';
import { movimientoHachero } from './piezas/hachero.js';
import {  movimientoLancero } from './piezas/lancero.js';
import { movimientoCaballero } from './piezas/caballero.js';
import { movimientoAsesino } from './piezas/asesino.js';
import {colorDisparoArcher, colorLago, colorMontana, colorOpciones,
    numeroAAlfabeto,tamanoTableroLargo,tamanoTableroAncho, eliminarLetras, eliminarNumeros} from './util/configuracionGeneral.js'
import { movimientoArcher } from './piezas/archer.js';
// import {piezasGame} from './config/configuracionPiezas.js'
import {montanas,lagos} from './config/configuracionTablero.js'
let pinkId = "";
let pinkText = "";
let numOfKings = 0;
let turno = 0;
let bMovioAsesino = false;
let sPiezaMovimiento = "";
const agregarDivsTablero = () => {
    for(let nContRow=tamanoTableroLargo;nContRow>0;nContRow--){
        let divElement = document.createElement("div");
        divElement.id = "row"+nContRow;
        divElement.className = "row";  
        document.getElementById("tablero_juego").appendChild(divElement);
        for(let nContCol=1;nContCol<tamanoTableroAncho+1;nContCol++){
            let liElement2 = document.createElement("li");
            liElement2.id = nContRow+numeroAAlfabeto(nContCol);
            //Se toma la desicion de como se pintara el tablero
            if(lagos.includes(liElement2.id)){
                liElement2.className = "box blue-box";
            }else if(montanas.includes(liElement2.id )){
                liElement2.className = "box green-box";
            }else{
                liElement2.className = "box white-box";
            }
            document.getElementById("row"+nContRow).appendChild(liElement2);
        }
    }
}
agregarDivsTablero();

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
function reddish() {
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

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // To delete the opposite element
        if (item.style.backgroundColor == colorOpciones && item.innerText.length == 0) {
            console.log(sPiezaMovimiento)
            console.log(sPiezaMovimiento.includes('asesino'))
            console.log(bMovioAsesino)
            if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                bMovioAsesino = true;
            }else{
                turno ++
                bMovioAsesino = false;
            }
            console.log(bMovioAsesino)
            console.log(turno)
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
                    if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                        bMovioAsesino = true;
                    }else{
                        turno ++
                        bMovioAsesino = false;
                    }
                }
            })
        }else if (item.style.backgroundColor == colorDisparoArcher && item.innerText.length !== 0) {
            //este segmento de codigo sirve para validar que se este eliminando la pieza
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    item.innerText = '';
                    coloring()
                    insertImage()
                    if(sPiezaMovimiento.includes('asesino') && !bMovioAsesino){
                        bMovioAsesino = true;
                    }else{
                        turno ++
                        bMovioAsesino = false;
                    }
                }
            })
        }

        const col= eliminarNumeros(item.id)
        const row = eliminarLetras(item.id)

        console.log(col)
        console.log(row)
        // Function to display the available paths for all pieces

        function whosTurn(toggle) {
            sPiezaMovimiento = item.innerText;
            if (item.innerText == `${toggle}archer` && !bMovioAsesino) {
                movimientoArcher(parseInt(row),col,item)
            }else if (item.innerText == `${toggle}rey` && !bMovioAsesino) {
                movimientoRey(parseInt(row),col,item)
            }else if (item.innerText == `${toggle}hachero` && !bMovioAsesino) {
                movimientoHachero(parseInt(row),col,item)
            }else if(item.innerText == `${toggle}lancero` && !bMovioAsesino) {
                movimientoLancero(parseInt(row),col,item)
            }else if(item.innerText == `${toggle}caballero` && !bMovioAsesino) {
                movimientoCaballero(parseInt(row),col,item)
            }else if(item.innerText == `${toggle}asesino`) {
                movimientoAsesino(parseInt(row),col,item,bMovioAsesino)
            }
        }


        // Toggling the turn
        if (turno == 0) {
            whosTurn('W')
        }else if(turno == 1) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        reddish(item.innerText)

        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wrey' || win.innerText == 'Brey') {
                numOfKings += 1
            }
        })

        if (numOfKings == 1) {
            if (turno == 1) {
                alert('White Wins !!')
            }else if(turno == 2) {
                alert('Black Wins !!')
            }
            setTimeout(() => {
                window.open("http://127.0.0.1:5501/index.html","_self")
            }, 600)
        }else{
            numOfKings = 0;
        }

        if(turno === 2){
            document.getElementById('tog').innerText = "White's Turn"
            turno = 0;
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
                        document.getElementById(pinkId).innerText = '';
                        hathiTest2.innerText = pinkText;
                        coloring()
                        insertImage()
                        pinkId = '';
                        pinkText = '';
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
