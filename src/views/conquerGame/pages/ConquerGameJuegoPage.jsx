import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { ListadoPiezas } from "../views"

export const ConquerGameJuegoPage = () => {

    const { conquerGame } = useListadoPiezas()
    return (
        // conquerGame.piezas = aqui va el map
        <ListadoPiezas color={"B"} nombreImagen={"archer"} />
        // <div>ConquerGameJuegoPage</div>
    )
}
export default ConquerGameJuegoPage