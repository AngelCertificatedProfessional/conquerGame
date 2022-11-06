import React,{ useState, useEffect, Suspense,useReducer   } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {b64_to_utf8} from '../utils/UtileriasPagina';
//import {generarConexion} from '../utils/SocketClient';
import { actualizarEspecifico, consultaById } from '../utils/ConexionAPI';
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


const ConquerGame = ({socket}) => {
    let { numeroPartida } = useParams(); 
    
    // let navigate  = useNavigate();
    // // const [opcionesJuego, setOpcionesJuego] = useState({});
    const [usuario, setUsuario] = useState(JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario'))) || {}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(1); //Este metodo se utiliza para ver que accion esta realizando el usuario
    const [mostrarIniciar,setMostrarIniciar] = useState(false)

    const partidaInitial = {};
    const [partida,dispatchPartidas] = useReducer(agregarPartidaRes, partidaInitial);

    const jugadoresInitial = [] //Este metodo se usa para mostrar todos los jugadores en la lista de espera
    const [jugadores, dispatchJugadores] = useReducer(agregarJugadoresArreglo, jugadoresInitial);

    const turnoUsuarioInitial = '' //Este metodo se usa para mostrar todos los jugadores en la lista de espera
    const [turnoUsuario,dispatchPiezasTableroRes] = useReducer(agregarPiezasTableroRes, turnoUsuarioInitial);


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
                    dispatchJugadores(payload.jugadores) 
                    setAccion(1)
                break;
                case 2:
                    dispatchPiezasTableroRes(payload);
                    dispatchPartidas(payload)
                    setAccion(2);
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

    function agregarJugadoresArreglo(state, action)  {
        if(usuario.usuario == action[0].usuario){
            setMostrarIniciar(true)
        }
        return action;
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

    const agregarPiezasTablero = () => {
        let vEnviar = {};
        vEnviar.numeroPartida =  numeroPartida;
        actualizarEspecifico('conquerGame/agregarPiezasTablero/',vEnviar )
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

    function agregarPiezasTableroRes(state, action){
        if(state !== ''){
            return state;
        }
        const nResultado = action.jugadores.findIndex(function(item, i){
            return usuario.usuario == item.usuario;
        });
        switch (nResultado){
            case 0: 
                return 'W'
            case 1:
                return 'B'
        }
    }


    return (
        <main className="contenedor seccion">
            <h2 className='fw-300 centrar-texto'>
                Lista de espera {numeroPartida}
            </h2>
            {/* Seccion para la lista de espera del juego */}
            {(accion === 1) && (
                <>
                    <div className="contenedor-contenido">
                        {jugadores.map((jugador, index) => (
                            <div className="contenido-menu-opciones w-100" key={index}> 
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ListaEspera
                                        key={index}
                                        jugador = {jugador}
                                    />
                                </Suspense>     
                            </div>
                        ))}

                    </div>
                    {(mostrarIniciar === true) && (
                        <div className="contenido-anuncio">
                            <button className = "boton blue w-100" onClick={() => agregarPiezasTablero()}>Iniciar</button>
                        </div>
                    )}
                </>
               
            )}
            {/* Seccion para la configuracion del juego */}
            {(accion === 2) && (
                <>
                <section className="menu-juego">
                    <div>
                        {/* <button className="button" onClick="guardarConfiguracionPiezas()">Guardar</button> */}
                        <Suspense fallback={<div>Loading...</div>}>
                            <ListadoPiezas 
                                turnoUsuario={turnoUsuario}/>
                        </Suspense>  
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tablero
                            partida = {partida}
                        />
                    </Suspense>   
                </section>
                </>
            )}
            
           
        </main>
   );
};

export default ConquerGame;
