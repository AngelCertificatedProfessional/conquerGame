import ReactDOM from 'react-dom/client'
import { ConquerGame } from './ConquerGame'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // comento el strictmode porque me da la falsa sensacion que esta ejecutando el api 2 veces
  // <React.StrictMode>
  <ConquerGame />
  // </React.StrictMode>,
)
