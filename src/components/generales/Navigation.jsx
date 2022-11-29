
import React, { useEffect,useState, useContext } from 'react';
// // import logo from '../images/hemolife.png'
import { Link } from 'react-router-dom';
// import initialState from './../../utils/initialState';
import {b64_to_utf8,utf8_to_b64} from './../../utils/UtileriasPagina';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
    let navigate  = useNavigate();
    const location = useLocation();
    const [usuario,setUsuario] = useState(null);
    useEffect(() => {
      const usuarioT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')))
      if ((usuarioT === null || usuarioT === undefined || usuarioT.usuario === '') && location.pathname !== '/login') {
          navigate('/login');
      }
      setUsuario(usuarioT)
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
      {usuario !== null && usuario !== undefined && usuario.usuario !== '' && (
        <header>
          {/* <img id="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"> */}
          <h1>Liuts Company Platform</h1>
          <nav>
          <ul>
              <li><Link className = "ligaT" to="usuario">Configuracion</Link></li>
              <li><Link className = "ligaT" onClick={() => cerrarSesion()}>Cerrar Sersion</Link></li>
            </ul>
          </nav>
        </header>
      )}
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
