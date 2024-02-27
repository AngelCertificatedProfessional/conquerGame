import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { UsuarioRoutes } from "../views/usuario/routes/UsuarioRoutes"
import { TemplateIndex } from "../template/TemplateIndex"
import { useUsuarioStore } from "../hooks"
import { USER_STATUS,DIRECCIONAMIENTO } from "../types"

export const AppRouter = () => {

    const { status, checkAuthToken } = useUsuarioStore()
    // const { buscarAlerta } = useAlertasStore()

    // useEffect(() => {
    //     checkAuthToken()
    // }, [])


    // useEffect(() => {
    //     if (status === USER_STATUS.AUTENTICATED) buscarAlerta()
    // }, [status])

    return (
        <>
            {
                (status === USER_STATUS.NOTAUTENTICATED || status === USER_STATUS.CHECKING) ?
                    <Routes>
                        <Route path="/auth/*" element={<UsuarioRoutes />} />
                        <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
                    </Routes>
                :
                    <TemplateIndex>
                        <Routes>
                            {
                                DIRECCIONAMIENTO.map(ruta => (
                                    <Route key={ruta.ruta} path={`/${ruta.ruta}/*`} element={<ruta.proceso />} />
                                ))
                            } 

                            {/* Dejo la linea de abajo como ejemplo de como estaban anteriormente las rutas */}
                            {/* <Route path="/configuracion/*" element={<ConfiguracionRouter />} /> */}
                            
                            <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
                            <Route path="/auth/login" element={<Navigate to="/menuPrincipal" />}></Route>
                        </Routes> 
                    </TemplateIndex>
            }
        </>
    )
}
