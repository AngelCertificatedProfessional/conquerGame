//Material UI
import React, { useState, useEffect, lazy, Suspense } from "react";
import ListadoIconos from "../components/Usuario/ListadoIconos";
import { consultaById } from "../utils/ConexionAPI";
import { b64_to_utf8 } from "../utils/UtileriasPagina";
const FormularioUsuario = lazy(() =>
  import("../components/Usuario/FormularioUsuario")
);
const MenuUsuario = lazy(() => import("../components/Usuario/MenuUsuario"));

const Usuario = () => {
  const [accion, setAccion] = useState(3);
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    const usuarioSesionT = JSON.parse(
      b64_to_utf8(sessionStorage.getItem("usuario"))
    );
    if (
      (usuarioSesionT !== null &&
        usuarioSesionT !== undefined &&
        usuarioSesionT.usuario === "")
    ) {
      buscarRegistro(usuarioSesionT.token);
    }
  }, []);

  const buscarRegistro = (sToken) => {
    consultaById("usuarios/consultaById/", sToken).then((jsUsuario) => {
      setUsuario(jsUsuario);
      setAccion(3);
    });
  };

  return (
    <main className="contenedor-juegoF seccion">
      <h2 className="fw-300 centrar-texto">Opciones</h2>
      <div className="contenedor-contenido">
        <Suspense fallback={<div>Loading...</div>}>
          <MenuUsuario accion={accion} setAccion={setAccion} />
        </Suspense>
        {accion === 3 && (
          <Suspense fallback={<div>Loading...</div>}>
            <FormularioUsuario
              setAccion={setAccion}
              accion={3}
              usuario={usuario}
            />
          </Suspense>
        )}
        {accion === 4 && (
          <Suspense fallback={<div>Loading...</div>}>
            <FormularioUsuario
              setAccion={setAccion}
              accion={4}
              usuario={usuario}
            />
          </Suspense>
        )}
        {accion === 5 && (
          <Suspense fallback={<div>Loading...</div>}>
            <ListadoIconos setAccion={setAccion} accion={5} usuario={usuario} />
          </Suspense>
        )}
      </div>
    </main>
  );
};

export default Usuario;
