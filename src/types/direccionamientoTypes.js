import { ConquerGameRoutes } from "../views/conquerGame/routes/ConquerGameRoutes"
import { MenuPrincipalRoutes } from "../views/menuPrincipal/routes/MenuPrincipalRoutes"
import {
    CalendarMonth,
} from "@mui/icons-material"

export const DIRECCIONAMIENTO = Object.freeze([
    {
        juego: false,
        newTitle: 'MenuPrincipal',
        icono: CalendarMonth,
        ruta: 'menuPrincipal',
        proceso: MenuPrincipalRoutes
    },
    {
        juego: true,
        newTitle: 'ConquerGame',
        icono: CalendarMonth,
        ruta: '/conquerGame',
        proceso: ConquerGameRoutes
    },
])
