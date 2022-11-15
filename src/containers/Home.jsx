import React,{ useState, useEffect, lazy, Suspense } from 'react';
// import { listado, consultaById } from '../utils/ConexionAPI';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const CardContenido = React.lazy(() =>
  import('./../components/generales/CardContenido')
);
const Home = () => {
    let navigate  = useNavigate();
    const [contenidoListado, setContenidoListado] = useState([{
        tipo:1, //juego
        titulo: 'Conquer Game',
        img: 'conquerGame.jpg',
        descripcion:'Juego de estrategia basado en conquistas y ajedrez, de 2 a 6 jugadores'
    }]);
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
                Contenido
            </h2>
            <div className="contenedor-contenido">
                {contenidoListado.map((consultaSerieTemp, index) => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CardContenido
                            contenido = {consultaSerieTemp}
                        />
                    </Suspense>
                ))}
            </div>
        </main>
   );
};

export default Home;
