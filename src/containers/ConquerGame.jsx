import React,{ useState, useEffect, Suspense  } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {b64_to_utf8} from '../utils/UtileriasPagina';
//import {generarConexion} from '../utils/SocketClient';
import { io } from "socket.io-client";
import {env} from "../config/config";
const socket = io(env.apiLiutsVideoURL,{ transports : ['websocket'] });

const ListaEspera = React.lazy(() =>
  import('../components/conquerGame/ListaEspera')
);


const ConquerGameListaEspera = ({}) => {
    let { numeroPartida } = useParams(); 
    let navigate  = useNavigate();
    // const [opcionesJuego, setOpcionesJuego] = useState({});
    // const [numeroJuego, setNumeroJuego] = useState(0); //Este metodo es utilizado para obtener el numero de la partida
    const [usuario, setUsuario] = useState({}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(0); //Este metodo se utiliza para ver que accion esta realizando el usuario
    // const [jugadores, setJugadores] = useState([]); //Este metodo se usa para mostrar todos los jugadores en la lista de espera
    useEffect(() => {
        setUsuario(JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario'))))
        if (
            (usuario === null ||
                usuario === undefined ||
                usuario.usuario === '') &&
            location.pathname !== '/login'
        ) {
            navigate('/login');
        }
        //generarConexion();
    }, []);
    socket.on('connect',() => {
        console.log('conectado');
    })

    socket.on('disconnect',() => {
        console.log('desconectado del servidor');
    })
    
    // const agregarJugadoresArreglo = (jugador) => {
    //     if(Array.isArray(jugador)){
    //         setJugadores(jugadoresT => [...jugadoresT, ...jugador])
    //     }else{
    //         setJugadores(jugadoresT => [...jugadoresT,jugador])
    //     }
    // }

    socket.on('partida'+numeroPartida,(payload)=> {
    // socket.on('partida'+numeroJuegoLocal,(payload)=> {
        console.log('estoy en el nuymero de juego'+payload);
    })

   return (
        <main className="contenedor seccion">
            <h2 className='fw-300 centrar-texto'>
                Lista de espera
            </h2>
            <div className="contenedor-contenido">
                {/* <Suspense fallback={<div>Loading...</div>}>
                    <ListaEspera
                        accion = {accion}
                        setAccion = {setAccion}
                        numeroJuego = {numeroJuego}
                        jugadores = {jugadores}
                    />
                </Suspense> */}
            </div>
        </main>
   );
};

export default ConquerGameListaEspera;
