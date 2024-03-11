import * as Yup from 'yup';

export const ACCIONTIPOJUEGOOBJETO = Object.freeze({
  INDIVIDUAL: 1,
  EQUIPO: 2,
})

export const CANTIDADJUGADORESTIPOJUEGO = Object.freeze({
  INDIVIDUAL: [
    {
      id: 2,
      descripcion: 2
    },
    {
      id: 3,
      descripcion: 3
    },
    {
      id: 4,
      descripcion: 4
    },
    {
      id: 5,
      descripcion: 5
    },
    {
      id: 6,
      descripcion: 6
    }
  ],
  EQUIPO: [
    {
      id: 4,
      descripcion: 4
    },
    {
      id: 6,
      descripcion: 6
    }
  ]
})


export const ACCIONTIPOJUEGO = Object.freeze([
  { id: 1, descripcion: "INDIVIDUAL" },
  { id: 2, descripcion: "EQUIPO" },
])

export const ESTRUCTURACREARPARTIDA = {
  tipoJuego: ACCIONTIPOJUEGOOBJETO.INDIVIDUAL,
  cantidadJugadores: 2
}
export const YUPCONQUERGAME = Yup.object({
  cantidadJugadores: Yup
    .string()
    .required("Seleccione una cantidad de jugadores"),
  tipoJuego: Yup.string().required("Seleccione un tipo de juego"),
});