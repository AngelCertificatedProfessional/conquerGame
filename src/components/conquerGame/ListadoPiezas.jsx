import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';


const Tablero = ({turnoUsuario,agregarImagenesListado}) => {
  
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