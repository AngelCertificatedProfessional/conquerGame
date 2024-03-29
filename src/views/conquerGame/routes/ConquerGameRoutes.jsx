import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
const ConquerGamePage = lazy(() =>
    import("../pages/ConquerGamePage")
);
const ConquerGameLobbyPage = lazy(() =>
    import("../pages/ConquerGameLobbyPage")
);

export const ConquerGameRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<ConquerGamePage />} />
                <Route path="/conquerGameLobby" element={<ConquerGameLobbyPage />} />
                <Route path="/*" element={<Navigate to="/conquerGame" />} />
            </Routes>
        </Suspense>
    )
}
