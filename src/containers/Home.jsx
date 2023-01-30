import React, {Suspense,lazy} from "react";
const CardContenido = lazy(() =>
  import("./../components/generales/CardContenido")
);
const Home = () => {
  const contenidoListado = [
    {
      tipo: 1, //juego
      titulo: "Conquer Game",
      img: "conquerGame.jpg",
      descripcion:
        "Juego de estrategia basado en conquistas y ajedrez, de 2 a 6 jugadores",
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

export default Home;
