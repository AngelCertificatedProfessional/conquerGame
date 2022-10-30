import React,{ useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const CrearUniser = React.lazy(() =>
  import('./../components/conquerGame/CrearUniser')
);
const FormularioConfiguracion = React.lazy(() =>
  import('./../components/conquerGame/FormularioConfiguracion')
);
const ListaEspera = React.lazy(() =>
  import('./../components/conquerGame/ListaEspera')
);
BuscarPartida

const BuscarPartida = React.lazy(() =>
  import('./../components/conquerGame/BuscarPartida')
);

const ConquerGameOptions = () => {
    let navigate  = useNavigate();
    const [opcionesJuego, setOpcionesJuego] = useState({});
    const [numeroJuego, setNumeroJuego] = useState(0); //Este metodo es utilizado para obtener el numero de la partida
    const [usuario, setUsuario] = useState({}); //Este metodo se utiliza para obtener la info del usuario
    const [accion, setAccion] = useState(0); //Este metodo se utiliza para ver que accion esta realizando el usuario
    const [jugadores, setJugadores] = useState([]); //Este metodo se usa para mostrar todos los jugadores en la lista de espera
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
    }, []);

    const agregarJugadoresArreglo = (jugador) => {
        setJugadores(jugadoresT => [...jugadoresT,jugador])
    }

   return (
        <main className="contenedor seccion">
            <h2 className='fw-300 centrar-texto'>
                Opciones
            </h2>
            <div className="contenedor-contenido">
                <Suspense fallback={<div>Loading...</div>}>
                    <CrearUniser
                        accion = {accion}
                        setAccion = {setAccion}
                    />
                </Suspense>
                {accion === 1 && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <FormularioConfiguracion
                            accion = {accion}
                            setAccion = {setAccion}
                            setNumeroJuego = {setNumeroJuego}
                            agregarJugadoresArreglo = {agregarJugadoresArreglo}
                            usuario = {usuario}
                        />
                    </Suspense>
                )}
                {(accion === 2) && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <BuscarPartida
                            usuario={usuario}
                            setAccion={setAccion}
                            accion={accion}
                        />
                    </Suspense>
                )}
                {accion === 3 && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ListaEspera
                            accion = {accion}
                            setAccion = {setAccion}
                            numeroJuego = {numeroJuego}
                            jugadores = {jugadores}
                        />
                    </Suspense>
                )}
            </div>
        </main>
   );
};

export default ConquerGameOptions;
