import Swal from 'sweetalert2';
export const alertError = (sMensaje, sError) => {
    Swal.fire({
        title: sMensaje,
        text: sError,
        icon: 'error',
        customClass: {
            container: 'mi-popup-con-zindex-superior',
        },
    })
}

export const alertMensaje = (titulo, html, icon) => {
    Swal.fire(titulo, html, icon);
}

export const alertAdvertencia = async (text) => {
    return await Swal.fire({
        title: "Estas seguro?",
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    })
}

