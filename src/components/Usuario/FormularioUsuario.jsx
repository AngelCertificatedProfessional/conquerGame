import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { agregar } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
    correo: yup
    .string()
    .required('El correo es un campo requerido')
    .email('Escriba un correo valido'),
    usuario: yup.string().required('El usuario es requerido')
    .min(5, 'El usuario deber contener minimo 5 caracteres.'),
    contrasena: yup
      .string()
      .required('La contraseña es requerido')
      .min(8, 'La Contraseña debe contener minimo 8 caracteres.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "La contrasena debe contener 8 caracteres, Una mayuscula,Una minuscula, Un numero y un caracter especial"
      ),
    validaContrasena: yup
      .string()
      .required('El valor de valida Contraseña es obligatorio')
      .oneOf([yup.ref('contrasena'), null], 'Las contraseñas no son iguales'),
    nombre: yup.string().required('El nombre es un campo requerido'),
    apellido: yup.string().required('El apellido es un campo obligatorio')
  });

const FormularioUsuario = ({ setAccion,accion }) => {
  return (
    <Formik
    initialValues={{
        usuario: '',
        contrasena: '',
        validaContrasena:'',
        nombre: '',
        apellido: '',
        correo: ''
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        console.log(values.aceptoTerminosYCondiciones)
        let usuario = {}
        if(values.aceptoTerminosYCondiciones === undefined  || values.aceptoTerminosYCondiciones.length <= 0  || !values.aceptoTerminosYCondiciones[0] === 'on'){
          swal({
            title: 'Terminos Y Condiciones',
            text: 'Es necesario aceptar los terminos y condiciones para loguearse en el sistema',
            icon: 'warning',
            button: 'OK',
          });
          return
        }else{
          usuario.aceptoTerminosYCondiciones = true
        }

        
        usuario.usuario = values.usuario;
        usuario.contrasena = values.contrasena;
        usuario.nombre = values.nombre;
        usuario.apellido = values.apellido;
        usuario.correo = values.correo;
        if (accion === 2) {
          agregar('usuarios/agregarUsuario', usuario)
            .then(() => {
              swal({
                title: 'Usuario Agregado',
                text: 'Su usuario se a agregado exitosamente',
                icon: 'success',
                button: 'OK',
              });
              setAccion(1);
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
                <label htmlFor="usuario"> Usuario: </label>
                <input type="text" placeholder="Usuario" name="usuario" id="usuario" onChange={handleChange} onBlur={handleBlur} value={values.usuario}
                    className = {(!!touched.usuario && !!errors.usuario) ? 'border-mensaje-error' : ''} />
                {(!!touched.usuario && !!errors.usuario) && (
                    <span className='mensaje-error'>{errors.usuario}</span>
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
            <div className='campo-input'>
                <label htmlFor="validaContrasena"> Validar Contraseña: </label>
                <input type="password" placeholder="validar contraseña" name="validaContrasena" id="validaContrasena" onChange={handleChange} onBlur={handleBlur} value={values.validaContrasena}
                    className = {(!!touched.validaContrasena && !!errors.validaContrasena) ? 'border-mensaje-error' : ''} />
                {(!!touched.validaContrasena && !!errors.validaContrasena) && (
                    <span className='mensaje-error'>{errors.validaContrasena}</span>
                )}
            </div>
            <div className='campo-input'>
                <label htmlFor="nombre"> Nombre: </label>
                <input type="text" placeholder="Nombre" name="nombre" id="nombre" onChange={handleChange} onBlur={handleBlur} value={values.nombre}
                    className = {(!!touched.nombre && !!errors.nombre) ? 'border-mensaje-error' : ''} />
                {(!!touched.nombre && !!errors.nombre) && (
                    <span className='mensaje-error'>{errors.nombre}</span>
                )}
            </div>
            <div className='campo-input'>
                <label htmlFor="apellido"> Apellido: </label>
                <input type="text" placeholder="Apellido" name="apellido" id="apellido" onChange={handleChange} onBlur={handleBlur} value={values.apellido}
                    className = {(!!touched.apellido && !!errors.apellido) ? 'border-mensaje-error' : ''} />
                {(!!touched.apellido && !!errors.apellido) && (
                    <span className='mensaje-error'>{errors.apellido}</span>
                )}
            </div>
            
            <div className='campo-input-row'>
              <label htmlFor="aceptoTerminosYCondiciones"> Acepto Terminos Y condiciones: </label>
              <input type="checkbox" name="aceptoTerminosYCondiciones" id="aceptoTerminosYCondiciones" onChange={e => {handleChange(e) }}  onBlur={e => {handleBlur(e);}} />
            </div>
                
          <div className='flex-orientation-button'>
            <button className="boton blue" onClick={() => setAccion(1)} type="button">
              Loguearse
            </button>
            <button className="boton blue" type="submit">
              Registrar
            </button>
          </div>
          
        </form>
      )}
    </Formik>
  );
};


export default FormularioUsuario;