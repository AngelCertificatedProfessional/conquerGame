import React from "react";
const MenuUsuario = ({ setAccion }) => {
  return (
    <div className="contenido-menu-opciones contenido-border w-100">
      <div className="contenido-anuncio">
        <button className="boton blue w-100" onClick={() => setAccion(3)}>
          Modificar Usuario
        </button>
      </div>
      <div className="contenido-anuncio">
        <button className="boton blue w-100" onClick={() => setAccion(4)}>
          Modificar Contrasena
        </button>
      </div>
    </div>
  );
};

export default MenuUsuario;
