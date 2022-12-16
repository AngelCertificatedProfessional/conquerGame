import React, { Suspense } from "react";
import { actualizarEspecifico } from "../../utils/ConexionAPI";

const Icono = React.lazy(() => import("../Usuario/Icono"));

const ListadoIconos = ({ agregarUnidadMapa }) => {
  const actualizarMemeUsuario = (sMeme) => {
    let vResultado = {};
    vResultado.meme = sMeme;

    actualizarEspecifico("usuarios/actualizarMemes", vResultado)
      .then((resultado) => {
        sessionStorage.setItem("meme", sMeme);
        swal({
          title: "Asignacion de Meme",
          text: "Su carpeta de meme se a asignado exitosamente",
          icon: "success",
          button: "OK",
        });
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

  const contenidoListado = [
    {
      nombre: "",
      titulo: "No mostrar Iconos",
      carpeta: "sinImagen",
      img: "sinImagen.jpg",
    },
    {
      nombre: "kaguya",
      titulo: "Kaguya",
      carpeta: "kaguya",
      img: "kaguya.jpg",
    },
    {
      nombre: "genshin",
      titulo: "Genshin",
      carpeta: "genshin",
      img: "genshin.jpg",
    },
  ];

  return (
    <div className="contenido-menu-opciones ">
      <div className="contenedor-contenido">
        {contenidoListado.map((consultaSerieTemp, index) => (
          <Suspense fallback={<div>Loading...</div>}>
            <Icono
              contenido={consultaSerieTemp}
              actualizarMemeUsuario={actualizarMemeUsuario}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ListadoIconos;
