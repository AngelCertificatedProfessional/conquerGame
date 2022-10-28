import React,{ useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const CrearUniser = React.lazy(() =>
  import('./../components/conquerGame/CrearUniser')
);
const FormularioConfiguracion = React.lazy(() =>
  import('./../components/conquerGame/FormularioConfiguracion')
);
const ConquerGameOptions = () => {
    let navigate  = useNavigate();
    const [opcionesJuego, setOpcionesJuego] = useState({});
    const [accion, setAccion] = useState(0);
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
                        accion = {accion}
                        setAccion = {setAccion}
                    />
                </Suspense>
                {accion === 1 && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioConfiguracion
                            accion = {accion}
                            setAccion = {setAccion}
                        />
                    </Suspense>
                )}
                {/* {(accion === 2) && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioUsuario
                            usuario={usuarioTemp}
                            setAccion={setAccion}
                            accion={accion}
                        />
                    </Suspense>
                )} */}
            </div>
        </main>
   );
};

export default ConquerGameOptions;
