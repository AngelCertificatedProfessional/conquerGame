import React,{ useState, useEffect,Suspense} from 'react';
const ListaEspera = ({ jugador }) => {
    const Jugador = React.lazy(() =>
        import('./Jugador')
    );
    useEffect(() => {
        
    }, []);
    return (     
        <div className="seccion">
            <h2 className='fw-300 centrar-texto'>
                {jugador.usuario}
            </h2>
        </div>
    );
};


export default ListaEspera;