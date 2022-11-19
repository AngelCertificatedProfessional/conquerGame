import React,{ useState, useEffect} from 'react';
const TerminosCondiciones = ({ ayuda }) => {
    useEffect(() => {
    }, []);
    return (
        <div className="popup">
            <div className="contenedor bc-white seccion">
                <h2 className='fw-300 centrar-texto seccion'>
                   Terminos y condiciones
                </h2>
                <h4 className='fw-300 centrar-texto seccion'>
                   Piezas Principales
                </h4>
                <div className="contenedor-contenido">
                    
                </div>
                <button className = {`boton blue w-100 m-right`} onClick={() => ayuda()}>Regresar</button>                 
            </div>
        </div>
    );
};


export default TerminosCondiciones;