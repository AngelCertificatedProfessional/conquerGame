import React, { useState } from "react";
import { actualizarEspecifico } from "../../utils/ConexionAPI";
const ListaPartidas = ({ partidas, abrirPartidaJuego }) => {
  const [seleccionado, setSeleccionado] = useState(0);
  const buscarPartida = (bRepetir) => {
    let partida = {};
    partida.eliminarUsuarioPartidaActual = bRepetir;
    partida.numeroPartida = seleccionado;
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
              buscarPartida(true);
            } else {
              abrirPartidaJuego(resultado.data.numeroPartida);
            }
          });
        } else {
          abrirPartidaJuego(seleccionado);
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
    <>
      <div className="contenido-menu-opciones w-100">
        <h2 className="centrar-texto">Lista de partidas</h2>

        <div className="flex-orientation-button contenido-anuncio">
          <button
            className="boton blue w-100"
            type="button"
            onClick={() => buscarPartida()}
          >
            Entrar
          </button>
        </div>
        <div className="main-currency-table">
          <div className="currency-table--container">
            <table>
              <thead>
                <tr>
                  <th>Numero Partida</th>
                  <th>Tipo</th>
                  <th>Jugadores</th>
                </tr>
              </thead>
              <tbody>
                {partidas !== null &&
                  partidas.map((partidasTemp, index) => (
                    <tr
                      key={partidasTemp._id}
                      onClick={() =>
                        setSeleccionado(partidasTemp.numeroPartida)
                      }
                      className={
                        seleccionado === partidasTemp.numeroPartida
                          ? "tablaSeleccionada"
                          : "tablaNoSeleccionada"
                      }
                    >
                      <td className="table__top-left">
                        {partidasTemp.numeroPartida}
                      </td>
                      <td className="table__top-right">
                        {partidasTemp.tipoJuego === 1
                          ? "Individual"
                          : "Equipos"}
                      </td>
                      <td className="table__top-right table__right">
                        {partidasTemp.jugadores.length} /{" "}
                        {partidasTemp.cantidadJugadores}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaPartidas;
