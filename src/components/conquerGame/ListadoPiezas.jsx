import React,{useEffect} from 'react';
const Tablero = ({turnoUsuario,agregarImagenesListado}) => {
  
  useEffect(() => {
    agregarImagenesListado(turnoUsuario)
  }, []);
  
  return (  
    <>
        <div className= "listado_piezas" id="lista_personajes">
        </div>
    </>
  );
};


export default Tablero;