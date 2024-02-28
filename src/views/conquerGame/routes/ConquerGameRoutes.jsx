import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
const ConquerGamePage = lazy(() =>
    import("../pages/ConquerGamePage")
);

export const ConquerGameRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<ConquerGamePage />} />
                <Route path="/*" element={<Navigate to="/conquerGame" />} />
            </Routes>
        </Suspense>
    )
}
