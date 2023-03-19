import React, {Suspense,lazy} from "react";
const CardContenido = lazy(() =>
  import("./../components/generales/CardContenido")
);
export const Home = () => {
  const contenidoListado = [
    {
      tipo: 1, //juego
      titulo: "Conquer Game",
      img: "tituloJuegos/conquerGame.jpg",
      descripcion:
        "Juego de estrategia basado en conquistas y ajedrez, de 2 a 6 jugadores",
      enviar:"conquerGameOpciones",
    },
    {
      tipo: 1, //juego
      titulo: "Mi asquerosa vida laboral",
      img: "tituloJuegos/Worker1.png",
      descripcion:
        "En este juego te tocara trabajar como un empleado de nivel inferior hasta llegar a ser jefe supremo",
      enviar:"MiAsquerosaVidaLaboral"
    },
  ];
  return (
    <main className="contenedor seccion">
      <h2 className="fw-300 centrar-texto">Contenido</h2>
      <div className="contenedor-contenido">
        {contenidoListado.map((consultaSerieTemp, index) => (
          <Suspense fallback={<div>Loading...</div>}>
            <CardContenido contenido={consultaSerieTemp} />
          </Suspense>
        ))}
      </div>
    </main>
  );
};