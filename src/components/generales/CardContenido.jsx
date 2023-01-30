import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CardContenido = ({ contenido, agregarUnidadMapa }) => {
  const [imagen, setImagen] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`@images/${contenido.img}`); // change relative path to suit your needs
        setImagen(response.default);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImage();
  }, []);
  return (
    <div className="contenido contenido-border">
      <img src={imagen} alt="Anuncio casa en el lago"></img>
      <div className="contenido-anuncio">
        <h3>{contenido.titulo}</h3>
        <p>{contenido.descripcion}</p>
        {contenido.tipo === 1 && (
          <Link className="boton blue d-block" to="ConquerGameOpciones">
            Ingresa
          </Link>
        )}
        {contenido.tipo === 4 && (
          <button
            className={`boton blue w-100 m-right ${
              contenido.yaSelecconado ? "opa-50" : ""
            }`}
            onClick={() => agregarUnidadMapa(contenido.tipoPieza)}
            disabled={contenido.yaSelecconado ? "disabled" : ""}
          >
            Seleccionar
          </button>
        )}
      </div>
    </div>
  );
};

export default CardContenido;
