import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';
import { agregarImagenesListado } from '../../utils/ConquerGame';


const Tablero = ({turnoUsuario}) => {
  
  useEffect(() => {
    agregarImagenesListado(turnoUsuario)
  }, []);
  
  return (  
    <>
        <div className= "listado_piezas" id="lista_personajes">
        </div>
    </>
  );
};


export default Tablero;