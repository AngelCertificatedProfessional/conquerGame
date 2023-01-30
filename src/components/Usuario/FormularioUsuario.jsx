import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  actualizar,
  actualizarEspecifico,
  agregar,
} from "../../utils/ConexionAPI";
import swal from "sweetalert";

const schema = yup.object({
  correo: yup
    .string()
    .required("El correo es un campo requerido")
    .email("Escriba un correo valido"),
  usuario: yup
    .string()
    .required("El usuario es requerido")
    .min(5, "El usuario deber contener minimo 5 caracteres."),
  contrasena: yup
    .string()
    .required("La contraseña es requerido")
    .min(8, "La Contraseña debe contener minimo 8 caracteres.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "La contrasena debe contener 8 caracteres, Una mayuscula,Una minuscula, Un numero y un caracter especial"
    ),
  validaContrasena: yup
    .string()
    .required("El valor de valida Contraseña es obligatorio")
    .oneOf([yup.ref("contrasena"), null], "Las contraseñas no son iguales"),
  nombre: yup.string().required("El nombre es un campo requerido"),
  apellido: yup.string().required("El apellido es un campo obligatorio"),
});

const FormularioUsuario = ({
  setAccion,
  accion,
  terminosCondiciones,
  usuario,
}) => {
  return (
    <Formik
      initialValues={{
        usuario: usuario.usuario || "",
        contrasena: accion !== 4 ? usuario.contrasena || "" : "",
        validaContrasena: accion !== 4 ? usuario.contrasena || "" : "",
        nombre: usuario.nombre || "",
        apellido: usuario.apellido || "",
        correo: usuario.correo || "",
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        let usuarioT = {};
        if (
          !usuario.hasOwnProperty("usuario") &&
          (values.aceptoTerminosYCondiciones === undefined ||
            values.aceptoTerminosYCondiciones.length <= 0 ||
            !values.aceptoTerminosYCondiciones[0] === "on")
        ) {
          swal({
            title: "Terminos Y Condiciones",
            text: "Es necesario aceptar los terminos y condiciones para loguearse en el sistema",
            icon: "warning",
            button: "OK",
          });
          return;
        } else {
          usuarioT.aceptoTerminosYCondiciones = true;
        }
        usuarioT._id = usuario._id;
        usuarioT.usuario = values.usuario;
        usuarioT.contrasena = values.contrasena;
        usuarioT.nombre = values.nombre;
        usuarioT.apellido = values.apellido;
        usuarioT.correo = values.correo;
        if (accion === 2) {
          agregar("usuarios/agregarUsuario", usuarioT)
            .then(() => {
              swal({
                title: "Usuario Agregado",
                text: "Su usuario se a agregado exitosamente",
                icon: "success",
                button: "OK",
              });
              setAccion(1);
            })
            .catch((error) => {
              swal({
                title: "Error",
                text: error.toString(),
                icon: "error",
                button: "OK",
              });
            });
        } else if (accion === 3) {
          actualizar("usuarios/actualizarUsuario", usuarioT)
            .then(() => {
              swal({
                title: "Usuario Modificado",
                text: "Su usuario se a modificado exitosamente",
                icon: "success",
                button: "OK",
              });
              //aqui va el regreso
              //actualizarListado();
            })
            .catch((error) => {
              swal({
                title: "Error",
                text: error,
                icon: "error",
                button: "OK",
              });
            });
        } else if (accion === 4) {
          actualizarEspecifico("usuarios/actualizarContrasena", usuarioT)
            .then(() => {
              swal({
                title: "Contraseña Modificada",
                text: "La contraseña de su usuario se a modificado exitosamente",
                icon: "success",
                button: "OK",
              });
              //aqui va el regreso
              //actualizarListado();
            })
            .catch((error) => {
              swal({
                title: "Error",
                text: error,
                icon: "error",
                button: "OK",
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
        <div className="contenido-menu-opciones">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="tituloCentrado">
              {accion === 2
                ? `CREACIÓN DE USUARIO`
                : accion === 3
                ? `MODIFICAR USUARIO`
                : `CAMBIAR CONTRASEÑA DE USUARIO`}
            </h2>
            {accion === 4 && (
              <h3>Si no quieres cambiar tu contraseña, no escribas nada.</h3>
            )}
            {accion !== 4 && (
              <>
                <div className="campo-input">
                  <label htmlFor="correo"> Correo: </label>
                  <input
                    type="email"
                    placeholder="Correo"
                    name="correo"
                    id="correo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.correo}
                    className={
                      !!touched.correo && !!errors.correo
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.correo && !!errors.correo && (
                    <span className="mensaje-error">{errors.correo}</span>
                  )}
                </div>
                <div className="campo-input">
                  <label htmlFor="usuario"> Usuario: </label>
                  <input
                    type="text"
                    placeholder="Usuario"
                    name="usuario"
                    id="usuario"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.usuario}
                    className={
                      !!touched.usuario && !!errors.usuario
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.usuario && !!errors.usuario && (
                    <span className="mensaje-error">{errors.usuario}</span>
                  )}
                </div>
              </>
            )}

            {(accion === 2 || accion === 4) && (
              <>
                <div className="campo-input">
                  <label htmlFor="contrasena"> Contraseña: </label>
                  <input
                    type="password"
                    placeholder="contraseña"
                    name="contrasena"
                    id="contrasena"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contrasena}
                    className={
                      !!touched.contrasena && !!errors.contrasena
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.contrasena && !!errors.contrasena && (
                    <span className="mensaje-error">{errors.contrasena}</span>
                  )}
                </div>
                <div className="campo-input">
                  <label htmlFor="validaContrasena">
                    {" "}
                    Validar Contraseña:{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="validar contraseña"
                    name="validaContrasena"
                    id="validaContrasena"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.validaContrasena}
                    className={
                      !!touched.validaContrasena && !!errors.validaContrasena
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.validaContrasena && !!errors.validaContrasena && (
                    <span className="mensaje-error">
                      {errors.validaContrasena}
                    </span>
                  )}
                </div>
              </>
            )}
            {accion !== 4 && (
              <>
                <div className="campo-input">
                  <label htmlFor="nombre"> Nombre: </label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    className={
                      !!touched.nombre && !!errors.nombre
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.nombre && !!errors.nombre && (
                    <span className="mensaje-error">{errors.nombre}</span>
                  )}
                </div>
                <div className="campo-input">
                  <label htmlFor="apellido"> Apellido: </label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    id="apellido"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apellido}
                    className={
                      !!touched.apellido && !!errors.apellido
                        ? "border-mensaje-error"
                        : ""
                    }
                  />
                  {!!touched.apellido && !!errors.apellido && (
                    <span className="mensaje-error">{errors.apellido}</span>
                  )}
                </div>
              </>
            )}
            {accion === 2 && (
              <div className="campo-input-row">
                <a className="liga" onClick={() => terminosCondiciones()}>
                  {" "}
                  Acepto Terminos Y condiciones:
                </a>
                <input
                  type="checkbox"
                  name="aceptoTerminosYCondiciones"
                  id="aceptoTerminosYCondiciones"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
                />
              </div>
            )}

            <div className="flex-orientation-button">
              {accion === 2 ? (
                <>
                  <button
                    className="boton blue"
                    onClick={() => setAccion(1)}
                    type="button"
                  >
                    Loguearse
                  </button>
                  <button className="boton blue" type="submit">
                    Registrar
                  </button>
                </>
              ) : (
                <button className="boton blue" type="submit">
                  Actualizar
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default FormularioUsuario;
