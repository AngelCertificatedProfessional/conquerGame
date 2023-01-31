//Material UI
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
const LoginFormulario = lazy(() =>
  import("./../components/Usuario/LoginFormulario")
);

const FormularioUsuario = lazy(() =>
  import("./../components/Usuario/FormularioUsuario")
);

const TerminosCondiciones = lazy(() =>
  import("./../components/Usuario/TerminosCondiciones")
);

const Login = () => {
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
    switch(mesProximo){
      case 0:
        return "Enero"
      case 1:
        return "Febrero"
      case 2:
        return "Marzo"
      case 3:
        return "Abril"
      case 4:
        return "Mayo"
      case 5:
        return "Junio"
      case 6:
        return "Julio"
      case 7:
        return "Agosto"
      case 8:
        return "Septiembre"
      case 9:
        return "Octubre"
      case 10:
        return "Noviembre"
      case 11:
        return "Diciembre"
    }
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

export default Login;
