import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
const MenuPrincipalJuegosPage = lazy(() =>
    import("../pages/MenuPrincipalJuegosPage")
);

export const MenuPrincipalRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<MenuPrincipalJuegosPage />} />
                <Route path="/*" element={<Navigate to="/menuPrincipal" />} />
            </Routes>
        </Suspense>
    )
}
