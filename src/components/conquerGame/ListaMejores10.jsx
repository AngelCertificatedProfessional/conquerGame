import React,{useEffect,useState } from 'react';
const ListaPartidas = ({usuarios}) => {

  useEffect(() => {
    //agregarImagenesListado(turnoUsuario)
  }, []);
  
  return (  
    <>
        <div className="contenido-menu-opciones w-100">
            <h2 className='centrar-texto'>
              Lista de mejores 10
            </h2>
            
            <div className="main-currency-table">
                <div className="currency-table--container">
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Puntuaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios !== null && usuarios.map((usuariosTemp, index) => (
                                <tr key={usuariosTemp._id} 
                                className='tablaNoSeleccionada'>
                                    <td className="table__top-left">
                                        {usuariosTemp.usuario}
                                    </td>
                                    
                                    <td className="table__top-right table__right">
                                        {usuariosTemp.puntuaje}
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