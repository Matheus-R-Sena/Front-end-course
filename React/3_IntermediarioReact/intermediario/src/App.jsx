import './App.css'
// método de importar imagens
import image from './assets/11504366.jpg'
import Estado from './components/Estado.jsx'

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

    </>
  )
}

export default App
