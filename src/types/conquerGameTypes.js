import * as Yup from 'yup';

export const YUPCONQUERGAME = Yup.object({
    cantidadJugadores: Yup
      .string()
      .required("Seleccione una cantidad de jugadores"),
    tipoJuego: Yup.string().required("Seleccione un tipo de juego"),
});