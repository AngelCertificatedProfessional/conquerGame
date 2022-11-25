import React,{ useState, useEffect,Suspense} from 'react';
const CardContenido = React.lazy(() =>
    import('../generales/CardContenido')
);
const SeleccionarUnidadEspecial = ({ turno,agregarUnidadMapa }) => {
    const [contenidoListado, setContenidoListado] = useState([        
    {
        tipo:4, //Unidad especial
        titulo: 'Asesino Elite',
        img: turno+'asesinoE.png',
        tipoPieza:'asesinoElite',
        descripcion:`Esta unidad puede puede hacer dos movimientos en el mismo turno, esta unidad puede moverse tanto vertical como horizantalmente o diagonal un espacio por los dos turnos`
    },  
    {
        tipo:4, //Unidad especial
        titulo: 'Arquero Elite',
        img: turno+'archerE.png',
        tipoPieza:'arqueroElite',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o cuarta casilla sin requerir mover la unidad`
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Hechicero',
        img: turno+'hechicero.png',
        tipoPieza:'hechiceroElite',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la tercera casilla o quinta casilla sin requerir mover la unidad`
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Cañon',
        img: turno+'canon.png',
        tipoPieza:'canonElite',
        descripcion:`Esta unidad puede moverse uno o dos espacios hacia cualquier direccion, tambien puede 
        atacar a distancia en la octava y novena casilla sin requerir mover la unidad`
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Lancero Elite',
        img: turno+'lanceroE.png',
        tipoPieza:'lanceroElite',
        descripcion:'Esta unidad puede moverse hasta 13 espacios en vertical o horizontal o un espacio en diagonal y puede matar dos unidades en linea recta'
    },
    {
        tipo:4, //Unidad especial
        titulo: 'Rey',
        img: turno+'rey.png',
        tipoPieza:'rey',
        descripcion:`Mismas caracteristicas que el rey, Al tener dos piezas de rey puede ser mas dificil que te eliminen, solo ten cuidado de no descuidar a tus reyes, ya que al elimiarte una pieza de rey  
        estas permitiendo que el enemigo pueda hacerde de una pieza especial`
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
                            />
                        </Suspense>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default SeleccionarUnidadEspecial;