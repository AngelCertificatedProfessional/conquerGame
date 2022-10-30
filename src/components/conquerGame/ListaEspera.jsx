import React,{ useState, useEffect,Suspense} from 'react';
const ListaEspera = ({ accion,setAccion,numeroJuego,jugadores }) => {
    const Jugador = React.lazy(() =>
        import('./Jugador')
    );
    useEffect(() => {
        
    }, []);
    return (
        <div className="contenido-menu-opciones w-100">
            <h2 className='fw-300 centrar-texto'>
                Numero de partida {numeroJuego}
            </h2>
            
            {jugadores.map((jugador, index) => (
                <div key={index}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Jugador jugador = {jugador}></Jugador>
                    </Suspense>
                </div>
            ))}

            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(2)}>Iniciar</button>
            </div>
        </div>
    );
};


export default ListaEspera;