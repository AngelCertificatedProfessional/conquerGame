import React,{ useState, useEffect, useContext, lazy, Suspense } from 'react';
// import AppContext from '../context/AppContext';
// import { listado, consultaById } from '../utils/ConexionAPI';
// import { useNavigate,useLocation } from 'react-router-dom';
// import { Col, Row, Container } from 'react-bootstrap';
// import {b64_to_utf8} from './../utils/UtileriasPagina';
// const CardVideo = React.lazy(() =>
//   import('./../components/Video/CardVideo')
// );
const Home = () => {
//   const { state, agregarUsuario } = useContext(AppContext);
//   let navigate  = useNavigate();
//   const [videoListado, setVideoListado] = useState([]);
//   const location = useLocation();
//   useEffect(() => {
//     const { usuario } = state;
//     if (usuario === null || usuario === undefined || usuario.usuario === '') {
//       const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')))
//       if (
//         (usuarioSesionT === null ||
//           usuarioSesionT === undefined ||
//           usuarioSesionT.usuario === '') &&
//         location.pathname !== '/login'
//       ) {
//         navigate('/login');
//       }
//       agregarUsuario(usuarioSesionT);
//     }

//     //setAlumno({ ...initialState.alumno });
//     actualizarListado();
//   }, []);

//   const actualizarListado = async () => {
//     let jsListado = await listado('video/ultimosCapitulos');
//     // setColumnas(crearArregloColumnas(jsListado));
//     setVideoListado(jsListado);
//     // setAccion(0);

//     // jsListado = await listado('universidad/listado');
//     // setUniversidadListado(jsListado);

//     // jsListado = await listado('carrera/listado');
//     // setCarreraListado(jsListado);
//   };

  

//   const buscarVideo = (id) => {
//     navigate('/capitulo/'+id);
//   }
    console.log('home')
   return (
        <>
            Hola
        </>
//     <Container fluid>
//       <Row>
//         <h1>
//           Ultimos capitulos
//         </h1>
//       </Row>
//       <Row>
//           {videoListado.map((consultaSerieTemp, index) => (
//             <Suspense fallback={<div>Loading...</div>}>
//               <CardVideo
//                 video = {consultaSerieTemp}
//                 buscarVideo = {buscarVideo}
//                 />
//             </Suspense>
//           ))}
//       </Row>
//       </Container>
   );
};

export default Home;
