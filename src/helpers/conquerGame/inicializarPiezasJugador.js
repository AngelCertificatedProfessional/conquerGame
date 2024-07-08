import { ESTRUCTURAPIEZAS } from "../../types";

const direccionRuta = `../../images/conquerGame/`
export const inicializarPiezasJugador = async (conquerGame) => {
    const piezas = await Promise.all(
        ESTRUCTURAPIEZAS.map(async (pieza) => {
            return {
                ...pieza,
                jugador: conquerGame.turnoJugador,
                nombre: `${conquerGame.turnoJugador}${pieza.nombre}`,
                direccion: (await import(/* @vite-ignore */`${direccionRuta}${conquerGame.turnoJugador}${pieza.icono}.png`)).default
            }
        }));
    return piezas;
}