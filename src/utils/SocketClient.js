const config = require('./../config/config');
const { io } = require("socket.io-client");
const socket = io(config.env.apiLiutsVideoURL,{ transports : ['websocket'] });

export const generarConexion = () => {
    socket.on('connection',() => {
        console.log('conectado')
    })
}