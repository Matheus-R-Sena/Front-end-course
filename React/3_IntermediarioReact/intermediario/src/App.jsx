import './App.css'
// método de importar imagens
import image from './assets/11504366.jpg'
import ComponenteDeClasse from './components/ComponenteDeClasse.jsx'
import ContadorAutomatico from './components/ContadorAutomatico.jsx'
import Estado from './components/Estado.jsx'
import Estado02 from './components/Estado02.jsx'
import Hora from './components/Hora.jsx'

function App() {

  return (
    <>
      <div className="App">
        <h1>Imagem</h1>
        
        {/*Utilizamos para acessar o public apenas o /*/}
        <img src="/3343973.jpg" alt="imagem"/>

        {/*Se a imagem 11504366.jpg está dentro da pasta src/assets/, ela não pode ser acessada 
        diretamente no src da img, pois o Webpack não processa arquivos do src/ como arquivos públicos.*/}
        <img src={image} alt="imagem"/>

        

        {/*Trazendo de um link da web */}
        <img src = "https://img.freepik.com/premium-vector/business-woman-working-computer-desk-office_116089-4.jpg" />
    
      </div>
      
      <Estado/>
      <br/>
      <br/>
      <br/>
      <Estado02/>
      <br/>
      <br/>
      <br/>
      <ComponenteDeClasse/>

      <Hora/>
      <ContadorAutomatico/>

    </>
  )
}

export default App
