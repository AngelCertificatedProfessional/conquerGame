// // import { movimientoPawn } from './piezas/pawn.js';
// import { movimientoKing } from './piezas/king.js';
// import { movimientoRook } from './piezas/rook.js';
// import { movimientoBishoop } from './piezas/bishoop.js';
// import { movimientoQueen } from './piezas/queen.js';
// import { movimientoKnight } from './piezas/knight.js';
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
let archer = '';
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
        let arr = Array.from(colorNegro.id)
        arr.shift()
        const nValor = parseInt(arr.shift());
        if((sTurno === "W" && (nValor >= 1 && nValor <=4)) ||
         (sTurno === "B" && (nValor >= 5 && nValor <=8))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(14, 155, 0)';
        let arr = Array.from(colorNegro.id)
        arr.shift()
        const nValor = parseInt(arr.shift());
        if((sTurno === "W" && (nValor >= 1 && nValor <=4)) ||
        (sTurno === "B" && (nValor >= 5 && nValor <=8))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(63, 234, 229)'; 
        let arr = Array.from(colorNegro.id)
        arr.shift()
        const nValor = parseInt(arr.shift());
        if((sTurno === "W" && (nValor >= 1 && nValor <=4)) ||
        (sTurno === "B" && (nValor >= 5 && nValor <=8))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })
}
coloring()

export const colocarConfiguracionPiezas = () =>{

    if(document.getElementById('torre1').value !== ""){
        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('torre1') && !validaPosicionPieza("torre1")){
            //Se evalua si los valores son diferentes, esto ayudando a eliminar la posicion anterior
            if(torre1 !== '' && torre1 !== document.getElementById('torre1').value){
                let div = document.getElementById(torre1);
                div.innerHTML = '';
            }
            torre1 = document.getElementById('torre1').value;
            let div2 = document.getElementById(torre1);
            div2.innerHTML = sTurno+'rook';
        }
    }

    if(document.getElementById('torre2').value !== ""){

        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('torre2') && !validaPosicionPieza("torre2")){
            if(torre2 !== '' && torre2 !== document.getElementById('torre2').value){
                let div = document.getElementById(torre2);
                div.innerHTML = '';
            }
            torre2 = document.getElementById('torre2').value;
            let div2 = document.getElementById(torre2);
            div2.innerHTML = sTurno+'rook';
        }
    }
    
    if(document.getElementById('caballero1').value !== ""){

        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('caballero1') && !validaPosicionPieza("caballero1")){
             //Se evalua si los elementos sin iguales
            if(caballero1 !== '' && caballero1 !== document.getElementById('caballero1').value){
                let div = document.getElementById(caballero1);
                div.innerHTML = '';
            }
            caballero1 = document.getElementById('caballero1').value;
            let div2 = document.getElementById(caballero1);
            div2.innerHTML = sTurno+'knight';
        }
       
    }

    if(document.getElementById('caballero2').value !== ""){

        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('caballero2') && !validaPosicionPieza("caballero2")){
             //Se evalua si los elementos sin iguales
            if(caballero2 !== '' && caballero2 !== document.getElementById('caballero2').value){
                let div = document.getElementById(caballero2);
                div.innerHTML = '';
            }
            caballero2 = document.getElementById('caballero2').value;
            let div2 = document.getElementById(caballero2);
            div2.innerHTML = sTurno+'knight';
        }
    }

    if(document.getElementById('alfil1').value !== ""){
        
        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('alfil1') && 
        !validaPosicionPieza("alfil1")){
            //Se evalua si los elementos sin iguales
            if(alfil1 !== '' && alfil1 !== document.getElementById('alfil1').value){
                let div = document.getElementById(alfil1);
                div.innerHTML = '';
            }
            alfil1 = document.getElementById('alfil1').value;
            let div2 = document.getElementById(alfil1);
            div2.innerHTML = sTurno+'bishop';
        }
        
    }

    if(document.getElementById('alfil2').value !== ""){

        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('alfil2') && !validaPosicionPieza("alfil2")){
            //Se evalua si los elementos sin iguales
            if(alfil2 !== '' && alfil2 !== document.getElementById('alfil2').value){
                let div = document.getElementById(alfil2);
                div.innerHTML = '';
            }
            alfil2 = document.getElementById('alfil2').value;
            let div2 = document.getElementById(alfil2);
            div2.innerHTML = sTurno+'bishop';
        }


    }


    if(document.getElementById('reina').value !== ""){

        //Se evalua si los elementos sin iguales
        if(!validaIconoMismaPosicion('reina') && !validaPosicionPieza("reina")){
             //Se evalua si los elementos sin iguales
            if(reina !== '' && reina !== document.getElementById('reina').value){
                let div = document.getElementById(reina);
                div.innerHTML = '';
            }
            reina = document.getElementById('reina').value;
            let div2 = document.getElementById(reina);
            div2.innerHTML = sTurno+'queen';
        }
    }

    if(document.getElementById('rey').value !== "" ){
        //Se evalua si los elementos sin iguales
        if(validaIconoMismaPosicion('rey')|| !validaPosicionPieza("rey")){
            if(rey !== '' && rey !== document.getElementById('rey').value){
                let div = document.getElementById(rey);
                div.innerHTML = '';
            }
            rey = document.getElementById('rey').value;
            let div2 = document.getElementById(rey);
            div2.innerHTML = sTurno+'king';
        }
       
    }

    if(document.getElementById('archer').value !== "" ){
        //Se evalua si los elementos sin iguales
        if(validaIconoMismaPosicion('archer')|| !validaPosicionPieza("archer")){
            if(archer !== '' && archer !== document.getElementById('archer').value){
                let div = document.getElementById(archer);
                div.innerHTML = '';
            }
            archer = document.getElementById('archer').value;
            let div2 = document.getElementById(archer);
            div2.innerHTML = sTurno+'archer';
        }  
    }

    insertImage();
}

export const guardarConfiguracionPiezas = () => {
    if(torre1 === "" || torre2 === "" || caballero1 === "" || caballero2 === "" || alfil1 === "" ||
    alfil2 === "" || rey === "" || reina === ""|| archer === ""){
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
    piezasGame[sTurno+"archer"] = archer;

    document.getElementById(torre1).innerHTML = ''
    document.getElementById(torre2).innerHTML = ''
    document.getElementById(caballero1).innerHTML = ''
    document.getElementById(caballero2).innerHTML = ''
    document.getElementById(alfil1).innerHTML = ''
    document.getElementById(alfil2).innerHTML = ''
    document.getElementById(rey).innerHTML = ''
    document.getElementById(reina).innerHTML = ''
    document.getElementById(archer).innerHTML = ''
    /*
    document.getElementById("torre1").value = ''
    document.getElementById("torre2").value = ''
    document.getElementById("caballero1").value = ''
    document.getElementById("caballero2").value = ''
    document.getElementById("alfil1").value = ''
    document.getElementById("alfil2").value = ''
    document.getElementById("rey").value = ''
    document.getElementById("reina").value = ''
    document.getElementById("archer").value = ''
    */

    document.getElementById("torre1").value = 'b101'
    document.getElementById("torre2").value = 'b103'
    document.getElementById("caballero1").value = 'b104'
    document.getElementById("caballero2").value = 'b105'
    document.getElementById("alfil1").value = 'b102'
    document.getElementById("alfil2").value = 'b106'
    document.getElementById("rey").value = 'b107'
    document.getElementById("reina").value = 'b108'
    document.getElementById("archer").value = 'b201'

    torre1 = '';
    torre2 = '';
    caballero1 = '';
    caballero2 = '';
    alfil1 = '';
    alfil2 = '';
    rey = '';
    reina = '';
    archer = '';

    switch(sTurno){
        case "W":
            sTurno = "B";
            document.getElementById('tog').innerText = "Black's Turn"
            coloring();
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
            if(image.innerText.replace(/\s/g, '') !== 'Montana' && image.innerText.replace(/\s/g, '') !== 'Lago'){
                image.innerHTML = `${image.innerText} <img class='allimg' src="img/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}

const validaIconoMismaPosicion = (sValorComparar) => {
    if((document.getElementById('torre1').value === document.getElementById(sValorComparar).value && sValorComparar !== "torre1")|| 
        (document.getElementById('torre2').value === document.getElementById(sValorComparar).value && sValorComparar !== "torre2")|| 
        (document.getElementById('caballero1').value === document.getElementById(sValorComparar).value  && sValorComparar !== "caballero1")|| 
        (document.getElementById('caballero2').value  === document.getElementById(sValorComparar).value  && sValorComparar !== "caballero2")|| 
        (document.getElementById('alfil1').value === document.getElementById(sValorComparar).value  && sValorComparar !== "alfil1")||
        (document.getElementById('alfil2').value === document.getElementById(sValorComparar).value  && sValorComparar !== "alfil2")|| 
        (document.getElementById('rey').value === document.getElementById(sValorComparar).value  && sValorComparar !== "rey")|| 
        (document.getElementById('reina').value === document.getElementById(sValorComparar).value && sValorComparar !== "reina")||
        (document.getElementById('archer').value === document.getElementById(sValorComparar).value && sValorComparar !== "archer")){
            alert(`La pieza ${sValorComparar} esta repitiendo su posicion con otra pieza`);
            return true;
    }
    return false;
}

//Este metodo evalua si la pieza la estan poniendo en cesped rio o esta invadiendo terreno
const validaPosicionPieza = (sPieza) =>{
    let sEDT_Valor = document.getElementById(sPieza).value;
    let arr = Array.from(sEDT_Valor)
    arr.shift()
    let nValor = parseInt(arr.shift());

    //Evaluaremos si la pieza esta invadiendo terreno
    if((sTurno === "W" && (nValor >= 1 && nValor <=4)) ||
        (sTurno === "B" && (nValor >= 5 && nValor <=8))){
        alert('Esta pieza esta invadiendo terreno')
        return true;
    }

    if(sPieza === "reina" && document.getElementById(sEDT_Valor).innerHTML.replace(/\s/g, '') === "Lago"){
        alert('Esta pieza no puede invadir un lago');
        return true;
    }

    if(document.getElementById(sEDT_Valor).innerHTML.replace(/\s/g, '') === "Montana"){
        alert('Esta pieza no puede invadir una montana');
        return true;
    }

}