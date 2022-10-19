import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { iniciarSesion } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
  usuario: yup.string().required('El usuario es requerido'),
  contrasena: yup.string().required('La contraseña es requerida'),
});

const LoginFormulario = ({ usuario, ingresarSesion }) => {
  return (
    <Formik
    initialValues={{
        usuario: usuario.usuario,
        contrasena: usuario.contrasena,
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        usuario.usuario = values.usuario;
        usuario.contrasena = values.contrasena;
        // iniciarSesion('usuario/iniciarSecion', usuario)
        //   .then((jsonUsuario) => {
            ingresarSesion(jsonUsuario);
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //     swal({
        //       title: 'Error',
        //       text: error,
        //       icon: 'error',
        //       button: 'OK',
        //     });
        //   });
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
          className="informacionUniversidad"
          onSubmit={handleSubmit}
          noValidate
        >
            <h2 className="tituloCentrado">INICIO DE SESIÓN</h2>
            <label> Correo </label>
            <input type="email" placeholder="contraseña" name="correo" id="correo"/>
            <label> Contraseña </label>
            <input type="password" placeholder="contraseña" name="contrasena" id="contrasena"/>
          {/* <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                placeholder="Usuario"
                name="usuario"
                id="usuario"
                value={values.usuario}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.usuario && !!errors.usuario}
              />
              <Form.Control.Feedback type="invalid">
                {errors.usuario}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="contrasena"
                id="contrasena"
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.contrasena && !!errors.contrasena}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contrasena}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row align="end">
            <Button className="ph-6" variant="primary" type="submit">
              Ingresar
            </Button>
          </Row> */}
        </form>
      )}
    </Formik>
  );
};

export default LoginFormulario;
