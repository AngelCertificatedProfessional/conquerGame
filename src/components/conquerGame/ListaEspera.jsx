import React from "react";
const ListaEspera = ({ jugador, mostrarMensajeListo }) => {
  return (
    <div className="seccion">
      <h2 className="fw-300 centrar-texto">
        {jugador.usuario}{" "}
        {mostrarMensajeListo && jugador.hasOwnProperty("posicionPiezasJugador")
          ? " (Listo)" + ""
          : ""}
      </h2>
    </div>
  );
};

export default ListaEspera;
