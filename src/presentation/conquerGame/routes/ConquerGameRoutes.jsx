import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom"

const ConquerGameJuegoTableroPage = lazy(() =>
    import("../pages/ConquerGameJuegoTableroPage")
);

const ConquerGameLobbyTableroPage = lazy(() =>
    import("../pages/ConquerGameLobbyTableroPage")
);
const ConquerGameOpciones = lazy(() =>
    import("../pages/ConquerGameOpciones.jsx")
);
const ConquerGameLobbyPage = lazy(() =>
    import("../pages/ConquerGameLobbyPage")
);

export const ConquerGameRoutes = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<ConquerGameOpciones />} />
                <Route path="/conquerGameLobby" element={<ConquerGameLobbyPage />} />
                <Route path="/conquerGameLobbyTablero" element={<ConquerGameLobbyTableroPage />} />
                <Route path="/conquerGameJuegoTableroPage" element={<ConquerGameJuegoTableroPage />} />
                <Route path="/*" element={<Navigate to="/conquerGame" />} />
            </Routes>
        </Suspense>
    )
}
