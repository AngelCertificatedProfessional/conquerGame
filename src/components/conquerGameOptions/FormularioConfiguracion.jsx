import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { agregar } from "../../utils/ConexionAPI";
import swal from "sweetalert";

const schema = yup.object({
  cantidadJugadores: yup
    .string()
    .required("Seleccione una cantidad de jugadores"),
  tipoJuego: yup.string().required("Seleccione un tipo de juego"),
});

const FormularioConfiguracion = ({ abrirPartidaJuego }) => {
  const actualizarSelectOption = (nValor) => {
    const selectobject = document.getElementById("cantidadJugadores");
    for (let i = 1; i < selectobject.length; i++) {
      selectobject.remove(i);
      i--;
    }

    if (nValor === 1) {
      for(let i =2;i<5;i++){
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        selectobject.appendChild(opt);
      }
    } else {
      for(let i =4;i<7;i+=2){
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        selectobject.appendChild(opt);
      }
    }
  };

  const agregarSala = (partida, bRepetir) => {
    partida.eliminarUsuarioPartidaActual = bRepetir;
    agregar("conquerGame/crearPartida", partida)
      .then((resultado) => {
        if (resultado.data.hasOwnProperty("existe")) {
          swal({
            title: "En Partida",
            text: "Usted tiene una partida en curso, desea salir de ella para generar una nueva?, o desea regresar a la anterior?",
            icon: "warning",
            buttons: ["Regresar a la anterior", "Generar Nueva"],
            dangerMode: true,
          }).then(function (isConfirm) {
            if (isConfirm) {
              agregarSala(partida, true);
            } else {
              abrirPartidaJuego(resultado.data.numeroPartida);
            }
          });
        } else {
          swal({
            title: "Partida Creada",
            text: "Su partida se a creado exitosamente",
            icon: "success",
            button: "OK",
          });
          abrirPartidaJuego(resultado.data.random);
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
        cantidadJugadores: "",
        tipoJuego: "",
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        const partida = {};
        partida.cantidadJugadores = values.cantidadJugadores;
        partida.tipoJuego = values.tipoJuego;
        agregarSala(partida, false);
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
            <h2 className="tituloCentrado">Creacion de partida ConquerGame</h2>
            <p className="fw-700 seccion">Tipo de juego</p>
            <div className="campo-input">
              <label htmlFor="individual">Individual</label>
              <input
                type="radio"
                name="tipoJuego"
                value="1"
                id="individual"
                onChange={(e) => {
                  handleChange(e);
                  actualizarSelectOption(1);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
              <label htmlFor="equipo">Equipo</label>
              <input
                type="radio"
                name="tipoJuego"
                value="2"
                id="equipo"
                onChange={(e) => {
                  handleChange(e);
                  actualizarSelectOption(2);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
              {!!touched.tipoJuego && !!errors.tipoJuego && (
                <span className="mensaje-error">{errors.tipoJuego}</span>
              )}
            </div>

            <div className="campo-input">
              <label htmlFor="cantidadJugadores">
                {" "}
                Cantidad de jugadores:{" "}
              </label>
              <select
                id="cantidadJugadores"
                name="cantidadJugadores"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cantidadJugadores}
              >
                <option value="" disabled defaultValue>
                  --Seleccione--
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {!!touched.cantidadJugadores && !!errors.cantidadJugadores && (
                <span className="mensaje-error">
                  {errors.cantidadJugadores}
                </span>
              )}
            </div>

            <div className="flex-orientation-button contenido-anuncio">
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
