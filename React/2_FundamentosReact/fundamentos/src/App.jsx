import { useState } from 'react'
import './App.css'
// Importando o Componente 
import FirstComponent from './components/FirstComponent.jsx'
import TemplateExpression from './components/TemplateExpression.jsx'
import Objeto from './components/Objeto.jsx'
import MeuComponente from './components/MeuComponente.jsx'
import Evento01 from './components/Evento01.jsx'
import Evento02 from './components/Evento02.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <div>
        <h1>H</h1>
        {/*Assim que usamos um componente  */}
        <FirstComponent/>
        <TemplateExpression/>
        <Objeto/>
        <MeuComponente/>
        <Evento01/>
        <Evento02/>
      </div>

      {/*<h1>Vite + React</h1> */}
    
    </>
  )
}


export default App
