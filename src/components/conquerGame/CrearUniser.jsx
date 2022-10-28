import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
const CrearUniser = ({ setAccion }) => {
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        
    }, []);
    return (
        <div className="contenido-menu-opciones w-100">
            <h3 className='centrar-texto'>Opciones</h3>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(1)}>Crear Partida</button>
            </div>
            <div className="contenido-anuncio">
                <button className = "boton blue w-100" onClick={() => setAccion(2)}>Ingresar Partida</button>
            </div>
        </div>
    );
};


export default CrearUniser;