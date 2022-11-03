import React,{ useState, useEffect, Suspense  } from 'react';
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

const ConquerGame = ({socket}) => {
    let { numeroPartida } = useParams(); 
    
    // let navigate  = useNavigate();
    // // const [opcionesJuego, setOpcionesJuego] = useState({});
    const [usuario, setUsuario] = useState(JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario'))) || {}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(1); //Este metodo se utiliza para ver que accion esta realizando el usuario
    const [jugadores, setJugadores] = useState([]); //Este metodo se usa para mostrar todos los jugadores en la lista de espera
    const [mostrarIniciar,setMostrarIniciar] = useState(false)
    const [isConnected, setIsConnected] = useState(socket.connected);
    useEffect(() => {
        
        console.log(socket);
        console.log('entre al useeffect')
        socket.disconnect();
        socket.connect();
        console.log(socket);
        socket.on('connect',() => {
            console.log('conectado');
            
            buscarEstadoPartida();
            setIsConnected(true);
        })
        
        socket.on('disconnect',() => {
            console.log('desconectado del servidor');
            setIsConnected(false);
        })

        socket.on('partida'+numeroPartida,(payload)=> {
            console.log(payload)
            switch(payload.estatus){
                case 1:
                    agregarJugadoresArreglo(payload.jugadores)
                    setAccion(1)
                break;
                case 2:
                    console.log('entre')
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
    }, []);
    

    const buscarEstadoPartida = () => {
        consultaById('conquerGame/buscarEstatusPartida/',numeroPartida )
        .then((resultado) => {
            console.log('entre')
            console.log(socket)
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

    const agregarJugadoresArreglo = (jugador) => {
        if(Array.isArray(jugador)){
            setJugadores(jugador)
            //en esta condicion validaremos si el usuario es el primero para mostrar el boton de iniciar
            console.log('usuario')
            console.log(usuario)
            if(usuario.usuario == jugador[0].usuario){
                console.log('es el usuario')
                setMostrarIniciar(true)
            }
        }else{
            setJugadores(jugadoresT => [...jugadoresT,jugador])
        }
    }

    const desconectarUsuarioPartida = (jugador) => {
        consultaById('conquerGame/desconectarUsuarioPartida/',numeroPartida )
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

    const agregarPiezasTablero = () => {
        let vResultado = {}
        vResultado.mensaje = 'hola'
        vResultado.numeroPartida = numeroPartida;
        vResultado.usuario = usuario.usuario;
        socket.emit('enviar-mensaje',vResultado)
        console.log(socket)
        // let vEnviar = {};
        // vEnviar.numeroPartida =  numeroPartida;
        // actualizarEspecifico('conquerGame/agregarPiezasTablero/',vEnviar )
        // .then((resultado) => {
        // })
        // .catch((error) => {
        //   swal({
        //     title: 'Error',
        //     text: error.toString(),
        //     icon: 'error',
        //     button: 'OK',
        //   });
        // });
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
                    {/* {(mostrarIniciar === true) && ( */}
                        <div className="contenido-anuncio">
                            <button className = "boton blue w-100" onClick={() => agregarPiezasTablero()}>Iniciar</button>
                        </div>
                    {/* )} */}
                </>
               
            )}
            {/* Seccion para la configuracion del juego */}
            {(accion === 2) && (
                <>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tablero/>
                    </Suspense>     
                </>
               
            )}
            
           
        </main>
   );
};

export default ConquerGame;
