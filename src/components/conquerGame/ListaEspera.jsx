import React,{ useState, useEffect,Suspense} from 'react';
const ListaEspera = ({ jugador,mostrarMensajeListo }) => {
    const Jugador = React.lazy(() =>
        import('./Jugador')
    );
    useEffect(() => {
        
    }, []);
    return (     
        <div className="seccion">
            <h2 className='fw-300 centrar-texto'>
                {jugador.usuario} {(mostrarMensajeListo && jugador.hasOwnProperty('posicionPiezasJugador'))? ' (Listo)' + '' : ''}
            </h2>
        </div>
    );
};


export default ListaEspera;