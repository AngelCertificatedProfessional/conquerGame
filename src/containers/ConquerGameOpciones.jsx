import React,{ useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from '../utils/UtileriasPagina';
const CrearUniser = React.lazy(() =>
  import('../components/conquerGame/CrearUniser')
);
const FormularioConfiguracion = React.lazy(() =>
  import('../components/conquerGame/FormularioConfiguracion')
);
const BuscarPartida = React.lazy(() =>
  import('../components/conquerGame/BuscarPartida')
);

const ConquerGame = () => {
    let navigate  = useNavigate();
    const [usuario, setUsuario] = useState({}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(0); //Este metodo se utiliza para ver que accion esta realizando el usuario
    useEffect(() => {
        setUsuario(JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario'))))
        if (
            (usuario === null ||
                usuario === undefined ||
                usuario.usuario === '') &&
            location.pathname !== '/login'
        ) {
            navigate('/login');
        }
    }, []);

    const abrirPartidaJuego = (numeroPartida) =>{
        navigate('/ConquerGame/'+numeroPartida);
    }

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
                            abrirPartidaJuego = {abrirPartidaJuego}
                        />
                    </Suspense>
                )}
                {(accion === 2) && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BuscarPartida
                            abrirPartidaJuego = {abrirPartidaJuego }
                        />
                    </Suspense>
                )}
            </div>
        </main>
   );
};

export default ConquerGame;
