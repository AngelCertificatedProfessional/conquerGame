import React, {Suspense,lazy} from "react";
import { contenidoListado } from "../utils/home/configuracion";
const CardContenido = lazy(() =>
  import("./../components/generales/CardContenido")
);

export const Home = () => {
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