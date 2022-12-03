// import {montanas,lagos} from './config/configuracionTablero.js'
// import { cantidadJugadores, colorLago, colorMontana, colorSeleccionado, colorTablero, eliminarLetras, eliminarNumeros, numeroAAlfabeto, tamanoTableroAncho, tamanoTableroLargo } from './util/configuracionGeneral.js';

import { colorLago, colorMontana, colorSeleccionadoListado, colorSeleccionadoTablero, colorTablero, lagos, montanas, tamanoTableroAncho, tamanoTableroLargo } from "./ConfiguracionTableroConquerGame.js";
import { alfabetoANumero, eliminarLetras, eliminarNumeros, numeroAAlfabeto } from "../UtileriasPagina";
import swal from 'sweetalert';

let sTurno = 'O';
let nCantidadJugadores = 0;
let sPiezaAColocar = ''
let piezaSeleccionada = null;

const arregloPiezas = [{
    nombre:"hachero1",
    posicion:"",
    icono:"hachero",
    direccion:""
},{
    nombre:"hachero2",
    posicion:"",
    icono:"hachero",
    direccion:""
},
{
    nombre:"lancero1",
    posicion:"",
    icono:"lancero",
    direccion:""
},
{
    nombre:"lancero2",
    posicion:"",
    icono:"lancero",
    direccion:""
},
{
    nombre:"lancero3",
    posicion:"",
    icono:"lancero",
    direccion:""
},
{
    nombre:"lancero4",
    posicion:"",
    icono:"lancero",
    direccion:""
},
{
    nombre:"archer",
    posicion:"",
    icono:"archer",
    direccion:""
},
{
    nombre:"asesino",
    posicion:"",
    icono:"asesino",
    direccion:""
},
{
    nombre:"caballero1",
    posicion:"",
    icono:"caballero",
    direccion:""
},
{
    nombre:"caballero2",
    posicion:"",
    icono:"caballero",
    direccion:""
},
{
    nombre:"caballero3",
    posicion:"",
    icono:"caballero",
    direccion:""
},
{
    nombre:"caballero4",
    posicion:"",
    icono:"caballero",
    direccion:""
},
{
    nombre:"rey",
    posicion:"",
    icono:"rey",
    direccion:""
}]

export const limpiarVariables = () => {
    for ( const piecePosition in arregloPiezas ) {
        arregloPiezas[piecePosition].direccion = ""
        arregloPiezas[piecePosition].posicion = ""
    }
}

export const agregarImagenesListado = async(turnoUsuario) => {
    sTurno = turnoUsuario
    for ( const piecePosition in arregloPiezas ) {
        const response  = await import(`@images/${sTurno+arregloPiezas[piecePosition].icono}.png`)  
        arregloPiezas[piecePosition].direccion = response.default
        let divElement = document.createElement("div");
        divElement.className = 'iconoMenu'
        divElement.id = arregloPiezas[piecePosition].nombre
        divElement.innerHTML = sTurno+arregloPiezas[piecePosition].nombre+`<img class='allimg' src="${arregloPiezas[piecePosition].direccion}" alt="">`
        divElement.style.cursor = 'pointer'
        document.getElementById("lista_personajes").appendChild(divElement);
    }
    
    document.querySelectorAll('.iconoMenu').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            //guardamos la pieza
            sPiezaAColocar = hathiTest.innerText;
            //Segmento para deselecconar las opciones tanto del tablero como del listado
            if(piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id){
                piezaSeleccionada.style.backgroundColor = 'rgb(255, 255, 255)';
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===piezaSeleccionada.innerText.replace(/\s/g, '').substring(1,piezaSeleccionada.innerText.length));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    if(lagos.includes(arregloPiezas[nValor].posicion)){
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
                    }else{
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
                    }
                }
                piezaSeleccionada = null;
            }
    //         //pintar el seleccionado normal o gris sobre la misma pieza
            if(hathiTest.style.backgroundColor === colorSeleccionadoListado){
                hathiTest.style.backgroundColor = 'rgb(255, 255, 255)'; 
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===piezaSeleccionada.innerText.replace(/\s/g, '').substring(1,piezaSeleccionada.innerText.length));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    if(lagos.includes(arregloPiezas[nValor].posicion)){
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
                    }else{
                        document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
                    }
                }
                piezaSeleccionada = null;
            }else{
                hathiTest.style.backgroundColor = colorSeleccionadoListado;
                piezaSeleccionada = hathiTest;
                //Detectamos que si la pieza ya fue puesta la marcamos para no confundir al usuario
                let nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
                if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                    document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorSeleccionadoTablero;
                }
            }
        })
    })
}

export const agregarDivsTablero = () => {
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

    // Moving the element
    document.querySelectorAll('.box').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            if(sPiezaAColocar === '' || piezaSeleccionada === '' || piezaSeleccionada === null){
                return
            }

            //En este segmento detectamos si hay otra pieza en ese lugar
            let nValor = arregloPiezas.findIndex(obj => obj.posicion===hathiTest.id);
            if(nValor !== -1){
                alert('Ya se encuentra una pieza en esta posición');
                return
            }
            
            //Validamos que la pieza no este invadiendo otro terreno que no le pertenece
            if(validaPosicionPieza(sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ),hathiTest.id)){
                return
            }

            //En este segmento detectaremos que si la pieza ya fue colocada, esta se eliminara del mapa para ponerla de nuevo
            nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
            if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
                document.getElementById(arregloPiezas[nValor].posicion).innerHTML = '';
                if(lagos.includes(arregloPiezas[nValor].posicion)){
                    document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorLago;
                }else{
                    document.getElementById(arregloPiezas[nValor].posicion).style.backgroundColor = colorTablero;
                }
            }

            hathiTest.style.backgroundColor = colorSeleccionadoTablero
            //agrega el escrito de la pieza a color
            hathiTest.innerHTML = sPiezaAColocar
            //se le asigna la nueva posicion
            arregloPiezas[nValor].posicion = hathiTest.id;

            insertImage();
        })
    })

}

export const coloring = () => {
    document.querySelectorAll('.box').forEach(colorNegro => {
        if(colorNegro.classList.contains('white-box')){
            colorNegro.style.backgroundColor = colorTablero; 
        }else if(colorNegro.classList.contains('green-box')){
            colorNegro.style.backgroundColor = colorMontana;
        }else if(colorNegro.classList.contains('blue-box')){
            colorNegro.style.backgroundColor = colorLago; 
        }

        const nValor = eliminarLetras(colorNegro.id)
        switch (nCantidadJugadores){
            case 2:
                if((sTurno === "O" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
                (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
            case 3:
                if((sTurno === "O" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
                (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/nCantidadJugadores)*2))||
                (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
            break;
            case 4:
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(colorNegro.id))
                if((sTurno === "O" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                (sTurno === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho)))||
                (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                    colorNegro.style.opacity = 0.3; 
                }else{
                    colorNegro.style.opacity = 1;  
                }
                break;
        }
    })
}

export const guardarConfiguracionPiezas = () => {
    //Validamos que no halla piezas vacias
    for ( const piecePosition in arregloPiezas ) {  
        if(arregloPiezas[piecePosition].posicion === ""){
            swal({
                title: 'Error',
                text: "Debe agregar todas las piezas al tablero primero",
                icon: 'error',
                button: 'OK',
              });
            return null;
        }
    }
    //agregamos la informaicon a un arreglo para poderlo limpar la info despues
    const piezasGame = {};
    for ( const piecePosition in arregloPiezas ) {  
        piezasGame[sTurno+arregloPiezas[piecePosition].nombre] = arregloPiezas[piecePosition].posicion;
    }
    sPiezaAColocar = ''
    return piezasGame;
}


const insertImage = () => {
    document.querySelectorAll('.box').forEach(async(image) => {
        //Validamos que contenga texto los elementos del div
        if (image.innerText.length !== 0) {
            const response  = await import(`@images/${eliminarNumeros(image.innerText)}.png`)  
            image.innerHTML = `${image.innerText} <img class='allimg' src="${response.default}" alt="">`
            image.style.cursor = 'pointer'
        }
    })
}

// //Este metodo evalua si la pieza la estan poniendo en cesped rio o esta invadiendo terreno
const validaPosicionPieza = (sPieza,sPosicion) =>{
    const nValor = eliminarLetras(sPosicion)

    //Evaluaremos si la pieza esta invadiendo terreno

    switch (nCantidadJugadores){
        case 2:
            if((sTurno === "O" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
            (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
                alert('Esta pieza esta invadiendo terreno')
                return true;
            }
            break;
        case 3:
            if((sTurno === "O" && (nValor <=parseInt(tamanoTableroLargo*.66)+1)) ||
            (sTurno === "B" && (nValor <= parseInt(tamanoTableroLargo*.33)+1 || nValor >=1+(tamanoTableroLargo/nCantidadJugadores)*2))||
            (sTurno === "R" && (nValor >= parseInt(tamanoTableroLargo*.33)+2 ))){
                    alert('Esta pieza esta invadiendo terreno')
                    return true; 
            }
        break;
        case 4:
                //eliminacion de numeros para el lado vertical
                const nValorCol = alfabetoANumero(eliminarNumeros(sPosicion))
                if((sTurno === "O" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho))) || 
                    (sTurno === "B" && ((nValor >= 1 && nValor <=tamanoTableroLargo/2) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2))) ||
                    (sTurno === "R" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= tamanoTableroAncho/2+1 && nValorCol <=tamanoTableroAncho)))||
                    (sTurno === "P" && ((nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo) || (nValorCol >= 1 && nValorCol <=tamanoTableroAncho/2)))){
                    alert('Esta pieza esta invadiendo terreno')
                    return true; 
                }
    }



    if((eliminarNumeros(sPieza) === "caballero" || eliminarNumeros(sPieza) === "castillo") && lagos.includes(sPosicion)){
        alert('Esta pieza no puede invadir un lago');
        return true;
    }
    if(montanas.includes(sPosicion)){
        alert('Esta pieza no puede invadir una montaña');
        return true;
    }
}

export const setCantidadJugadores = (cantidadJugadoresT) =>{
    nCantidadJugadores = cantidadJugadoresT;
}

export const posicionPiezaJugador = (partidaJugador) => {
    for ( const piecePosition in partidaJugador.posicionPiezasJugador ) {
        var div = document.getElementById(partidaJugador.posicionPiezasJugador[piecePosition]);
        div.innerHTML = piecePosition.replace(' ','');
    }
    insertImage()
}
