import {montanas,lagos} from './config/configuracionTablero.js'
import { eliminarLetras, eliminarNumeros, numeroAAlfabeto, tamanoTableroAncho, tamanoTableroLargo } from './util/configuracionGeneral.js';

let sTurno = 'W';
let sPiezaAColocar = ''
let piezaSeleccionada = null;

let arregloPiezas = [{
    campoNombre:"edt_hachero1",
    nombre:"hachero1",
    posicion:"",
    icono:"hachero",
},{
    campoNombre:"edt_hachero2",
    nombre:"hachero2",
    posicion:"",
    icono:"hachero",
},
{
    campoNombre:"edt_lancero1",
    nombre:"lancero1",
    posicion:"",
    icono:"lancero",
},
{
    campoNombre:"edt_lancero2",
    nombre:"lancero2",
    posicion:"",
    icono:"lancero",
},
{
    campoNombre:"edt_lancero3",
    nombre:"lancero3",
    posicion:"",
    icono:"lancero",
},
{
    campoNombre:"edt_lancero4",
    nombre:"lancero4",
    posicion:"",
    icono:"lancero",
},
{
    campoNombre:"edt_archer",
    nombre:"archer",
    posicion:"",
    icono:"archer",
},
{
    campoNombre:"edt_asesino",
    nombre:"asesino",
    posicion:"",
    icono:"asesino",
},
{
    campoNombre:"edt_caballero1",
    nombre:"caballero1",
    posicion:"",
    icono:"caballero",
},
{
    campoNombre:"edt_caballero2",
    nombre:"caballero2",
    posicion:"",
    icono:"caballero",
},
{
    campoNombre:"edt_caballero3",
    nombre:"caballero3",
    posicion:"",
    icono:"caballero",
},
{
    campoNombre:"edt_caballero4",
    nombre:"caballero4",
    posicion:"",
    icono:"caballero",
},
{
    campoNombre:"edt_rey",
    nombre:"rey",
    posicion:"",
    icono:"rey",
},
]

const piezasGame = {};

const agregarImagenesListado = () => {
    for ( const piecePosition in arregloPiezas ) {  
        let divElement = document.createElement("div");

        //divElement.id = "row"+nContRow;
        //divElement.className = "row";  
        divElement.className = 'iconoMenu'
        divElement.id = arregloPiezas[piecePosition].nombre
        divElement.innerHTML = sTurno+arregloPiezas[piecePosition].nombre+`<img class='allimg' src="img/${sTurno+arregloPiezas[piecePosition].icono}.png" alt="">`
        divElement.style.cursor = 'pointer'
        document.getElementById("lista_personajes").appendChild(divElement);
    }
}
agregarImagenesListado();

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

function coloring() {
    document.querySelectorAll('.white-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(240, 201, 150)'; 
        const nValor = eliminarLetras(colorNegro.id)
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.green-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(14, 155, 0)';
        const nValor = eliminarLetras(colorNegro.id)
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })

    document.querySelectorAll('.blue-box').forEach(colorNegro => {
        colorNegro.style.backgroundColor = 'rgb(63, 234, 229)'; 
        const nValor = eliminarLetras(colorNegro.id)
        if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
            colorNegro.style.opacity = 0.3; 
        }else{
            colorNegro.style.opacity = 1;  
        }
    })
}
coloring()



export const colocarConfiguracionPiezas = () =>{

    for ( const piecePosition in arregloPiezas ) {  
        if(document.getElementById(arregloPiezas[piecePosition].campoNombre).value !== "" 
            && !validaIconoMismaPosicion(arregloPiezas[piecePosition].campoNombre) 
            && !validaPosicionPieza(arregloPiezas[piecePosition].campoNombre)){
                
            if(arregloPiezas[piecePosition].posicion !== '' && arregloPiezas[piecePosition].posicion !== document.getElementById(arregloPiezas[piecePosition].campoNombre).value){
                const div = document.getElementById(arregloPiezas[piecePosition].posicion);
                div.innerHTML = '';
            }
            arregloPiezas[piecePosition].posicion = document.getElementById(arregloPiezas[piecePosition].campoNombre).value;
            const div2 = document.getElementById(arregloPiezas[piecePosition].posicion);
            div2.innerHTML = sTurno+arregloPiezas[piecePosition].icono;
        }
    }
    insertImage();
}

export const guardarConfiguracionPiezas = () => {
    //Validamos que no halla piezas vacias
    for ( const piecePosition in arregloPiezas ) {  
        if(arregloPiezas[piecePosition].posicion === ""){
            alert("Debe agregar todas las piezas al tablero primero")
            return;
        }
    }
    //agregamos la informaicon a un arreglo para poderlo limpar la info despues
    for ( const piecePosition in arregloPiezas ) {  
        piezasGame[sTurno+arregloPiezas[piecePosition].nombre] = arregloPiezas[piecePosition].posicion;
        document.getElementById(arregloPiezas[piecePosition].posicion).innerHTML = '';
        arregloPiezas[piecePosition].posicion = '';
        // document.getElementById(arregloPiezas[piecePosition].campoNombre).value = ''
    }

    document.getElementById("edt_hachero1").value = '1A'
    document.getElementById("edt_hachero2").value = '1B'
    document.getElementById("edt_lancero1").value = '1C'
    document.getElementById("edt_lancero2").value = '1D'
    document.getElementById("edt_lancero3").value = '1E'
    document.getElementById("edt_lancero4").value = '2F'
    document.getElementById("edt_archer").value =   '2G'
    document.getElementById("edt_asesino").value =  '4A'
    document.getElementById("edt_caballero1").value = '3A'
    document.getElementById("edt_caballero2").value = '3C'
    document.getElementById("edt_caballero3").value = '4D'
    document.getElementById("edt_caballero4").value = '3E'
    document.getElementById("edt_rey").value = '4F'

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
                image.innerHTML = `${image.innerText} <img class='allimg' src="img/${eliminarNumeros(image.innerText)}.png" alt="">`
            }
        }
    })
}

const validaIconoMismaPosicion = (sValorComparar) => {

    const resiltado = arregloPiezas.filter(function (item) {
        return item.posicion === document.getElementById(sValorComparar).value && sValorComparar !== item.campoNombre;
    });
    if(resiltado.length > 0 ){
        alert('esta pieza esta chocando su posicion')
        return true
    }
    return false;
}

//Este metodo evalua si la pieza la estan poniendo en cesped rio o esta invadiendo terreno
const validaPosicionPieza = (sPieza) =>{
    let sEDT_Valor = document.getElementById(sPieza).value;
    const nValor = eliminarLetras(sEDT_Valor)

    //Evaluaremos si la pieza esta invadiendo terreno
    if((sTurno === "W" && (nValor >= 1 && nValor <=tamanoTableroLargo/2)) ||
         (sTurno === "B" && (nValor >= (tamanoTableroLargo/2)+1 && nValor <=tamanoTableroLargo))){
        alert('Esta pieza esta invadiendo terreno')
        return true;
    }

    if((sPieza === "edt_caballero1"||sPieza === "edt_caballero2"||sPieza === "edt_caballero3"||
        sPieza === "edt_caballero4" )&& lagos.includes(sEDT_Valor)){
        alert('Esta pieza no puede invadir un lago');
        return true;
    }
    if(montanas.includes(sEDT_Valor)){
        alert('Esta pieza no puede invadir una montana');
        return true;
    }
}


// Moving the element
document.querySelectorAll('.box').forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        console.log(sPiezaAColocar)
        if(sPiezaAColocar === ''){
            return
        }
        //En este segmento detectaremos que si la pieza ya fue colocada, esta se eliminara del mapa para ponerla de nuevo
        let nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
        console.log(nValor)
        if(nValor !== -1 && arregloPiezas[nValor].posicion !== ''){
            document.getElementById(arregloPiezas[nValor].posicion).innerHTML = '';
        }
        hathiTest.innerHTML = sPiezaAColocar
        console.log(sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ))
        console.log(hathiTest.id)
        nValor = arregloPiezas.findIndex(obj => obj.nombre===sPiezaAColocar.replace(/\s/g, '').substring(1,sPiezaAColocar.length ));
        if(nValor !== -1){
            arregloPiezas[nValor].posicion = hathiTest.id;
        }
        console.log(arregloPiezas)
        sPiezaAColocar = '';
        insertImage();
    })
})

document.querySelectorAll('.iconoMenu').forEach(hathiTest => {
    hathiTest.addEventListener('click', function () {
        //guardamos la pieza
        sPiezaAColocar = hathiTest.innerText;
        if(piezaSeleccionada !== null && piezaSeleccionada.id !== hathiTest.id){
            piezaSeleccionada.style.backgroundColor = 'rgb(255, 255, 255)';
            piezaSeleccionada = null;
        }

        if(hathiTest.style.backgroundColor === 'rgb(72, 66, 65)'){
            hathiTest.style.backgroundColor = 'rgb(255, 255, 255)'; 
            piezaSeleccionada = null;
        }else{
            hathiTest.style.backgroundColor = 'rgb(72, 66, 65)';
            piezaSeleccionada = hathiTest;
        }
    })
})