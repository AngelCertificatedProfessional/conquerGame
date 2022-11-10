import { lagos, montanas } from "../config/configuracionTablero.js";
export const colorTablero = 'rgb(240, 201, 150)'
export const colorMontana = 'rgb(14, 155, 0)';
export const colorLago = 'rgb(63, 234, 229)';
export const colorOpciones = 'rgb(195, 208, 39)';
export const colorDisparoArcher = 'rgb(223, 55, 19)';
export const colorSeleccionado = 'rgb(213, 92, 209)';
export const colorCasstilloEntrada= 'rgb(185, 185, 179)';
export const colorCasstilloSala= 'rgb(94, 94, 89)';
export const tamanoTableroLargo = 24
export const tamanoTableroAncho = 24
export const cantidadJugadores = 2
export const bMultiJugador= false
export const arregloJugadores = ['W','B','R','P','G','Y']


export const validaPiezaMontana = (idDiv) => {
    if(montanas.includes(idDiv)){
        return true;
    }
    return false;
}

export const validaPiezaLago = (idDiv) => {
    if(lagos.includes(idDiv)){
        return true;
    }
    return false;
}

export const numeroAAlfabeto = (nValor) => {
    return String.fromCharCode(nValor + 64)
}

export const alfabetoANumero = (sValor) => {
    return (sValor.charCodeAt(0)) - 64;
}

export const eliminarLetras = (sValor) => {
    return sValor.replace(/\D/g, "")
}

export const eliminarNumeros = (sValor) => {
    return sValor.replace(/[0-9]/g, '')
}

