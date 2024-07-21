import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { getEnvVariables } from "../../helpers";
const { VITE_SOCKET_URL } = getEnvVariables()
const initialState = {
    socket: null,
    online: false
};

export const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        isOnline: (state, { payload }) => {
            state.online = payload
        },
        connectSocket: (state) => {
            state.socket = io(VITE_SOCKET_URL, {
                transports: ["websocket"],
                autoConnect: true, //para que se mantenga siempre conectado
                forceNew: true, //cuando se mande la instruccion de connect se mandara una nueva coneccion
            });
        }
    },
});

export const {
    isOnline,
    connectSocket,
    disConnectSocket
} = socketSlice.actions;