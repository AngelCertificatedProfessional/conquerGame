import React,{ useState, useEffect,Suspense} from 'react';
import {  } from '../../utils/ConexionAPI';

const Icono = React.lazy(() =>
    import('../Usuario/Icono')
);

const ListadoIconos = ({ agregarUnidadMapa }) => {
    
    const actualizarIconoUsuario = (sIcono) => {
        vResultado.icono = sIcono
        actualizarEspecifico('usuarios/actualizarIconoUsuario',vResultado)
        .then((resultado) => {
        })
        .catch((error) => {
            swal({
            title: 'Error',
            text: error.toString(),
            icon: 'error',
            button: 'OK',
            });
        });
    }

    const contenidoListado = [{
        nombre:'kaguya',
        carpeta: 'kaguya',
        img: 'kaguya.jpg',
    }];

    return (
        <div className="contenido-menu-opciones ">
              {contenidoListado.map((consultaSerieTemp, index) => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Icono
                            contenido = {consultaSerieTemp}
                        />
                    </Suspense>
                ))}
        </div>
    );
};


export default ListadoIconos;