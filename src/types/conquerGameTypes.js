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
  // { id: 2, descripcion: "EQUIPO" },
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

export const CONTENIDOLISTADO = [
  {
    tipo: 1,
    titulo: "Lancero",
    icono: 'lancero',
    descripcion:
      "Esta unidad puede moverse hasta 13 espacios en vertical/horizontal o un espacio en diagonal",
    mostrar: true
  },
  {
    tipo: 1,
    titulo: "Hachero",
    icono: 'hachero',
    descripcion:
      "Esta unidad puede moverse hasta 13 espacios en diagonal o un espacio en vertical/horizontal",
    mostrar: true
  },
  {
    tipo: 1,
    titulo: "Arquero",
    icono: "archer",
    descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
      atacar a distancia en la tercera casilla sin requerir mover la unidad`,
    mostrar: true
  },
  {
    tipo: 1,
    titulo: "Asesino",
    icono: "asesino",
    descripcion: `Esta unidad puede puede hacer dos movimientos en el mismo turno, el primer movimiento sera 
      de lado horizontal/vertical, y el segundo turno se movera en diagonal`,
    mostrar: true
  },
  {
    tipo: 1,
    titulo: "Caballero",
    icono: "caballero",
    descripcion: `Esta unidad puede moverse hacia cualquier direccion sin restriccion de la cantidad de casillas 
      que pueda moverse, pero no puede atravesar lagos`,
    mostrar: true
  },
  {
    tipo: 1,
    titulo: "Rey",
    icono: "rey",
    descripcion: `Esta unidad puede moverse uno o dos espacios en cualquier direccion, 
      en caso de que muera esta unidad es derrota inmediata para el jugador`,
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Asesino Elite",
    icono: "asesinoE",
    descripcion: `Esta unidad puede puede hacer dos movimientos en el mismo turno, esta unidad puede moverse un espacio por los dos turnos`,
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Arquero Elite",
    icono: "archerE",
    descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
      atacar a distancia en la tercera casilla o cuarta casilla sin requerir mover la unidad`,
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Hechicero",
    icono: "hechicero",
    descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
      atacar a distancia en la cuarta casilla o quinta casilla sin requerir mover la unidad`,
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Cañon",
    icono: "canon",
    descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
      atacar a distancia en la octava casilla sin requerir mover la unidad`,
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Lancero Elite",
    icono: "lanceroE",
    descripcion:
      "Esta unidad puede moverse hasta 14 espacios en vertical/horizontal o 2 espacios en diagonal",
    mostrar: true
  },
  {
    tipo: 2,
    titulo: "Hachero Elite",
    icono: "hacheroE",
    descripcion:
      "Esta unidad puede moverse hasta 14 horizontal o 2 espacios en vertical/horizontal",
    mostrar: true
  },
];


export const ESTRUCTURAPIEZAS = Object.freeze([
  {
    titulo: "Hachero",
    nombre: "hachero1",
    icono: "hachero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Hachero",
    nombre: "hachero2",
    icono: "hachero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Lancero",
    nombre: "lancero1",
    icono: "lancero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Lancero",
    nombre: "lancero2",
    icono: "lancero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Lancero",
    nombre: "lancero3",
    icono: "lancero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Lancero",
    nombre: "lancero4",
    icono: "lancero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Archer",
    nombre: "archer",
    icono: "archer",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Asesino",
    nombre: "asesino",
    icono: "asesino",
    posicion: "",
    direccion: "",
    mostrar: true,
    asesino: true
  },
  {
    titulo: "Caballero",
    nombre: "caballero1",
    icono: "caballero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Caballero",
    nombre: "caballero2",
    icono: "caballero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Caballero",
    nombre: "caballero3",
    icono: "caballero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Caballero",
    nombre: "caballero4",
    icono: "caballero",
    posicion: "",
    direccion: "",
    mostrar: true
  },
  {
    titulo: "Rey",
    nombre: "rey",
    icono: "rey",
    posicion: "",
    direccion: "",
    mostrar: true,
    rey: true
  },
  {
    titulo: "Hachero Elite",
    nombre: "hacheroE",
    icono: "hacheroE",
    posicion: "",
    direccion: "",
    mostrar: false
  },
  {
    titulo: "Lancero Elite",
    nombre: "lanceroE",
    icono: "lanceroE",
    posicion: "",
    direccion: "",
    mostrar: false
  },
  {
    titulo: "Asesino Elite",
    nombre: "asesinoE",
    icono: "asesinoE",
    posicion: "",
    direccion: "",
    mostrar: false,
    asesino: true
  },
  {
    titulo: "Cañon",
    nombre: "canon",
    icono: "canon",
    posicion: "",
    direccion: "",
    mostrar: false
  },
  {
    titulo: "Hechicero",
    nombre: "hechicero",
    icono: "hechicero",
    posicion: "",
    direccion: "",
    mostrar: false
  },
  {
    titulo: "Arquero Elite",
    nombre: "archerE",
    icono: "archerE",
    posicion: "",
    direccion: "",
    mostrar: false
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

export const COLORTABLERO = Object.freeze("rgb(240, 201, 150)");
export const COLORMONTANA = Object.freeze("rgb(14, 155, 0)");
export const COLORLAGO = Object.freeze("rgb(63, 234, 229)");
export const COLORMOVIMIENTOOPCIONES = Object.freeze("rgb(195, 208, 39)");
export const COLORMOVIMIENTOSELECCION = "rgba(225, 234, 57, 0.65)"
export const COLORMOVIMIENTODESSELECCION = "rgba(255, 255, 255, 1)"
export const COLORDISPARO = Object.freeze("rgb(223, 55, 19)");
export const COLORSELECCIONADOTABLERO = Object.freeze("rgb(213, 92, 209)");
export const COLORCASSTILLOENTRADA = Object.freeze("rgb(185, 185, 179)");
export const COLORCASTILLOSALA = Object.freeze("rgb(94, 94, 89)");
export const ARREGLOTIPOPIEZAS = Object.freeze({
  ARCHERE: "archerE",
  ARCHER: "archer",
  REY: "rey",
  HACHEROE: "hacheroE",
  HACHERO: "hachero",
  LANCEROE: "lanceroE",
  LANCERO: "lancero",
  CABALLERO: "caballero",
  ASESINOE: "asesinoE",
  ASESINO: "asesino",
  HECHICERO: "hechicero",
  CANON: "canon"
});
export const tamanoTableroX = Object.freeze(24);
export const tamanoTableroY = Object.freeze(24);

export const CONQUERGAMEPARTIDA = Object.freeze({
  LOBBY: 1,
  AGREGARPIEZASTABLERO: 2,
  JUEGOINICIADO: 3,
  FINALIZADO: 4,
  CANCELADO: 5,
})


