import React,{useEffect} from 'react';

import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';
import { agregarImagenesListado } from '../../utils/ConquerGame';


const Tablero = ({ abrirPartidaJuego}) => {
  
  useEffect(() => {
    agregarImagenesListado()
  }, []);
  
  return (  
    <>
        <section className="menu-juego">
            <div>
                {/* <button className="button" onClick="guardarConfiguracionPiezas()">Guardar</button> */}
                <div className= "" id="lista_personajes">
                </div>
            </div>
            <div className="juego">
                <ul id="tablero_juego">
                </ul>
            </div>
        </section>
    </>
  );
};


export default Tablero;