//Material UI
import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Col, Row, Container,Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import initialState from '../utils/initialState';
// import {b64_to_utf8} from './../utils/UtileriasPagina';
// import LOGIN_ALERTA from '@images/LOGIN_ALERTA.png'
// import LOGIN_LOGOGM from '@images/LOGIN_LOGOGM.png'
// import Image from 'react-bootstrap/Image'
const LoginFormulario = lazy(() =>
  import('./../components/Usuario/LoginFormulario')
);

const FormularioUsuario = lazy(() =>
  import('./../components/Usuario/FormularioUsuario')
);

const Login = () => {
//   // let navigate  = useNavigate();
    const [accion, setAccion] = useState(1);
    const [usuarioTemp, setUsuario] = useState({});
//   // let { usuario } = state;
//   // useEffect(() => {
//   //   if (usuario !== null && usuario !== undefined && usuario.usuario !== '') {
//   //     ingresarSesion(usuario);
//   //   }
//   //   const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')));
//   //   if (
//   //     usuarioSesionT !== null &&
//   //     usuarioSesionT !== undefined &&
//   //     usuarioSesionT.usuario !== ''
//   //   ) {
//   //     ingresarSesion(usuario);
//   //   }
//   // }, []);

    const ingresarSesion = async (jsonUsuario) => {
        navigate('/');
        window.location.href = window.location.href;
    };
    return (
            <main className=" header-login">
                <section className='formularioSeccion'>
                    {accion === 1 && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <LoginFormulario
                                    usuario={usuarioTemp}
                                    ingresarSesion={ingresarSesion}
                                    setAccion={setAccion}
                                />
                            </Suspense>
                        
                    )}
                    {(accion === 2) && (
                         <Suspense fallback={<div>Loading...</div>}>
                            <FormularioUsuario
                                usuario={usuarioTemp}
                                ingresarSesion={ingresarSesion}
                                setAccion={setAccion}
                                accion={accion}
                            />
                        </Suspense>
                    )}
                </section>
                    
            </main>
//     <main className="fondo">
//       <Container>
//         <Row className="justify-content-md-center mt-3">
//           <Col md={5}>
//             <main className="login colorf2f2f2">
//               <Image src={LOGIN_LOGOGM}/>
//               <Suspense fallback={<div>Loading...</div>}>
//                 <LoginFormulario
//                   usuario={usuarioTemp}
//                   ingresarSesion={ingresarSesion}
//                 />
//               </Suspense>
//             </main>
//           </Col>
//           <Col md={7}>
//             <Card
//               style={{ width: '100%' }}
//               className="shadow Secondary colorf2f2f2"
//               text={'black'}
//               >
//                 <Card.Body>
//                   <Col>
//                     <Image src={LOGIN_ALERTA} className="imagenAlerta"/>
//                     <Card.Text className="mtop-0 mbot-0 informacionAdicional">
//                       El próximo domingo 9 de marzo del 2014 a partir de las 1:00 horas hasta las 5:00 horas, el servicio de gm transport software estará fuera de servicio por cuestiones de mantenimiento y actualización; por lo cual le pedimos que tomen sus precauciones. 
//                       {/* {evento.descripcion} */}
//                     </Card.Text>
//                   </Col>
//                 </Card.Body>
//               </Card>
//                 <Col className="mt-3">
//                   <Image src="https://obs-banner.obs.na-mexico-1.myhuaweicloud.com/LOGIN_R5.png"/>
//                 </Col>
//           </Col>
//         </Row>
//         <Row className="justify-content-md-center">
          
//         </Row>
//       </Container>
//     </main>
  );
};

export default Login;
