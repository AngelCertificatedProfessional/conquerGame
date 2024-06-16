export const eliminarNumeros = (sValor) => {
    return sValor.replace(/[0-9]/g, "");
};

export const eliminarLetras = (sValor) => {
    return sValor.replace(/\D/g, "");
};

export const alfabetoANumero = (sValor) => {
    return sValor.charCodeAt(0) - 64;
};