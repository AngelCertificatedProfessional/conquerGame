import React,{ useState, useEffect} from 'react';
const Icono = ({ contenido,agregarUnidadMapa }) => {
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`@images/${contenido.carpeta}/${contenido.img}`) // change relative path to suit your needs
                setImagen(response.default)
            } catch (err) {
                console.log(err)
            }
        }
        fetchImage()
    }, []);
    return (
        <div className="contenido">
            <img src={imagen} alt="Anuncio casa en el lago" className='image-icono-seleccion'>
            </img>
            <div className="contenido-anuncio">
                <h3>{contenido.titulo}</h3>
                <button className = {`boton blue w-100 m-right ${contenido.yaSelecconado ? 'opa-50' : ''}`} onClick={() => agregarUnidadMapa(contenido.tipoPieza)} disabled={contenido.yaSelecconado ? 'disabled' : ''}>Seleccionar</button>
            </div>
        </div>
    );
};


export default Icono;