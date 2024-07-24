import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
const LoginPage = lazy(() =>
    import("../pages/LoginPage")
);

export const UsuarioRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Suspense>
    )
}
