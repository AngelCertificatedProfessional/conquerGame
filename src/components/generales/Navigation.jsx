import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { b64_to_utf8 } from "./../../utils/UtileriasPagina";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    const usuarioT = JSON.parse(b64_to_utf8(sessionStorage.getItem("usuario")));
    if (
      (usuarioT === null ||
        usuarioT === undefined ||
        usuarioT.usuario === "") &&
      location.pathname !== "/login"
    ) {
      navigate("/login");
    }else if(usuarioT !== null &&
      usuarioT !== undefined &&
      usuarioT.usuario !== "" && 
      location.pathname === "/login"){
        navigate("/");  
        //window.location.href = window.location.href;
    }
    setUsuario(usuarioT);
  }, []);

  const cerrarSesion = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("usuario");
    setUsuario(null);
    navigate("/login");
  };

  return (
    <>
      {usuario !== null && usuario !== undefined && usuario.usuario !== "" && (
        <header>
          <Link className="ligaT" to="">
            <h1>Liuts Company Platform</h1>
          </Link>
          <nav>
            <ul>
              {!usuario.invitado && (
                <li>
                  <Link className="ligaT" to="usuario">
                    Configuracion
                  </Link>
                </li>
              )}
              <li>
                <Link to="/mejoras" className="ligaT">
                  Mejoras
                </Link>
              </li>
              <li>
                <Link to="/login" className="ligaT" onClick={cerrarSesion}>
                  Cerrar Sersion
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navigation;
