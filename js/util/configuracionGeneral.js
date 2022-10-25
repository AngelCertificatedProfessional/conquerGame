import { lagos, montanas } from "../config/configuracionTablero.js";
export const colorOpciones = 'rgb(195, 208, 39)';
export const colorDisparoArcher = 'rgb(223, 55, 19)';
export const colorMontana = 'rgb(14, 155, 0)';
export const colorLago = 'rgb(63, 234, 229)';
export const tamanoTableroLargo = 24
export const tamanoTableroAncho = 24


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

export const eliminarLetras = (sValor) => {
    return sValor.replace(/\D/g, "")
}