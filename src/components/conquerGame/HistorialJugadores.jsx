import React,{ useState, useEffect,Suspense} from 'react';
const HistorialJugadores = ({ historial }) => {
    useEffect(() => {
        
    }, []);
    return (     
        <div className="seccion">
            <h2 className='fw-300 centrar-texto'>
                {historial}
            </h2>
        </div>
    );
};


export default HistorialJugadores;