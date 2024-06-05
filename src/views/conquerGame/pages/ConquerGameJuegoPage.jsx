import { useListadoPiezas } from "../hooks/useListadoPiezas"
import { ListadoPiezas } from "../views"

export const ConquerGameJuegoPage = () => {

    const { conquerGame } = useListadoPiezas()
    console.log(conquerGame)
    return (

        <ListadoPiezas color={"B"} nombreImagen={"archer"} />
        // <div>ConquerGameJuegoPage</div>
    )
}
export default ConquerGameJuegoPage