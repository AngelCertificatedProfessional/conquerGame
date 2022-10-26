import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
const CrearUniser = ({ texto,setOpcionesJuego }) => {
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        
    }, []);
    return (
        <div className="contenido">
            <div class="contenido-anuncio">
                <h3>{texto}</h3>
                <Link className = "boton blue d-block" to="conquerGameOption">Ingresa</Link>
            </div>
        </div>
    );
};


export default CrearUniser;