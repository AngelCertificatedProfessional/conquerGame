import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
const CardContenido = ({ contenido }) => {
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`@images/${contenido.img}`) // change relative path to suit your needs
                setImagen(response.default)
            } catch (err) {
                console.log(err)
            }
        }
        fetchImage()
    }, []);
    return (
        <div className="contenido">
            <img src={imagen} alt="Anuncio casa en el lago">
            </img>
            <div class="contenido-anuncio">
                <h3>Conquer Game</h3>
                <p>Juego de estrategia basado en conquistas y ajedrez, de 2 a 6 jugadores</p>
                <Link className = "boton blue d-block" to="conquerGameOptions">Ingresa</Link>
            </div>
        </div>
    );
};


export default CardContenido;