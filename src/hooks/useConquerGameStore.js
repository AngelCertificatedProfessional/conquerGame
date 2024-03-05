//conquerGame
import { useDispatch, useSelector } from 'react-redux'
import { conquerGameApi } from '../api';
import { actualizarConquerGame, actualizarVentana, cargarConquerGames, 
    cargarPartidas, 
    reiniciarPartida, reiniciarValoresConquerGame } from '../store';
import { useUiStore } from './useUiStore';
import { detectarError } from '../helpers';
import { alertAdvertencia, alertError, alertMensaje} from '../plugins';
import { useNavigate } from 'react-router-dom';
export const useConquerGameStore = () => {
    const navigate = useNavigate();
   const dispatch = useDispatch();
   const { closeDialog, startCargando,startMensajeError } = useUiStore();
   const { conquerGame, conquerGames,partida,partidas,mostrarVentana } = useSelector(state => state.conquerGame);

   const agregarPartida= async ({
        tipoJuego,
        cantidadJugadores
    }) => {
       try {
            startCargando(true);
            const {data} = await conquerGameApi.post('/conquerGame/crearPartida', {
                tipoJuego,
                cantidadJugadores
            });
            alertMensaje("Guardado",'ConquerGame Guardado', "success");
            console.log(data.data)
           
            dispatch(reiniciarPartida());
            dispatch(actualizarConquerGame(data.data))
            cerrarVentana();
            navigate("conquerGameLobby");
            //   buscarConquerGames();
       } catch (error) {
           const erroresSinArreglo = detectarError(error);
           startMensajeError(erroresSinArreglo);
           alertError('Error al guardar', erroresSinArreglo)
           startCargando(false);
       }
   };

      const buscarPartidas = async () => {
       try {
           startCargando(true);
           const { data } = await conquerGameApi.get('/conquerGame/buscarPartidas');
           dispatch(cargarPartidas(data.data));
           startCargando(false);
       } catch (error) {
           startMensajeError(detectarError(error));
           startCargando(false);
       }
   };

//    const agregarConquerGame= async ({
//        titulo,
// //       fechaAsignacion,
//     }) => {
//        try {
//            startCargando(true);
//            await conquerGameApi.post('/conquerGame/agregar', {
//                titulo,
// //             fechaAsignacion: convertirFechaTOEpoch(fechaAsignacion),
//            });
//            alertMensaje("Guardado",'ConquerGame Guardado', "success");
//            cerrarVentana();
//            buscarConquerGames();
//        } catch (error) {
//            const erroresSinArreglo = detectarError(error);
//            startMensajeError(erroresSinArreglo);
//            alertError('Error al guardar', erroresSinArreglo)
//            startCargando(false);
//        }
//    };

//    const buscarConquerGames = async () => {
//        try {
//            startCargando(true);
//            const { data } = await conquerGameApi.get('/conquerGame/listado');
//            dispatch(cargarConquerGames(data.data));
//            startCargando(false);
//        } catch (error) {
//            startMensajeError(detectarError(error));
//            startCargando(false);
//        }
//    };

//    const eliminarConquerGame = async (id) => {
//     try {
//            if (id.length <= 0) return;
//             const resultado = await alertAdvertencia('Estas seguro de eliminar el conquerGame!')
//            if (!resultado.isConfirmed) {
//                return;
//            }
//            await conquerGameApi.delete(`/conquerGame/eliminar/${id}`);
//            buscarConquerGames();
//             alertMensaje('Eliminado', 'ConquerGame Eliminado', 'success');
//        } catch (error) {
//            const erroresSinArreglo = detectarError(error);
//            startMensajeError(erroresSinArreglo);
//            alertError('Error al eliminar', erroresSinArreglo)
//        }
//    };

//    const buscarConquerGameById = async (id) => {
//        try {
//            if (id.length <= 0) return;
//            startCargando(true);
//            const { data } = await conquerGameApi.get(`/conquerGame/buscarById/${id}`);
// //           data.data.fechaAsignacion = convertirFechaToDay(data.data.fechaAsignacion);
//            dispatch(actualizarConquerGame(data.data));
//            startCargando(false);
//        } catch (error) {
//            startMensajeError(detectarError(error));
//        }
//    };

//    const modificarConquerGame = async ({
//        id,
//        titulo,
// //       fechaAsignacion
//  }) => {
//        try {
//            startCargando(true);
//            await conquerGameApi.put('/conquerGame/modificar', {
//                _id: id,
//                titulo,
// //             fechaAsignacion: convertirFechaTOEpoch(fechaAsignacion),
//            });
//            alertMensaje('Modificado', 'ConquerGame Modificado', 'success');
//            cerrarVentana();
//            buscarConquerGames();
//        } catch (error) {
//            const erroresSinArreglo = detectarError(error);
//            startMensajeError(erroresSinArreglo);
//            alertError('Error al Modificar', erroresSinArreglo);
//            startCargando(false);
//        }
//    };

   const startMostrarVentana = (nVentana) => {
    dispatch(actualizarVentana(nVentana))
   }

   const cerrarVentana = () => {
       closeDialog();
    //    dispatch(reiniciarValoresConquerGame());
       startMensajeError('');
       setTimeout(function () {
           startCargando(false);
       }, 300);
   };

   return {
       //status,
       partida,
       partidas,
       mostrarVentana,
       conquerGame,
    //    conquerGames,
    //    //Metodos
        agregarPartida,
        startMostrarVentana,
        buscarPartidas
    //    agregarConquerGame,
    //    buscarConquerGames,
    //    buscarConquerGameById,
    //    eliminarConquerGame,
    //    modificarConquerGame,
    //    cerrarVentana
   };
};