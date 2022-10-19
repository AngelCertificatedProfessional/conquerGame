// // import { movimientoPawn } from './piezas/pawn.js';
// import { movimientoKing } from './piezas/king.js';
// import { movimientoRook } from './piezas/rook.js';
// import { movimientoBishoop } from './piezas/bishoop.js';
// import { movimientoQueen } from './piezas/queen.js';
// import { movimientoKnight } from './piezas/knight.js';
// import {colorOpciones} from './util/configuracionGeneral.js'
import {piezasGame} from './config/configuracionPiezas.js'
import {montanas,lagos} from './config/configuracionTablero.js'
let pinkId = "";
let pinkText = "";

const posicionClasesTablero = () => {
    for ( const piecePosition in montanas ) {
        const div = document.getElementById(montanas[piecePosition]);
        div.innerHTML += "Montana";
        div.classList.remove( 'white-box' )
        div.classList.add( 'green-box' )
    }

    for ( const piecePosition in lagos ) {
        const div = document.getElementById(lagos[piecePosition]);
        div.innerHTML += "Lago";
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

function coloring() {
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

export const guardarConfiguracionPiezas = () =>{
    console.log("hola")
}