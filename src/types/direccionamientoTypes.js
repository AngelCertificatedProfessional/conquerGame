import { MenuPrincipalRoutes } from "../views/menuPrincipal/routes/MenuPrincipalRoutes"
import {
    CalendarMonth,
} from "@mui/icons-material"

export const DIRECCIONAMIENTO = Object.freeze([
    {
        newTitle: 'MenuPrincipal',
        icono: CalendarMonth,
        ruta: 'menuPrincipal',
        proceso: MenuPrincipalRoutes
    },
])
