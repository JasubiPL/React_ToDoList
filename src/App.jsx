import './App.css'
import Tarea from './components/Tarea'
import freeCodeCampLogo from './img/freeCodeCamp_logo.png'

function App() {

  return (
    <div className="aplicacionTareas">
      <div className='freeCodeCampLogoContenedor'>
        <img className='freeCodeCampLogo' src={freeCodeCampLogo} />
      </div>
      <div className='tareasListaPrincipal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React' completada= {true} />
      </div>
    </div>
  )
}

export default App
