const fuente = '1.3rem "Roboto","Helvetica","Arial",sans-serif'; // Puedes ajustar la fuente según tus necesidades
export const medirTextoEnPixeles = (texto) => {
    // Crear un elemento div oculto
    const elementoDiv = document.createElement('div');
    elementoDiv.style.position = 'absolute';
    elementoDiv.style.visibility = 'hidden';
    elementoDiv.style.font = fuente; // Establecer la fuente del texto

    // Establecer el texto en el elemento div
    elementoDiv.textContent = texto;

    // Agregar el elemento div al cuerpo del documento
    document.body.appendChild(elementoDiv);

    // Obtener la anchura del texto
    const anchoTexto = elementoDiv.offsetWidth;

    // Eliminar el elemento div del cuerpo del documento
    document.body.removeChild(elementoDiv);

    return anchoTexto;
}
