import React, { useEffect, useContext } from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// // import logo from '../images/hemolife.png'
// import { Link } from 'react-router-dom';
// import initialState from './../../utils/initialState';
import {b64_to_utf8,utf8_to_b64} from './../../utils/UtileriasPagina';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
    let navigate  = useNavigate();
    const location = useLocation();
    let usuario;
    useEffect(() => {
        usuario = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')))
        if ((usuario === null || usuario === undefined || usuario.usuario === '') && location.pathname !== '/login') {
            navigate('/login');
        }
    }, []);

    const cerrarSesion = () => {
        sessionStorage.setItem(
            'usuario',
            utf8_to_b64(JSON.stringify({ ...initialState.usuario }))
        );
        navigate('/login');
    };

//   const opcionNavBar = () => {
//     if (usuario === null || usuario === undefined || usuario.usuario === '') {
//       return;
//     } else {
//       return (
//         <>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <NavDropdown title="Catalogos" id="collasible-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/usuario">
//                   Usuarios
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/serie">
//                   Serie
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/video">
//                   Video
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Procesos" id="collasible-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/generarWord">
//                   Generar Word
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav className="ml-auto">
//               <Nav.Link onClick={() => cerrarSesion()}>Cerrar Sesión</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </>
//       );
//     }
//   };

  return (
    <>
    </>
    // <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
    //   {/* <Navbar.Brand as={Link} to="/">
    //             <img src={logo} width="150" height="30" alt="Hemolife"/>
    //         </Navbar.Brand> */}
    //   {usuario === null || usuario === undefined || usuario.usuario === '' ? (
    //     <Navbar.Brand as={Link} to="/login">
    //       Liuts Video
    //     </Navbar.Brand>
    //   ) : (
    //     <Navbar.Brand as={Link} to="/">
    //       Liuts Video
    //     </Navbar.Brand>
    //   )}
    //   {opcionNavBar()}
    // </Navbar>
  );
};

export default Navigation;
