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
      id: 4,
      descripcion: 4
    },
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

export const ESTRUCTURACREARPARTIDA = Object.freeze({
  tipoJuego: ACCIONTIPOJUEGOOBJETO.INDIVIDUAL,
  cantidadJugadores: 2
})
export const YUPCONQUERGAME = Yup.object({
  cantidadJugadores: Yup
    .string()
    .required("Seleccione una cantidad de jugadores"),
  tipoJuego: Yup.string().required("Seleccione un tipo de juego"),
});


export const montanasConquerGame = Object.freeze([
  "1F",
  "1G",
  "2V",
  "2W",
  "5L",
  "5M",
  "5P",
  "6M",
  "6P",
  "6R",
  "6S",
  "6T",
  "6D",
  "6E",
  "6F",
  "6G",
  "7Q",
  "8P",
  "8Q",
  "8T",
  "11U",
  "11V",
  "10V",
  "10W",
  "5B",
  "4E",
  "7F",
  "8F",
  "8G",
  "11C",
  "11D",
  "11H",
  "11I",
  "10I",
  "13G",
  "18G",
  "19G",
  "19F",
  "17F",
  "16F",
  "16E",
  "19A",
  "19B",
  "21E",
  "21F",
  "22F",
  "23K",
  "17H",
  "16J",
  "16K",
  "17K",
  "13N",
  "13O",
  "17N",
  "16N",
  "21R",
  "23W",
  "19U",
  "23O",
  "22O",
  "20P",
  "20Q",
  "19P",
  "18Q",
  "17R",
  "21Q",
  "22R",
  "23T",
]);

export const lagosConquerGame = Object.freeze([
  "4B",
  "5F",
  "8H",
  "11G",
  "13F",
  "18F",
  "22E",
  "20A",
  "18U",
  "16X",
  "18R",
  "23S",
  "4U",
  "5V",
  "6O",
  "11T",
]);

export const ESTRUCTURAPIEZAS = Object.freeze([
  {
    nombre: "hachero1",
    icono: "hachero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "hachero2",
    icono: "hachero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "lancero1",
    icono: "lancero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "lancero2",
    icono: "lancero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "lancero3",
    icono: "lancero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "lancero4",
    icono: "lancero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "archer",
    icono: "archer",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "asesino",
    icono: "asesino",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "caballero1",
    icono: "caballero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "caballero2",
    icono: "caballero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "caballero3",
    icono: "caballero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "caballero4",
    icono: "caballero",
    posicion: "",
    direccion: ""
  },
  {
    nombre: "rey",
    icono: "rey",
    posicion: "",
    direccion: ""
  },
]);
export const useStylesConquerGame = Object.freeze({
  targetaJugadorO: {
    backgroundColor: "rgb(245, 167, 49)",
    color: "#242020"
  },
  targetaJugadorB: {
    backgroundColor: "rgb(14, 13, 13)",
    color: "#ebe5e5"
  },
  targetaJugadorR: {
    backgroundColor: "rgb(218, 22, 22)",
    color: "#ebe5e5"
  },
  targetaJugadorP: {
    backgroundColor: "rgb(129, 8, 153)",
    color: "#ebe5e5"
  },
  targetaJugadorG: {
    backgroundColor: "rgb(14, 95, 48)",
    color: "#ebe5e5"
  },
  targetaJugadorY: {
    backgroundColor: "rgb(255, 251, 0)",
    color: "#050505"
  }
})

export const colorTablero = Object.freeze("rgb(240, 201, 150)");
export const colorMontana = Object.freeze("rgb(14, 155, 0)");
export const colorLago = Object.freeze("rgb(63, 234, 229)");
export const colorOpciones = Object.freeze("rgb(195, 208, 39)");
export const colorDisparoArcher = Object.freeze("rgb(223, 55, 19)");
export const colorSeleccionadoTablero = Object.freeze("rgb(213, 92, 209)");
export const colorSeleccionadoListado = Object.freeze("rgb(72, 66, 65)");
export const colorCasstilloEntrada = Object.freeze("rgb(185, 185, 179)");
export const colorCasstilloSala = Object.freeze("rgb(94, 94, 89)");
export const tamanoTableroX = Object.freeze(24);
export const tamanoTableroY = Object.freeze(24);

export const CONQUERGAMEPARTIDA = Object.freeze({
  LOBBY: 1,
  AGREGARPIEZASTABLERO: 2,
  JUEGOINICIADO: 3,
  FINALIZADO: 4,
  CANCELADO: 5,
})