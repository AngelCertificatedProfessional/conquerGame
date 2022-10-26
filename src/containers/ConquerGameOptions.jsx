import React,{ useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const CrearUniser = React.lazy(() =>
  import('./../components/conquerGame/CrearUniser')
);
const ConquerGameOptions = () => {
    let navigate  = useNavigate();
    const [opcionesJuego, setOpcionesJuego] = useState({});
    useEffect(() => {
        const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')))
        if (
            (usuarioSesionT === null ||
            usuarioSesionT === undefined ||
            usuarioSesionT.usuario === '') &&
            location.pathname !== '/login'
        ) {
            navigate('/login');
        }
    }, []);
   return (
        <main className="contenedor seccion">
            <h2 className='fw-300 centrar-texto'>
                Opciones
            </h2>
            <div className="contenedor-contenido">
                <Suspense fallback={<div>Loading...</div>}>
                    <CrearUniser
                        texto = "Crear Partida"
                        setOpcionesJuego = {setOpcionesJuego}
                    />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <CrearUniser
                        texto = "Uniser a partida"
                        setOpcionesJuego = {setOpcionesJuego}
                    />
                </Suspense>
            </div>
        </main>
   );
};

export default ConquerGameOptions;
