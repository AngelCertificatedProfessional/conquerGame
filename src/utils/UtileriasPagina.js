export const b64_to_utf8 = ( str ) => {
    if(str ===null){
      return null;
    }
    return decodeURIComponent(escape(window.atob( str )));
  }
  
  export const utf8_to_b64 = ( str ) => {
    return window.btoa(unescape(encodeURIComponent( str )));
  }
  
  export const capitalizeFirstLetter =(cadena)=> {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }