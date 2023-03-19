import React, {lazy, Suspense } from "react";
const Actualizacion = lazy(() =>
  import("./../components/actualizacion/Actualizacion")
);
export const Mejoras = () => {
  const actualizaciones = [
    {
      titulo: "Ortografía",
      descripcion: "Se realizaron correcciones ortográficas en el sistema.",
    },
    {
      titulo: "Modificación del lancero y hachero",
      descripcion:
        "Se realizaron mejoras a las piezas de lancero y hacheros de elite, permitiendoles moverse 14 casillas en ves de 13.",
    },
    {
      titulo: "Manera de Identificar mejor los turnos.",
      descripcion:
        "Realizaron cambios en la vista al momento de estar jugando para indicar con el cronometró cuando se esta acabando el turno del usuario, con colores como rojo y amarillo, también agregando un mensaje de alerta cuando inicia tu turno.",
    },
    {
      titulo: "Ventana de mejoras.",
      descripcion:
        "Se mostrara una ventana de las mejoras o actualizaciones mas recientes que va teniendo el sistema.",
    },
    {
      titulo: "Correcciones en Conquer Game al iniciar.",
      descripcion:
        "Al momento que los usuarios pasaban a la ventana de seleccionada las piezas aveces los jugadores no estaban en la posición correcta, este error fue corregido.",
    },
    {
      titulo: "Correcciones en Conquer Game al dar listo.",
      descripcion:
        "Al momento que un usuario seleccionaba listo se estaba dando el caso que otros jugadores no pudieran realizar la misma acción, esto fue corregido.",
    },
    {
      titulo: "Historial de movimientos",
      descripcion:
        "Se agrega un historial de movimientos para indicar los últimos 10 movimientos que han tenido los jugadores.",
    },
    {
      titulo: "Solo los mejores",
      descripcion:
        "Se creó un listado mostrando el puntaje de los 10 mejores jugadores de conquer game, estos puntos se obtienen al momento que los jugadores están eliminando piezas o ganando partidas. ",
    },
  ];
  return (
    <main className="contenedor seccion">
      <h2 className="fw-300 centrar-texto">Actualizaciones</h2>
      <div className="contenedor-contenido">
        {actualizaciones.map((actualizacion, index) => (
          <Suspense fallback={<div>Loading...</div>}>
            <Actualizacion actualizacion={actualizacion} />
          </Suspense>
        ))}
      </div>
    </main>
  );
};