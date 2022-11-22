import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
const CrearUniser = ({ setAccion,buscarPartidas }) => {
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        
    }, []);
    return (
        <div className="contenido-menu-opciones w-100">
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(1)}>Crear Partida</button>
            </div>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(2)}>Buscar Partida</button>
            </div>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => {setAccion(3); buscarPartidas();}}>Lista Partida</button>
            </div>
        </div>
    );
};


export default CrearUniser;