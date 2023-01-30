import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { actualizarEspecifico } from "../../utils/ConexionAPI";
import swal from "sweetalert";

const schema = yup.object({
  buscar: yup.string().required("Ingrese el numero de la sala"),
});

const BuscarPartida = ({ abrirPartidaJuego }) => {
  const buscarPartida = (sBuscar, bRepetir) => {
    let partida = {};
    partida.eliminarUsuarioPartidaActual = bRepetir;
    partida.numeroPartida = sBuscar;
    actualizarEspecifico("conquerGame/buscarPartida/", partida)
      .then((resultado) => {
        if (resultado.data.hasOwnProperty("existe")) {
          swal({
            title: "En Partida",
            text: "Usted tiene una partida en curso, desea salir de ella para entrar a una nueva?, o desea regresar a la anterior?",
            icon: "warning",
            buttons: ["Regresar a la anterior", "Ingresar a Nueva partida"],
            dangerMode: true,
          }).then((isConfirm) => {
            if (isConfirm) {
              buscarPartida(sBuscar, true);
            } else {
              abrirPartidaJuego(resultado.data.numeroPartida);
            }
          });
        } else {
          abrirPartidaJuego(sBuscar);
        }
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: error.toString(),
          icon: "error",
          button: "OK",
        });
      });
  };

  return (
    <Formik
      initialValues={{
        buscar: "",
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        buscarPartida(values.buscar);
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
        <div className="contenido-menu-opciones w-100 contenido-border">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="tituloCentrado">Buscar partida de ConquerGame</h2>
            <div className="campo-input">
              <label htmlFor="buscar"> Buscar: </label>
              <input
                type="text"
                placeholder="Buscar Partida"
                name="buscar"
                id="buscar"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.buscar}
                className={
                  !!touched.buscar && !!errors.buscar
                    ? "border-mensaje-error"
                    : ""
                }
              />
              {!!touched.buscar && !!errors.buscar && (
                <span className="mensaje-error">{errors.buscar}</span>
              )}
            </div>
            <div className="flex-orientation-button contenido-anuncio">
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
