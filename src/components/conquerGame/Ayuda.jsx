import React, { Suspense } from "react";
const CardContenido = React.lazy(() => import("../generales/CardContenido"));
const Ayuda = ({ turno, setmostrarAyuda, mostrarAyuda }) => {
  const contenidoListado = [
    {
      tipo: 2, //Ayuda
      titulo: "Lancero",
      img: turno + "lancero.png",
      descripcion:
        "Esta unidad puede moverse hasta 13 espacios en vertical u horizontal o un espacio en diagonal",
    },
    {
      tipo: 2, //Ayuda
      titulo: "Hachero",
      img: turno + "hachero.png",
      descripcion:
        "Esta unidad puede moverse hasta 13 espacios en diagonal o un espacio en vertical u horizontal",
    },
    {
      tipo: 2, //Ayuda
      titulo: "Arquero",
      img: turno + "archer.png",
      descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla sin requerir mover la unidad`,
    },
    {
      tipo: 2, //Ayuda
      titulo: "Asesino",
      img: turno + "asesino.png",
      descripcion: `Esta unidad puede puede hacer dos movimientos en el mismo turno, el primer movimiento sera 
        de lado horizontal o vertical, y el segundo turno se movera en diagonal`,
    },
    {
      tipo: 2, //Ayuda
      titulo: "Caballero",
      img: turno + "caballero.png",
      descripcion: `Esta unidad puede moverse hacia cualquier direccion sin restriccion de la cantidad de casillas 
        que pueda moverse, pero no puede atravesar rios`,
    },
    {
      tipo: 2, //Ayuda
      titulo: "Rey",
      img: turno + "rey.png",
      descripcion: `Esta unidad puede moverse uno o dos espacios en cualquier direccion, 
        en caso de que muera esta unidad es derrota inmediata para el jugador `,
    },
  ];

  const contenidoListadoEspecial = [
    {
      tipo: 2, //Unidad especial
      titulo: "Asesino Elite",
      img: turno + "asesinoE.png",
      descripcion: `Esta unidad puede puede hacer dos movimientos en el mismo turno, esta unidad puede moverse tanto vertical como horizantalmente o diagonal un espacio por los dos turnos`,
    },
    {
      tipo: 2, //Unidad especial
      titulo: "Arquero Elite",
      img: turno + "archerE.png",
      descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o cuarta casilla (solo linealmente) sin requerir mover la unidad`,
    },
    {
      tipo: 2, //Unidad especial
      titulo: "Hechicero",
      img: turno + "hechicero.png",
      descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o cuarta casilla (solo diagonalmente) sin requerir mover la unidad`,
    },
    {
      tipo: 2, //Unidad especial
      titulo: "Cañon",
      img: turno + "canon.png",
      descripcion: `Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la octava casilla sin requerir mover la unidad`,
    },
    {
      tipo: 2, //Unidad especial
      titulo: "Lancero Elite",
      img: turno + "lanceroE.png",
      descripcion:
        "Esta unidad puede moverse hasta 14 espacios en vertical/horizontal o 2 espacios en diagonal",
    },
    {
      tipo: 2, //Unidad especial
      titulo: "Hachero Elite",
      img: turno + "hacheroE.png",
      descripcion:
        "Esta unidad puede moverse hasta 14 horizontal o 2 espacios en vertical/horizontal",
    },
  ];

  return (
    <div className="popup">
      <div className="contenedor bc-white seccion">
        <h2 className="fw-300 centrar-texto seccion">
          Informacion de las piezas
        </h2>
        <h4 className="fw-300 centrar-texto seccion">Piezas Principales</h4>
        <div className="contenedor-contenido">
          {contenidoListado.map((consultaSerieTemp, index) => (
            <Suspense fallback={<div>Loading...</div>}>
              <CardContenido contenido={consultaSerieTemp} />
            </Suspense>
          ))}
        </div>
        <h4 className="fw-300 centrar-texto seccion">Piezas Especiales</h4>
        <div className="contenedor-contenido">
          {contenidoListadoEspecial.map((consultaSerieTemp, index) => (
            <Suspense fallback={<div>Loading...</div>}>
              <CardContenido contenido={consultaSerieTemp} />
            </Suspense>
          ))}
        </div>
        <button
          className={`boton blue w-100 m-right`}
          onClick={() => setmostrarAyuda(!mostrarAyuda)}
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default Ayuda;
