import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { listado } from "../utils/ConexionAPI";
import { b64_to_utf8 } from "../utils/UtileriasPagina";
const CrearUniser = React.lazy(() =>
  import("../components/conquerGame/CrearUniser")
);
const FormularioConfiguracion = React.lazy(() =>
  import("../components/conquerGame/FormularioConfiguracion")
);
const BuscarPartida = React.lazy(() =>
  import("../components/conquerGame/BuscarPartida")
);
const ListaPartidas = React.lazy(() =>
  import("../components/conquerGame/ListaPartidas")
);

const ListaMejores10 = React.lazy(() =>
  import("../components/conquerGame/ListaMejores10")
);
const ConquerGame = () => {
  let navigate = useNavigate();
  const [usuario, setUsuario] = useState({}); //Este metodo se utiliza para obtener la info del usuario
  const [accion, setAccion] = useState(0); //Este metodo se utiliza para ver que accion esta realizando el usuario
  const [partidas, setPartidas] = useState(null); //Este metodo se utiliza para ver que accion esta realizando el usuario
  const [usuarios, setUsuarios] = useState(null); //Este metodo se utiliza para ver que accion esta realizando el usuario
  useEffect(() => {
    setUsuario(JSON.parse(b64_to_utf8(sessionStorage.getItem("usuario"))));
    if (
      (usuario === null || usuario === undefined || usuario.usuario === "") &&
      location.pathname !== "/login"
    ) {
      navigate("/login");
    }
  }, []);

  const abrirPartidaJuego = (numeroPartida) => {
    navigate("/ConquerGame/" + numeroPartida);
  };

  const buscarPartidas = () => {
    listado("conquerGame/buscarPartidas")
      .then((resultado) => {
        setPartidas(resultado);
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };

  const buscar10Mejores = () => {
    listado("usuarios/buscar10Mejores")
      .then((resultado) => {
        setUsuarios(resultado);
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };

  return (
    <main className="contenedor seccion">
      <h2 className="fw-300 centrar-texto">Opciones</h2>
      <div className="contenedor-contenido">
        <Suspense fallback={<div>Loading...</div>}>
          <CrearUniser
            accion={accion}
            setAccion={setAccion}
            buscarPartidas={buscarPartidas}
            buscar10Mejores={buscar10Mejores}
          />
        </Suspense>
        {accion === 1 && (
          <Suspense fallback={<div>Loading...</div>}>
            <FormularioConfiguracion abrirPartidaJuego={abrirPartidaJuego} />
          </Suspense>
        )}
        {accion === 2 && (
          <Suspense fallback={<div>Loading...</div>}>
            <BuscarPartida abrirPartidaJuego={abrirPartidaJuego} />
          </Suspense>
        )}
        {accion === 3 && (
          <Suspense fallback={<div>Loading...</div>}>
            <ListaPartidas
              partidas={partidas}
              abrirPartidaJuego={abrirPartidaJuego}
            />
          </Suspense>
        )}
        {accion === 4 && (
          <Suspense fallback={<div>Loading...</div>}>
            <ListaMejores10 usuarios={usuarios} />
          </Suspense>
        )}
      </div>
    </main>
  );
};

export default ConquerGame;
