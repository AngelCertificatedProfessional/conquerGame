
# ConquerGame

El proyecto conqueGame es un juego de tablero en base en turnos, todos los jugadores tendran 13 piezas iniciales que pueden acomodar en el tablero donde el jugador lo desee, siempre 4 cuando no sobrepase el area de la neblina, despues de asignar sus piezas se iniciara la partida y cada jugador buscara derrotar al rey enemigo.
Cada pieza cuenta con su manera unicada de moverse, algunas teniendo mayores rangos de movimiento, otras pudiendo atacar a distancia y otras hasta pudiendo moverse hasta dos veces en el mismo turno.

## Pasos de instalacion del proyecto

Clonar el proyecto

```bash
  git clone git@github.com:AngelCertificatedProfessional/conquerGame.git
```

Ir a la libreria del proyecto

```bash
  cd conquerGame
```

Instalacione de dependecias

```bash
  npm install
```

Iniciar el proyecto

```bash
  npm run dev
```


## Paquetes utilizados

Los paquetes utilizados fueron los siguientes

```bash
    npm create vite
    npm install react-router-dom
    npm install @mui/material @emotion/react @emotion/styled
    npm install @fontsource/roboto
    npm install @mui/icons-material
    npm install @reduxjs/toolkit react-redux
    npm install sweetalert2
    npm install axios
    npm install @mui/x-data-grid
    npm install formik --save
    npm install yup --save
    npm install react-number-format
    npm install socket.io-client
```
## Deployment

Para ejecutar este proyecto es necesario usar el siguinte comando

```bash
  npm run dev
```
Para ejecutarlo en produccion es el siguiente

```bash
  npm run build
```

## Environment Variables

Para poder correr el proyecto,es necesario agregar las siguientes variables a tu archivo .env

`VITE_API_URL`=RUTAAPIT
`VITE_SOCKET_URL`=RUTASOCKET
`VITE_TEST`=0
`VITE_VERSION`=2.0.0

El valor de `VITE_TEST` es utilizado mas que nada para pruebas ahorrando el tiempo de de acomodar la piezas. 