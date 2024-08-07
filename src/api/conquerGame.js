import axios from 'axios'
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables()
const conquerGame = axios.create({
    baseURL: VITE_API_URL
})

//Todo: configurar interceptores
conquerGame.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': sessionStorage.getItem('token')
    }
    return config;
})

export default conquerGame;