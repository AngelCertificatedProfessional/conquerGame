export const b64_to_utf8 = (str) => {
  if (str === null) {
    return null;
  }
  return decodeURIComponent(escape(window.atob(str)));
};

export const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)));
};

export const capitalizeFirstLetter = (cadena) => {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
};

export const numeroAAlfabeto = (nValor) => {
  return String.fromCharCode(nValor + 64);
};

export const alfabetoANumero = (sValor) => {
  return sValor.charCodeAt(0) - 64;
};

export const eliminarLetras = (sValor) => {
  return sValor.replace(/\D/g, "");
};

export const eliminarNumeros = (sValor) => {
  return sValor.replace(/[0-9]/g, "");
};

export const eliminarSaltosLinea = (sValor) => {
  return sValor.replace(/\s+/g, " ");
};

export const reconvertirTextoAJson = (vResultado) => {
  return JSON.parse(JSON.stringify(vResultado));
}

export const numeroMes = (nMes) => {
  const arrMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  return arrMes[nMes];
}