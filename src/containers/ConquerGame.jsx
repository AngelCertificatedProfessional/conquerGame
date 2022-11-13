import React,{ useState, useEffect, Suspense,useReducer   } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {b64_to_utf8} from '../utils/UtileriasPagina';
//import {generarConexion} from '../utils/SocketClient';
import { actualizarEspecifico, consultaById } from '../utils/ConexionAPI';
import { agregarDivsTablero, agregarImagenesListado, coloring, guardarConfiguracionPiezas, limpiarVariables, posicionPiezaJugador, setCantidadJugadores } from '../utils/conquerGame/ConquerGameConfiguracion';
import { agregarDivsTableroJuego, agregarImagenesListadoJuego, coloringJuego, evaluarResultadoPartida, limpiarVariablesJuego, posicionPiezasJuego,setPartida, setTurno} from '../utils/conquerGame/ConquerGameJuego';
import swal from 'sweetalert';
const ListaEspera = React.lazy(() =>
    import('../components/conquerGame/ListaEspera')
);

const Tablero = React.lazy(() =>
    import('../components/conquerGame/Tablero')
);

const ListadoPiezas = React.lazy(() =>
    import('../components/conquerGame/ListadoPiezas')
);
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConquerGame = ({socket}) => {
    let { numeroPartida } = useParams(); 
    
    // let navigate  = useNavigate();
    // // const [opcionesJuego, setOpcionesJuego] = useState({});
    const [usuario, setUsuario] = useState(JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario'))) || {}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(1); //Este metodo se utiliza para ver que accion esta realizando el usuario
    const [bloquearOpciones, setBloquearOpciones] = useState(false); //Este metodo se utiliza para ver que accion esta realizando el usuario
    const [mostrarIniciar,setMostrarIniciar] = useState(false)

    const partidaInitial = null;
    const [partida,dispatchPartidas] = useReducer(agregarPartidaRes, partidaInitial);

    const turnoUsuarioInitial = '' //Este metodo se usa para mostrar todos los jugadores en la lista de espera
    const [turnoUsuario,dispatchPiezasTableroRes] = useReducer(mostrarTableroTableroRes, turnoUsuarioInitial);

    useEffect(() => {
        socket.disconnect();
        socket.connect();
        socket.on('connect',() => {
            console.log('conectado');
            buscarEstadoPartida();
        })
        
        socket.on('disconnect',() => {
            console.log('desconectado del servidor');
        })

        socket.on('partida'+numeroPartida,(payload)=> {
            console.log(payload)
            switch(payload.estatus){
                case 1:
                    if(usuario.usuario == payload.jugadores[0].usuario){
                        setMostrarIniciar(true)
                    }
                    dispatchPartidas(payload)
                    setAccion(1)
                break;
                case 2:
                    dispatchPartidas(payload)
                    if(!payload.hasOwnProperty('notificarUsuarioListo')){
                        dispatchPiezasTableroRes(payload);
                        setAccion(2);
                    }else{
                        if(payload.usuarioListo !== usuario.usuario){
                            toast("El jugador "+payload.usuarioListo+" esta listo para jugar")
                        }
                    }
                break;
                case 3:
                    dispatchPiezasTableroRes(payload);
                    dispatchPartidas(payload)
                    setAccion(3);
                    if(payload.hasOwnProperty("posicionPiezasGlobal")){
                        console.log('esta el proceso de posicionPiezasGlobal')
                        console.log(payload)
                        payload.hasOwnProperty("turno") ? setTurno(payload.turno) : setTurno(0)
                        posicionPiezasJuego(payload)
                    }
                break;
                case 4:
                    dispatchPiezasTableroRes(payload);
                    dispatchPartidas(payload)
                    posicionPiezasJuego(payload)
                    evaluarResultadoPartida(payload)
                break;
            }
        })

        if (
            (usuario === null ||
                usuario === undefined ||
                usuario.usuario === '') &&
            location.pathname !== '/login'
        ) {
            navigate('/login');
        }

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('partida'+numeroPartida);
          };

    }, []);
    

    const buscarEstadoPartida = () => {
        consultaById('conquerGame/buscarEstatusPartida/',numeroPartida )
        .then((resultado) => {
        })
        .catch((error) => {
          swal({
            title: 'Error',
            text: error.toString(),
            icon: 'error',
            button: 'OK',
          });
        });
    }

    function agregarPartidaRes(state, action){
        console.log('action')
        console.log(action)
        return action;
    }

    // const desconectarUsuarioPartida = (jugador) => {
    //     consultaById('conquerGame/desconectarUsuarioPartida/',numeroPartida )
    //     .then((resultado) => {
    //     })
    //     .catch((error) => {
    //       swal({
    //         title: 'Error',
    //         text: error.toString(),
    //         icon: 'error',
    //         button: 'OK',
    //       });
    //     });
    // }

    const mostrarTablero = () => {
        let vEnviar = {};
        vEnviar.numeroPartida =  numeroPartida;
        actualizarEspecifico('conquerGame/mostrarTablero/',vEnviar )
        .then((resultado) => {
        })
        .catch((error) => {
          swal({
            title: 'Error',
            text: error.toString(),
            icon: 'error',
            button: 'OK',
          });
        });
    }

    function mostrarTableroTableroRes(state, action){
        if(state !== ''){
            return state;
        }
        const nResultado = action.jugadores.findIndex(function(item, i){
            return usuario.usuario == item.usuario;
        });
        switch (nResultado){
            case 0: 
                return 'O'
            case 1:
                return 'B'
        }
    }

    /*Seccion funciones res*/

    const guardarConfiguracion = () => {
        const vPeticion = {};
        vPeticion.numeroPartida = numeroPartida;
        vPeticion.piezas = guardarConfiguracionPiezas();
        if(vPeticion.piezas === null) return; 
        actualizarEspecifico('conquerGame/agregarPiezasTablero/',vPeticion )
        .then((resultado) => {
            setBloquearOpciones(true)
        })
        .catch((error) => {
          swal({
            title: 'Error',
            text: error.toString(),
            icon: 'error',
            button: 'OK',
          });
        });
    }

    return (
        <main className="contenedor seccion">
            <h2 className='fw-300 centrar-texto'>
                Lista de espera {numeroPartida}
            </h2>
            {/* Seccion para la lista de espera del juego */}
            {(accion === 1 && partida !== null) && (
                <>
                    <div className="contenedor-contenido">
                        {partida !== null &&  partida.hasOwnProperty('jugadores') && partida.jugadores.map((jugador, index) => (
                            <>
                                <div className={`contenido-menu-opciones w-100 targetaJugador${index}`} key={index}> 
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ListaEspera
                                            key={index}
                                            jugador = {jugador}
                                        />
                                    </Suspense>     
                                </div>
                                
                            </>
                           
                        ))}

                    </div>
                    {(mostrarIniciar === true) && (
                        <div className="contenido-anuncio">
                            <button className = "boton blue w-100" onClick={() => mostrarTablero()}>Iniciar</button>
                        </div>
                    )}
                </>
               
            )}
            {/* Seccion para la configuracion del tablero */}
            {(accion === 2 && partida !== null) && (
                <>
                 {(bloquearOpciones) && (
                    <h2>En espera de los otros jugadores</h2>
                 )}
                <section className={`menu-juego ${bloquearOpciones ? 'opa-50 disable-ele': ''}`}>
                    <div className='listado-opciones'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ListadoPiezas 
                                turnoUsuario={turnoUsuario}
                                agregarImagenesListado = {agregarImagenesListado}
                                />
                        </Suspense>
                        <button className = {`boton blue w-100`} onClick={() => guardarConfiguracion()} disabled={bloquearOpciones ? true : false}>Confirmar</button>  
                    </div>
                    <div className="contenedor-contenido-row">
                        <div className="contenedor-contenido-column">
                            {partida !== null && partida.hasOwnProperty('jugadores') && partida.jugadores.map((jugador, index) => (
                                <div className={`w-100 targetaJugador${index} ma-bottom2`} key={index}> 
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ListaEspera
                                            key={index}
                                            jugador = {jugador}
                                            mostrarMensajeListo = {true}
                                        />
                                    </Suspense>     
                                </div>
                            ))}
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Tablero
                                partida = {partida}
                                accion = {accion}
                                setCantidadJugadores = {setCantidadJugadores}
                                agregarDivsTablero = {agregarDivsTablero}
                                coloring = {coloring}
                                posicionPiezaJugador={posicionPiezaJugador}
                                usuario = {usuario}
                                setBloquearOpciones = {setBloquearOpciones}
                                limpiarVariables = {limpiarVariables}
                            />
                        </Suspense>  
                    </div>
                </section>
                </>
            )}
             {(accion === 3 && partida !== null) && (
                <>
                <h2 id="tog" className='fw-300 centrar-texto'>White's Turn</h2>
                <section className="menu-juego">
                    <div className='listado-opciones'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <ListadoPiezas 
                                turnoUsuario={turnoUsuario}
                                agregarImagenesListado = {agregarImagenesListadoJuego}
                                />
                        </Suspense>
                        {/* <button className = "boton blue w-100" onClick={() => guardarConfiguracion()} disabled={bloquearBotonConfirmar ? true : false}>Saltar Turno</button>   */}
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tablero
                            partida = {partida}
                            accion = {accion}
                            setCantidadJugadores = {setCantidadJugadores}
                            agregarDivsTablero = {agregarDivsTableroJuego}
                            coloring = {coloringJuego}
                            posicionPiezasJuego = {posicionPiezasJuego}
                            setPartida = {setPartida}
                            limpiarVariables = {limpiarVariablesJuego}
                        />
                    </Suspense>
                </section>
                </>
            )}
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

export default ConquerGame;
