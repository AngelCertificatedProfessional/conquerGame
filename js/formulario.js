// // import { movimientoPawn } from './piezas/pawn.js';
// import { movimientoKing } from './piezas/king.js';
// import { movimientoRook } from './piezas/rook.js';
// import { movimientoBishoop } from './piezas/bishoop.js';
// import { movimientoQueen } from './piezas/queen.js';
// import { movimientoKnight } from './piezas/knight.js';
// import {colorOpciones} from './util/configuracionGeneral.js'
import {piezasGame} from './config/configuracionPiezas.js'
import {montanas,lagos} from './config/configuracionTablero.js'

let torre1 = '';
let torre2 = '';
let caballero1 = '';
let caballero2 = '';
let alfil1 = '';
let alfil2 = '';
let rey = '';
let reina = '';
let sTurno = 'W';

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

export const colocarConfiguracionPiezas = () =>{
    if(document.getElementById('torre1').value !== ""){
        //Se evalua si los elementos sin iguales
        if(torre1 !== '' && torre1 !== document.getElementById('torre1').value){
            let div = document.getElementById(torre1);
            div.innerHTML = '';
        }
        torre1 = document.getElementById('torre1').value;
        let div2 = document.getElementById(torre1);
        div2.innerHTML = sTurno+'rook';
    }

    if(document.getElementById('torre2').value !== ""){
        //Se evalua si los elementos sin iguales
        if(torre2 !== '' && torre2 !== document.getElementById('torre2').value){
            let div = document.getElementById(torre2);
            div.innerHTML = '';
        }
        torre2 = document.getElementById('torre2').value;
        let div2 = document.getElementById(torre2);
        div2.innerHTML = sTurno+'rook';
    }
    
    if(document.getElementById('alfil1').value !== ""){
        //Se evalua si los elementos sin iguales
        if(alfil1 !== '' && alfil1 !== document.getElementById('alfil1').value){
            let div = document.getElementById(alfil1);
            div.innerHTML = '';
        }
        alfil1 = document.getElementById('alfil1').value;
        let div2 = document.getElementById(alfil1);
        div2.innerHTML = sTurno+'bishop';
    }

    if(document.getElementById('alfil2').value !== ""){
        //Se evalua si los elementos sin iguales
        if(alfil2 !== '' && alfil2 !== document.getElementById('alfil2').value){
            let div = document.getElementById(alfil2);
            div.innerHTML = '';
        }
        alfil2 = document.getElementById('alfil2').value;
        let div2 = document.getElementById(alfil2);
        div2.innerHTML = sTurno+'bishop';
    }

    if(document.getElementById('caballero1').value !== ""){
        //Se evalua si los elementos sin iguales
        if(caballero1 !== '' && caballero1 !== document.getElementById('caballero1').value){
            let div = document.getElementById(caballero1);
            div.innerHTML = '';
        }
        caballero1 = document.getElementById('caballero1').value;
        let div2 = document.getElementById(caballero1);
        div2.innerHTML = sTurno+'knight';
    }

    if(document.getElementById('caballero2').value !== ""){
        //Se evalua si los elementos sin iguales
        if(caballero2 !== '' && caballero2 !== document.getElementById('caballero2').value){
            let div = document.getElementById(caballero2);
            div.innerHTML = '';
        }
        caballero2 = document.getElementById('caballero2').value;
        let div2 = document.getElementById(caballero2);
        div2.innerHTML = sTurno+'knight';
    }

    if(document.getElementById('reina').value !== ""){
        //Se evalua si los elementos sin iguales
        if(reina !== '' && reina !== document.getElementById('reina').value){
            let div = document.getElementById(reina);
            div.innerHTML = '';
        }
        reina = document.getElementById('reina').value;
        let div2 = document.getElementById(reina);
        div2.innerHTML = sTurno+'queen';
    }

    if(document.getElementById('rey').value !== ""){
        //Se evalua si los elementos sin iguales
        if(rey !== '' && rey !== document.getElementById('rey').value){
            let div = document.getElementById(rey);
            div.innerHTML = '';
        }
        rey = document.getElementById('rey').value;
        let div2 = document.getElementById(rey);
        div2.innerHTML = sTurno+'king';
    }

    insertImage();
}

export const guardarConfiguracionPiezas = () => {
    if(torre1 === "" || torre2 === "" || caballero1 === "" || caballero2 === "" || alfil1 === "" ||
    alfil2 === "" || rey === "" || reina === ""){
        alert("Debe agregar todas las piezas al tablero primero")
        return;
    }
    piezasGame[sTurno+"rook1"] = torre1;
    piezasGame[sTurno+"knight1"] = caballero1;
    piezasGame[sTurno+"bishop1"] = alfil1;
    piezasGame[sTurno+"king"] = rey;
    piezasGame[sTurno+"queen"] = reina;
    piezasGame[sTurno+"knight2"] = alfil2;
    piezasGame[sTurno+"bishop2"] = caballero2;
    piezasGame[sTurno+"rook2"] = torre2;

    torre1 = '';
    torre2 = '';
    caballero1 = '';
    caballero2 = '';
    alfil1 = '';
    alfil2 = '';
    rey = '';
    reina = '';
    switch(sTurno){
        case "W":
            sTurno = "B";
            document.getElementById('tog').innerText = "Black's Turn"
            break;
        case "B":
            window.localStorage.setItem('piezas', JSON.stringify(piezasGame))
            window.open("http://127.0.0.1:5501/juego.html","_self")
            break;
    }

}


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