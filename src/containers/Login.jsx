//Material UI
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { numeroMes } from "../utils/UtileriasPagina";
const LoginFormulario = lazy(() =>
  import("./../components/usuario/LoginFormulario")
);

const FormularioUsuario = lazy(() =>
  import("./../components/usuario/FormularioUsuario")
);

const TerminosCondiciones = lazy(() =>
  import("./../components/usuario/TerminosCondiciones")
);

export const Login = () => {
  const navigate = useNavigate();
  const [accion, setAccion] = useState(1);
  const [mostrarPopup, setmostrarPopup] = useState(false);
  const [mesFinMantenimiento, setMesFinMantenimiento] = useState("");
  useEffect(() => {
    setMesFinMantenimiento(evaluarFechaInicioMantenimiento())
  }, []);
  const ingresarSesion = async () => {
    navigate("/");
    window.location.href = window.location.href;
  };

  const terminosCondiciones = () => {
    setmostrarPopup(!mostrarPopup);
  };

  const evaluarFechaInicioMantenimiento =() =>{
    let fecha = new Date;
    if(fecha.getDate() <= 20){
      return "";
    }
    let mesProximo = fecha.getMonth();
    mesProximo += 1;
    if(mesProximo >= 12){
      mesProximo = 0;
    }
    return numeroMes(mesProximo)
  }

  return (
    <main className=" header-login">
      <section className="formularioSeccion">
        {mesFinMantenimiento !== "" && (
          <h3 className="mensaje-error ma-bottom2"> El servicio esta en mantenimiento hasta el primero de {mesFinMantenimiento}</h3>
        )}
        {accion === 1 && (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginFormulario
              ingresarSesion={ingresarSesion}
              setAccion={setAccion}
              terminosCondiciones={terminosCondiciones}
            />
          </Suspense>
        )}
        {accion === 2 && (
          <Suspense fallback={<div>Loading...</div>}>
            <FormularioUsuario
              setAccion={setAccion}
              accion={accion}
              terminosCondiciones={terminosCondiciones}
              usuario={{}}
            />
          </Suspense>
        )}
      </section>
      {mostrarPopup ? (
        <Suspense fallback={<div>Loading...</div>}>
          <TerminosCondiciones terminosCondiciones={terminosCondiciones} />
        </Suspense>
      ) : null}
    </main>
  );
};