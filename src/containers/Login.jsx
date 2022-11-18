//Material UI
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const LoginFormulario = lazy(() =>
  import('./../components/Usuario/LoginFormulario')
);

const FormularioUsuario = lazy(() =>
  import('./../components/Usuario/FormularioUsuario')
);

const Login = () => {
    const navigate  = useNavigate();
    const [accion, setAccion] = useState(1);
    useEffect(() => {
        const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')));
        if (
            usuarioSesionT !== null &&
            usuarioSesionT !== undefined &&
            usuarioSesionT.usuario !== ''
        ) {
            ingresarSesion();
        }
    }, []);

    const ingresarSesion = async () => {
        navigate('/');
        window.location.href = window.location.href;
    };
    return (
        <main className=" header-login">
            <section className='formularioSeccion'>
                {accion === 1 && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginFormulario
                            ingresarSesion={ingresarSesion}
                            setAccion={setAccion}
                        />
                    </Suspense>
                )}
                {(accion === 2) && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioUsuario
                            setAccion={setAccion}
                            accion={accion}
                        />
                    </Suspense>
                )}
            </section>
                
        </main>
     );
};

export default Login;
