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


export const montanas = [
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
];

export const lagos = [
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
];

export const ESTRUCTURAPIEZAS = [
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
];