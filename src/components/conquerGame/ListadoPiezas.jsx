import React, { useEffect, useState } from "react";
import {
  arrEstructuraPiezas
} from "../../utils/conquerGame/ConfiguracionTableroConquerGame";
import { reconvertirTextoAJson } from "../../utils/UtileriasPagina";
const ListadoPiezas = ({ turnoUsuario, setArregloPiezas,seleccionImagenListadoPieza }) => {

  const [arrRecursos,setArrRecursos] = useState([]);

  useEffect(() => {
    recursoImagen(reconvertirTextoAJson(arrEstructuraPiezas))
  }, []);
  
  const recursoImagen = async(recursos) => {
    recursos = await Promise.all(recursos.map( async recurso => {recurso.direccion = (await import(`@images/${turnoUsuario + recurso.icono}.png`)).default; return recurso;}))
    setArrRecursos(recursos)
    if(setArregloPiezas !== undefined) setArregloPiezas(recursos)
  }

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
