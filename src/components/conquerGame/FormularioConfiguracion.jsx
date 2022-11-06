import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
    cantidadJugadores: yup.string().required('Seleccione una cantidad de jugadores'),
    tipoJuego: yup.string().required("Seleccione un tipo de juego")
  });

const FormularioConfiguracion = ({ abrirPartidaJuego}) => {
  return (
    <Formik
      initialValues={{
        cantidadJugadores: '',
        tipoJuego: '',
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        const partida = {};
        partida.cantidadJugadores = values.cantidadJugadores;
        partida.tipoJuego = values.tipoJuego;
          agregar('conquerGame/crearPartida', partida)
            .then((resultado) => {
              swal({
                title: 'Partida Creada',
                text: 'Su partida se a creado exitosamente',
                icon: 'success',
                button: 'OK',
              });
              abrirPartidaJuego(resultado.data.random);
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
                    <label htmlFor="cantidadJugadores"> Cantidad de jugadores: </label>
                    <select id="cantidadJugadores" name="cantidadJugadores" onChange={handleChange}  onBlur={handleBlur} value={values.cantidadJugadores} >
                        <option value="" disabled defaultValue>--Seleccione--</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    {(!!touched.cantidadJugadores && !!errors.cantidadJugadores) && (
                        <span className='mensaje-error'>{errors.cantidadJugadores}</span>
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