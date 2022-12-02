import React,{ useState, useEffect,Suspense} from 'react';
const CardContenido = React.lazy(() =>
    import('../generales/CardContenido')
);
const SeleccionarUnidadEspecial = ({ turno,agregarUnidadMapa,partida }) => {
    const [contenidoListado, setContenidoListado] = useState([        
    {
        tipo:4, //Unidad especial
        titulo: 'Asesino Elite',
        img: turno+'asesinoE.png',
        tipoPieza:'asesinoE',
        descripcion:`Esta unidad puede puede hacer dos movimientos en el mismo turno, esta unidad puede moverse tanto vertical como horizantalmente o diagonal un espacio por los dos turnos`,
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"asesinoE")
    },  
    {
        tipo:4, //Unidad especial
        titulo: 'Arquero Elite',
        img: turno+'archerE.png',
        tipoPieza:'archerE',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o cuarta casilla (solo linealmente) sin requerir mover la unidad`,
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"archerE")
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Hechicero',
        img: turno+'hechicero.png',
        tipoPieza:'hechicero',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o cuarta casilla (solo diagonalmente) sin requerir mover la unidad`,
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"hechicero")
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Cañon',
        img: turno+'canon.png',
        tipoPieza:'canon',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la octava casilla sin requerir mover la unidad`,
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"canon")
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Lancero Elite',
        img: turno+'lanceroE.png',
        tipoPieza:'lanceroE',
        descripcion:'Esta unidad puede moverse hasta 14 espacios en vertical/horizontal o 2 espacios en diagonal',
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"lanceroE")
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Hachero Elite',
        img: turno+'hacheroE.png',
        tipoPieza:'hacheroE',
        descripcion:'Esta unidad puede moverse hasta 14 horizontal o 2 espacios en vertical/horizontal',
        yaSelecconado:partida.posicionPiezasGlobal.hasOwnProperty(turno+"hacheroE")
    },
    ]);
    useEffect(() => {
    }, []);
    return (
        <div className="popup">
            <div className="contenedor bc-white seccion">
                <h2 className='fw-300 centrar-texto seccion'>
                    Informacion de las piezas especiales
                </h2>
                <h4 className='fw-300 centrar-texto seccion'>
                   Escoje una pieza especial
                </h4>
                <div className="contenedor-contenido">
                    {contenidoListado.map((consultaSerieTemp, index) => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <CardContenido
                                contenido = {consultaSerieTemp}
                                agregarUnidadMapa = {agregarUnidadMapa}
                                partida = {partida}
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default SeleccionarUnidadEspecial;