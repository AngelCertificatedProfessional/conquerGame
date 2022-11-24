import React,{ useState, useEffect,Suspense} from 'react';
const CardContenido = React.lazy(() =>
    import('../generales/CardContenido')
);
const Ayuda = ({ turno,setmostrarAyuda,mostrarAyuda }) => {
    const [contenidoListado, setContenidoListado] = useState([{
        tipo:2, //Ayuda
        titulo: 'Lancero',
        img: turno+'lancero.png',
        descripcion:'Esta unidad puede moverse hasta 13 espacios en vertical o horizontal o un espacio en diagonal'
    },
    {
        tipo:2, //Ayuda
        titulo: 'Hachero',
        img: turno+'hachero.png',
        descripcion:'Esta unidad puede moverse hasta 13 espacios en diagonal o un espacio en vertical o horizontal'
    },
    {
        tipo:2, //Ayuda
        titulo: 'Arquero',
        img: turno+'archer.png',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla sin requerir mover la unidad`
    },
    {
        tipo:2, //Ayuda
        titulo: 'Asesino',
        img: turno+'asesino.png',
        descripcion:`Esta unidad puede puede hacer dos movimientos en el mismo turno, el primer movimiento sera 
        de lado horizontal o vertical, y el segundo turno se movera en diagonal`
    },
    {
        tipo:2, //Ayuda
        titulo: 'Caballero',
        img: turno+'caballero.png',
        descripcion:`Esta unidad puede moverse hacia cualquier direccion sin restriccion de la cantidad de casillas 
        que pueda moverse, pero no puede atravesar rios`
    },
    {
        tipo:2, //Ayuda
        titulo: 'Rey',
        img: turno+'rey.png',
        descripcion:`Esta unidad puede moverse uno o dos espacios en cualquier direccion, 
        en caso de que muera esta unidad es derrota inmediata para el jugador `
    }]);
    useEffect(() => {
    }, []);
    return (
        <div className="popup">
            <div className="contenedor bc-white seccion">
                <h2 className='fw-300 centrar-texto seccion'>
                    Informacion de las piezas
                </h2>
                <h4 className='fw-300 centrar-texto seccion'>
                   Piezas Principales
                </h4>
                <div className="contenedor-contenido">
                    {contenidoListado.map((consultaSerieTemp, index) => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <CardContenido
                                contenido = {consultaSerieTemp}
                            />
                        </Suspense>
                    ))}
                </div>
                <button className = {`boton blue w-100 m-right`} onClick={() => setmostrarAyuda(!mostrarAyuda)}>Salir</button>                 
            </div>
        </div>
    );
};


export default Ayuda;