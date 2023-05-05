import React from "react";
const Actualizacion = ({ actualizacion }) => {
  return (
    <>
      <div className="seccion">
        <h5 className="fw-700">{actualizacion.titulo}</h5>
        <h5 className="fw-300">{actualizacion.descripcion}</h5>
      </div>
    </>
  );
};

export default Actualizacion;
