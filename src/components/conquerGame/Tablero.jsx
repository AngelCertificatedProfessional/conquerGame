import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
    catidadJugadores: yup.string().required('Seleccione una cantidad de jugadores'),
    tipoJuego: yup.string().required("Seleccione un tipo de juego")
  });

const Tablero = ({ abrirPartidaJuego}) => {
  return (  
    <>
        <section class="menu-juego">
            <div>
                <button class="button" onclick="guardarConfiguracionPiezas()">Guardar</button>
                <div class= "" id="lista_personajes">
                </div>
            </div>
            <div class="juego">
                <ul id="tablero_juego">
                </ul>
            </div>
        </section>
    </>
  );
};


export default Tablero;