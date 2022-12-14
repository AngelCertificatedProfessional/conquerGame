import React,{ useState, useEffect} from 'react';
const MenuUsuario = ({ setAccion }) => {
    useEffect(() => {
        
    }, []);
    return (
        <div className="contenido-menu-opciones w-100">
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(3)}>Modificar Usuario</button>
            </div>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(4)}>Modificar Contrasena</button>
            </div>
            {/* <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => {setAccion(3); buscarPartidas();}}>Cambiar Iconos</button>
            </div>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => {setAccion(4); buscar10Mejores();}}>Mejores 10 Jugadores</button>
            </div> */}
        </div>
    );
};


export default MenuUsuario;