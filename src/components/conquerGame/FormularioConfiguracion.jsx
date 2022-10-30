import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
    catidadJugadores: yup.string().required('Seleccione una cantidad de jugadores'),
    tipoJuego: yup.string().required("Seleccione un tipo de juego")
  });

const FormularioConfiguracion = ({ setAccion,accion,setNumeroJuego,agregarJugadoresArreglo,usuario }) => {
  return (
    <Formik
      initialValues={{
        catidadJugadores: '',
        tipoJuego: '',
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        const partida = {};
        partida.catidadJugadores = values.catidadJugadores;
        partida.tipoJuego = values.tipoJuego;
          agregar('conquerGame/crearPartida', partida)
            .then((resultado) => {
              swal({
                title: 'Partida Creada',
                text: 'Su partida se a creado exitosamente',
                icon: 'success',
                button: 'OK',
              });
              setNumeroJuego(resultado.data.random)
              setAccion(3); 
              agregarJugadoresArreglo(usuario);
            })
            .catch((error) => {
              swal({
                title: 'Error',
                text: error.toString(),
                icon: 'error',
                button: 'OK',
              });
            });
      }}
      enableReinitialize
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <div className="contenido-menu-opciones w-100">
            <form
            onSubmit={handleSubmit}
            noValidate
            >
                    
                <h2 className="tituloCentrado">Creacion de partida ConquerGame</h2>
                <div className='campo-input'>
                    <label htmlFor="catidadJugadores"> Cantidad de jugadores: </label>
                    <select id="catidadJugadores" name="catidadJugadores" onChange={handleChange}  onBlur={handleBlur} value={values.catidadJugadores} >
                        <option value="" disabled defaultValue>--Seleccione--</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    {(!!touched.catidadJugadores && !!errors.catidadJugadores) && (
                        <span className='mensaje-error'>{errors.catidadJugadores}</span>
                        )}
                </div>
                <p className='fw-700 seccion'>Tipo de juego</p>
                <div className='campo-input'>
                    <label htmlFor="individual">Individual</label>
                    <input type="radio" name="tipoJuego" value="1" id="individual" onChange={handleChange}  onBlur={handleBlur} />
                    <label htmlFor="equipo">Equipo</label>
                    <input type="radio" name="tipoJuego" value="2" id="equipo" onChange={handleChange}  onBlur={handleBlur} />
                    {(!!touched.tipoJuego && !!errors.tipoJuego) && (
                        <span className='mensaje-error'>{errors.tipoJuego}</span>
                        )}
                </div>
            <div className='flex-orientation-button contenido-anuncio'>
                <button className="boton blue w-100" type="submit">
                  Generar
                </button>
            </div>
            
            </form>
        </div>
      )}
    </Formik>
  );
};


export default FormularioConfiguracion;