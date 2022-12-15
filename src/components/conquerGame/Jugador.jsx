import React from "react";
const Jugador = ({ jugador }) => {
  return (
    <div className="seccion">
      <h2 className="fw-300 centrar-texto">{jugador.usuario}</h2>
    </div>
  );
};

export default Jugador;
