import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { consultaById } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
    buscar: yup.string().required('Ingrese el numero de la sala'),
  });

const BuscarPartida = ({ setAccion,accion,setNumeroJuego,agregarJugadoresArreglo,usuario }) => {
  return (
    <Formik
      initialValues={{
        buscar: '',
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        console.log(values)
        consultaById('conquerGame/buscarPartida', values.buscar)
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
                    <label htmlFor="buscar"> Buscar: </label>
                    <input type="text" placeholder="Buscar Partida" name="buscar" id="buscar" onChange={handleChange}  onBlur={handleBlur} value={values.buscar} 
                        className = {(!!touched.buscar && !!errors.buscar) ? 'border-mensaje-error' : ''} />
                    {(!!touched.buscar && !!errors.buscar) && (
                        <span className='mensaje-error'>{errors.buscar}</span>
                )}
                </div>
                <div className='flex-orientation-button contenido-anuncio'>
                    <button className="boton blue w-100" type="submit">
                    Buscar
                    </button>
                </div>
            </form>
        </div>
      )}
    </Formik>
  );
};


export default BuscarPartida;