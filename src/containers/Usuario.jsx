//Material UI
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { consultaById } from '../utils/ConexionAPI';
import {b64_to_utf8} from '../utils/UtileriasPagina';
const FormularioUsuario = lazy(() =>
  import('../components/Usuario/FormularioUsuario')
);


const Usuario = () => {
    const navigate  = useNavigate();
    const [accion, setAccion] = useState(3);
    const [usuario, setUsuario] = useState({});
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
        buscarRegistro(usuarioSesionT.token)
    }, []);

    const buscarRegistro = (sToken) => {
        consultaById('usuarios/consultaById/', sToken)
        .then((jsUsuario) => {
            setUsuario(jsUsuario);
            setAccion(3);
        });
    };
    
    return (
        <main className="main-actualizacion">
            <section className='formularioSeccion'>
                <div className="seccion">
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioUsuario
                            setAccion={setAccion}
                            accion={3}
                            usuario = {usuario}
                        />
                    </Suspense>
                </div>
                <div className="seccion">
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioUsuario
                            setAccion={setAccion}
                            accion={4}
                            usuario = {usuario}
                        />
                    </Suspense>
                </div>
            </section>
        </main>
     );
};

export default Usuario;
