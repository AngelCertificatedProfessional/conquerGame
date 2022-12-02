import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { agregar, iniciarSesion } from '../../utils/ConexionAPI';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { eliminarSaltosLinea } from '../../utils/UtileriasPagina';

const schema = yup.object({
  correo: yup
  .string()
  .required('El correo es un campo requerido')
  .email('Escriba un correo valido'),
  contrasena: yup.string().required('La contraseña es requerida'),
});

const LoginFormulario = ({ ingresarSesion,setAccion,terminosCondiciones }) => {

  const generarUsuarioInvitado = () => {

    swal({
      title: "Creacion de usuario invitado?",
      text: eliminarSaltosLinea(`Querido jugador, Al entrar como usuario invitado usted esta accediendo a los términos y 
      condiciones de la plataforma como también es consciente que su usuario durara solo 24 horas, 
      ¿está seguro de continuar?.`),
      icon: "warning",
      buttons: [
        'No',
        'Si'
      ],
      dangerMode: true,
    }).then(function(isConfirm) {
      if (isConfirm) {
        let vAgregar = {}
        vAgregar.invitado = true
        agregar('usuarios/agregarUsuarioInvitado',vAgregar)
        .then((jsonUsuario) => {
          iniciarSesion('usuarios/iniciarSecion', jsonUsuario.data)
              .then((jsonUsuario2) => {
                ingresarSesion(jsonUsuario2);
              })
              .catch((error) => {
                swal({
                  title: 'Error',
                  text: error.toString(),
                  icon: 'error',
                  button: 'OK',
                });
              });
        })
        .catch((error) => {
          swal({
            title: 'Error',
            text: error.toString(),
            icon: 'error',
            button: 'OK',
          });
        });
      }
    })
  }

  return (
    <Formik
      initialValues={{
        correo: '',
        contrasena: '',
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        let usuario = {}
        usuario.correo = values.correo;
        usuario.contrasena = values.contrasena;
        iniciarSesion('usuarios/iniciarSecion', usuario)
          .then((jsonUsuario) => {
            ingresarSesion(jsonUsuario);
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
        <form
          onSubmit={handleSubmit}
          noValidate
        >
            <h2 className="tituloCentrado">INICIO DE SESIÓN</h2>
            <div className='campo-input'>
                <label htmlFor="correo"> Correo: </label>
                <input type="email" placeholder="Correo" name="correo" id="correo" onChange={handleChange}  onBlur={handleBlur} value={values.correo} 
                    className = {(!!touched.correo && !!errors.correo) ? 'border-mensaje-error' : ''} />
                {(!!touched.correo && !!errors.correo) && (
                    <span className='mensaje-error'>{errors.correo}</span>
                )}
            </div>
            <div className='campo-input'>
                <label htmlFor="contrasena"> Contraseña: </label>
                <input type="password" placeholder="contraseña" name="contrasena" id="contrasena" onChange={handleChange} onBlur={handleBlur} value={values.contrasena}
                    className = {(!!touched.contrasena && !!errors.contrasena) ? 'border-mensaje-error' : ''} />
                {(!!touched.contrasena && !!errors.contrasena) && (
                    <span className='mensaje-error'>{errors.contrasena}</span>
                )}
            </div>
            
          <Link to="/login" className="liga seccion" onClick={terminosCondiciones}>Terminos y Condiciones</Link>
          <div className='flex-orientation-button'>
            <button className="boton blue" onClick={() => setAccion(2)} type="button">
              Crear Usuario
            </button>
            <button className="boton blue" type="button" onClick={() => generarUsuarioInvitado()}>
              Invitado
            </button>
            <button className="boton blue" type="submit">
              Ingresar
            </button>
          </div>
          
        </form>
      )}
    </Formik>
  );
};

export default LoginFormulario;
