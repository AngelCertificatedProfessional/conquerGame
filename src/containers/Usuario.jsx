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
                <Suspense fallback={<div>Loading...</div>}>
                    <FormularioUsuario
                        setAccion={setAccion}
                        accion={accion}
                        usuario = {4}
                    />
                </Suspense>
            </section>
            <section className='formularioSeccion'>
                <Suspense fallback={<div>Loading...</div>}>
                    <FormularioUsuario
                        setAccion={setAccion}
                        accion={accion}
                        usuario = {3}
                    />
                </Suspense>
            </section>
        </main>
     );
};

export default Usuario;
