import React from "react";

const ListadoPiezas = ({arrRecursos,seleccionImagenListadoPieza }) => {

  return (
    <>
      <div className="listado_piezas" id="lista_personajes">
        
        {arrRecursos.length >-1 && arrRecursos.map((actualizacion, index) => (
          <div className="iconoMenu" id={actualizacion.nombre} key={index} onClick= {seleccionImagenListadoPieza !== undefined ? (() => seleccionImagenListadoPieza(actualizacion.nombre)) : undefined}>
            {actualizacion.nombre}
            <img className='allimg' src={actualizacion.direccion} alt="">

            </img>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListadoPiezas;
