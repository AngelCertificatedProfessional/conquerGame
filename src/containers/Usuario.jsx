//Material UI
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from '../utils/UtileriasPagina';
const FormularioUsuario = lazy(() =>
  import('../components/Usuario/FormularioUsuario')
);

const TerminosCondiciones = lazy(() =>
  import('../components/Usuario/TerminosCondiciones')
);


const Usuario = () => {
    const navigate  = useNavigate();
    const [accion, setAccion] = useState(1);
    const [mostrarPopup,setmostrarPopup] = useState(false)
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

    const ayuda = () =>{
        setmostrarPopup(!mostrarPopup)
    }
    
    return (
        <main className=" header-login">
            <section className='formularioSeccion'>
                <Suspense fallback={<div>Loading...</div>}>
                    <FormularioUsuario
                        setAccion={setAccion}
                        accion={accion}
                        ayuda = {ayuda}
                    />
                </Suspense>
            </section>
            {mostrarPopup ? 
                <Suspense fallback={<div>Loading...</div>}>
                    <TerminosCondiciones  
                        ayuda = {ayuda}
                    />  
                </Suspense>  
              : null  
            }
        </main>
     );
};

export default Usuario;
