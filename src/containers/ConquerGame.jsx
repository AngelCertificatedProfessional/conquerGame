import React, { useState, useEffect, Suspense, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { b64_to_utf8, reconvertirTextoAJson } from "../utils/UtileriasPagina";
import { actualizarEspecifico, consultaById } from "../utils/ConexionAPI";
import {
  agregarDivsTablero,
  coloring,
  guardarConfiguracionPiezas,
  setArregloPiezas,
  posicionPiezaJuego,
  setPartida as setPartidaConfiguracion,
  setTurnoJugador as setTurnoJugadorConfiguracion,
  seleccionImagenListadoPieza
} from "../utils/conquerGame/ConquerGameConfiguracion";
import {
  agregarDivsTableroJuego,
  colocarPiezaEspecial,
  coloring as coloringJuego,
  conometro,
  detenerCronometro,
  evaluarResultadoPartida,
  indicarSiguienteJugador,
  limpiarVariablesJuego,
  mostrarMenuUnidadEspecialM,
  posicionPiezasJuego,
  rendirseJugador,
  saltarTurno,
  setJugador,
  setPartida,
  setTurno,
  setTurnoJugador as setTurnoJugadorJuego
} from "../utils/conquerGame/ConquerGameJuego";
import {
  arrEstructuraPiezas, detectarJugador
} from "../utils/conquerGame/ConfiguracionTableroConquerGame";

import swal from "sweetalert";
const ListaEspera = React.lazy(() =>
  import("../components/conquerGame/ListaEspera")
);

const Tablero = React.lazy(() => import("../components/conquerGame/Tablero"));

const ListadoPiezas = React.lazy(() =>
  import("../components/conquerGame/ListadoPiezas")
);

const Ayuda = React.lazy(() => import("../components/conquerGame/Ayuda"));

const SeleccionarUnidadEspecial = React.lazy(() =>
  import("../components/conquerGame/SeleccionarUnidadEspecial")
);

const HistorialJugadores = React.lazy(() =>
  import("../components/conquerGame/HistorialJugadores")
);

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { imagenReducer,objectReducer} from "../hooks/reducerGame";

export const ConquerGame = ({ socket }) => {
  let { numeroPartida } = useParams();

  let navigate = useNavigate();
  const [usuario, setUsuario] = useState(
    JSON.parse(b64_to_utf8(sessionStorage.getItem("usuario"))) || {}
  ); //Este metodo se utiliza para obtener la info del usuario
  const [accion, setAccion] = useState(1); //Este metodo se utiliza para ver que accion esta realizando el usuario
  const [bloquearOpciones, setBloquearOpciones] = useState(false); //Este metodo se utiliza para ver que accion esta realizando el usuario
  const [mostrarIniciar, setMostrarIniciar] = useState(false);
  const [mostrarAyuda, setmostrarAyuda] = useState(false);
  const [mostrarMenuUnidadEspecial, setmostrarMenuUnidadEspecial] =
    useState(false);
  const [partida, dispatchPartidas] = useReducer(objectReducer, null);
  const [turnoUsuario, dispatchTurnoUsuarioRes] = useReducer(
    objectReducer,
    ""
  );
  const [arrRecursos, dispatchRecursosJugador] = useReducer(
    imagenReducer,
    []
  );

  useEffect(() => {
    socket.disconnect();
    socket.connect();
    socket.on("connect", () => {
      console.log("conectado");
      buscarEstadoPartida();
    });

    socket.on("disconnect", () => {});

    socket.on("partida" + numeroPartida, (payload) => {
      switch (payload.estatus) {
        case 1:
          //Inicio de sesion
          if (usuario.usuario === payload.jugadores[0].usuario) {
            setMostrarIniciar(true);
          }
          dispatchPartidas(payload);
          setAccion(1);
          break;
        case 2:
          dispatchPartidas(payload);
          setPartidaConfiguracion(payload);
          const sTurnoJugador = detectarJugador(payload,usuario);
          //Esta seccion indica que si la pagina se esta refrescando al presionar f5 o se salio y volvio a ingresar
          if (!payload.hasOwnProperty("notificarUsuarioListo")) {
            dispatchTurnoUsuarioRes(sTurnoJugador);
            if(arrRecursos.length <= 0){
              dispatchRecursosJugador({
                payload,
                turno:sTurnoJugador,
                arrEstructuraPiezas
              });
              setArregloPiezas(recursoImagen(null,{turno :sTurnoJugador}))
            }
            setTurnoJugadorConfiguracion(sTurnoJugador);
            const nValor = payload.jugadores.findIndex(
              (obj) =>
                obj.usuario === usuario.usuario &&
                obj.hasOwnProperty("posicionPiezasJugador")
            );
            //esta condicion es para pintar las piezas del jugador que ya dio aceptar
            if (nValor !== -1) {
              setBloquearOpciones(true)
            }
            setAccion(2);
          } else if(payload.usuarioListo !== usuario.usuario){
            toast(
                "El jugador " + payload.usuarioListo + " esta listo para jugar"
            );
          }
          if (payload.tipoJuego === 2 && payload.hasOwnProperty("posicionPiezasGlobal")) {
            posicionPiezaJuego(payload);
          }
          break;
        case 3:
          const sTurnoJugadorT = detectarJugador(payload,usuario);
          dispatchTurnoUsuarioRes(sTurnoJugadorT);
          dispatchPartidas(payload);
          setPartida(payload);
          setAccion(3);
          setTurnoJugadorJuego(sTurnoJugadorT);
          if(arrRecursos.length <= 0){
            dispatchRecursosJugador({
              payload,
              turno:sTurnoJugadorT,
              arrEstructuraPiezas
            });
            setArregloPiezas(recursoImagen(null,{turno :sTurnoJugadorT}))
          }
          if (payload.hasOwnProperty("posicionPiezasGlobal")) {
            setJugador(usuario.usuario);
            payload.hasOwnProperty("turno")
              ? setTurno(payload.turno)
              : setTurno(0);
            posicionPiezasJuego(payload);
            if (indicarSiguienteJugador()) {
              toast("Es tu turno " + usuario.usuario);
            }
            conometro(payload);
          }
          break;
        case 4:
          dispatchTurnoUsuarioRes(sTurnoJugadorT);
          dispatchPartidas(payload);
          posicionPiezasJuego(payload);
          detenerCronometro();
          const myTimeout = setTimeout(() => {
            navigate("/conquerGameOpciones");
          }, 10000);
          const sResultado = evaluarResultadoPartida(payload);
          swal({
            title: sResultado,
            text: "Fin de la partida " + sResultado,
            icon: "success",
            button: "OK",
          }).then(function () {
            clearTimeout(myTimeout);
            navigate("/conquerGameOpciones");
          });

          break;
        case 5:
          if (
            payload.hasOwnProperty("alfitrion") &&
            payload.nombreUsuario !== usuario.usuario
          ) {
            swal({
              title: "Partida cancelada",
              text: "La partida fue cancelada por el alfitrion",
              icon: "warning",
              button: "OK",
            });
          }
          navigate("/conquerGameOpciones");
          break;
      }
    });

    mostrarMenuUnidadEspecialM(mostrarVentanaUnidadEspecial);

    return () => {
      //window.removeEventListener('beforeunload', desconectarUsuarioPartida)
      //desconectarUsuarioPartida()
      socket.off("connect");
      socket.off("disconnect");
      socket.off("partida" + numeroPartida);
    };
  }, []);

  const buscarEstadoPartida = () => {
    consultaById("conquerGame/buscarEstatusPartida/", numeroPartida)
      .then((resultado) => {})
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };

  // usePrompt(
  //     "Hello from usePrompt -- Are you sure you want to leave?",
  //     true
  //   );

  const recursoImagen = (state,action) => {
    return reconvertirTextoAJson(arrEstructuraPiezas).map( recurso => {recurso.direccion = (require(`@images/${(turnoUsuario === '' ? action.turno :turnoUsuario) + recurso.icono}.png`)); return recurso;});
  }

  const desconectarUsuarioPartida = () => {
    let vPartida = {};
    vPartida.numeroPartida = numeroPartida;
    actualizarEspecifico("conquerGame/desconectarUsuarioPartida/", vPartida)
      .then((resultado) => {})
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };

  const mostrarTablero = () => {
    let vEnviar = {};
    vEnviar.numeroPartida = numeroPartida;
    actualizarEspecifico("conquerGame/mostrarTablero/", vEnviar)
      .then((resultado) => {})
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };



  /*Seccion funciones res*/

  const guardarConfiguracion = () => {
    const vPeticion = {};
    vPeticion.numeroPartida = numeroPartida;
    vPeticion.piezas = guardarConfiguracionPiezas();
    limpiarVariablesJuego();
    if (vPeticion.piezas === null) return;
    actualizarEspecifico("conquerGame/agregarPiezasTablero/", vPeticion)
      .then((resultado) => {
        setBloquearOpciones(true);
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

  const salirLobby = () => {
    let vPeticion = {};
    vPeticion.numeroPartida = numeroPartida;
    actualizarEspecifico("conquerGame/salirPartida", vPeticion)
      .then((resultado) => {
        navigate("/conquerGameOpciones");
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

  const rendirse = () => {
    swal({
      title: "Estas seguro?",
      text: "Estas seguro de rendirte!?",
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        rendirseJugador();
      }
    });
  };

  const mostrarVentanaUnidadEspecial = (bMostrar) => {
    setmostrarMenuUnidadEspecial(bMostrar);
  };

  const agregarUnidadMapa = (sPieza) => {
    setmostrarMenuUnidadEspecial(false);
    colocarPiezaEspecial(sPieza);
  };

  return (
    <main className="contenedor-juegoF seccion">
      <h2 className="fw-300 centrar-texto">Lista de espera {numeroPartida}</h2>
      {/* Seccion para la lista de espera del juego */}
      {accion === 1 && partida !== null && (
        <>
          <div className="contenedor-contenido contenido-anuncio">
            {partida !== null &&
              partida.hasOwnProperty("jugadores") &&
              partida.jugadores.map((jugador, index) => (
                <>
                  <div
                    className={`contenido-menu-opciones contenido-border w-100 targetaJugador${index}`}
                    key={index}
                  >
                    <Suspense fallback={<div>Loading...</div>}>
                      <ListaEspera key={index} jugador={jugador} />
                    </Suspense>
                  </div>
                </>
              ))}
          </div>
          <div className="contenido-anuncio contenedor-contenido-row">
            {mostrarIniciar === true && (
              <button
                className="boton blue w-100 m-right"
                onClick={() => mostrarTablero()}
              >
                Iniciar
              </button>
            )}
            <button className="boton blue w-100" onClick={() => salirLobby()}>
              Salir
            </button>
          </div>
        </>
      )}
      {/* Seccion para la configuracion del tablero */}
      {accion === 2 && partida !== null && (
        <>
          {bloquearOpciones && <h2>En espera de los otros jugadores</h2>}
          <section
            className={`menu-juego ${
              bloquearOpciones ? "opa-50 disable-ele" : ""
            }`}
          >
            <div className="listado-opciones">
              <Suspense fallback={<div>Loading...</div>}>
                <ListadoPiezas
                  arrRecursos = {arrRecursos}
                  seleccionImagenListadoPieza = {seleccionImagenListadoPieza}
                />
              </Suspense>

              <div className="contenedor-contenido-row">
                <button
                  className={`boton blue w-100 m-right`}
                  onClick={() => guardarConfiguracion()}
                  disabled={bloquearOpciones ? true : false}
                >
                  Confirmar
                </button>
                <button
                  className={`boton blue w-100`}
                  onClick={() => setmostrarAyuda(true)}
                  disabled={bloquearOpciones ? true : false}
                >
                  Ayuda
                </button>
              </div>
            </div>
            <div className="contenedor-contenido-row">
              <div className="contenedor-contenido-column m-right">
                {partida !== null &&
                  partida.hasOwnProperty("jugadores") &&
                  partida.jugadores.map((jugador, index) => (
                    <div
                      className={`w-100 targetaJugador${index} ma-bottom2`}
                      key={index}
                    >
                      <Suspense fallback={<div>Loading...</div>}>
                        <ListaEspera
                          key={index}
                          jugador={jugador}
                          mostrarMensajeListo={true}
                        />
                      </Suspense>
                    </div>
                  ))}
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <Tablero
                  partida={partida}
                  accion={accion}
                  agregarDivsTablero={agregarDivsTablero}
                  coloring={coloring}
                  setPartida={setPartidaConfiguracion}
                  posicionPiezaJuego = {posicionPiezaJuego}
                  turnoUsuario = {turnoUsuario}
                />
              </Suspense>
            </div>
          </section>
        </>
      )}
      {accion === 3 && partida !== null && (
        <>
          <section className="menu-juego">
            <div className="listado-opciones">
              <Suspense fallback={<div>Loading...</div>}>
                <ListadoPiezas
                  arrRecursos = {arrRecursos}
                />
              </Suspense>
              <div className="contenedor-contenido-row">
                <button
                  className="boton blue w-100 m-right"
                  onClick={() => saltarTurno()}
                >
                  Saltar Turno
                </button>
                <button
                  className={`boton blue w-100 m-right`}
                  onClick={() => setmostrarAyuda(true)}
                >
                  Ayuda
                </button>
                <button
                  className={`boton blue w-100`}
                  onClick={() => rendirse()}
                >
                  Rendirse
                </button>
              </div>
            </div>
            <div className="contenedor-contenido-row">
              <div className="contenedor-contenido-column m-right">
                {partida !== null &&
                  partida.hasOwnProperty("jugadores") &&
                  partida.jugadores.map((jugador, index) => (
                    <div
                      className={`w-100 targetaJugador${index} ma-bottom2 opa-50`}
                      key={index}
                      id={`targetaJugador${index}`}
                    >
                      <Suspense fallback={<div>Loading...</div>}>
                        <ListaEspera key={index} jugador={jugador} />
                      </Suspense>
                    </div>
                  ))}
                <h2 id="tiempo">Tiempo:</h2>
                <h3 id="temporizador">01:00:00</h3>
                <h2>Historial:</h2>
                {partida !== null &&
                  partida.hasOwnProperty("historialJugadores") &&
                  partida.historialJugadores
                    .slice(0)
                    .reverse()
                    .map((historial, index) => (
                      <div
                        className={`w-100 historialJugador ma-bottom2`}
                        key={index}
                        id={`historialJugador${index}`}
                      >
                        <Suspense fallback={<div>Loading...</div>}>
                          <HistorialJugadores
                            key={index}
                            historial={historial}
                          />
                        </Suspense>
                      </div>
                    ))}
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <Tablero
                  partida={partida}
                  accion={accion}
                  agregarDivsTablero={agregarDivsTableroJuego}
                  coloring={coloringJuego}
                  posicionPiezasJuego={posicionPiezasJuego}
                  setPartida={setPartida}
                  indicarSiguienteJugador={indicarSiguienteJugador}
                  conometro={conometro}
                />
              </Suspense>
            </div>
          </section>
        </>
      )}
      {mostrarAyuda ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Ayuda
            turno={turnoUsuario}
            setmostrarAyuda={setmostrarAyuda}
            mostrarAyuda={mostrarAyuda}
          />
        </Suspense>
      ) : null}
      {mostrarMenuUnidadEspecial ? (
        <Suspense fallback={<div>Loading...</div>}>
          <SeleccionarUnidadEspecial
            turno={turnoUsuario}
            agregarUnidadMapa={agregarUnidadMapa}
            partida={partida}
          />
        </Suspense>
      ) : null}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </main>
  );
};