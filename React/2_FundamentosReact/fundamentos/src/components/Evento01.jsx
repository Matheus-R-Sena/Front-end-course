import React from 'react'

const Evento01 = () => {
  
  
  
  const renderSomething = (x) => {

    if(x == true){
      return (<h3> Estou renderizando este componente </h3>)
      
    } else {
      return (<h3> Estou renderizando outro componente </h3>)
    }
  }
  
  
  
  
  
  return (
    <div>

        <div> {/* Não chamamos atributos HTML no JSX de atributos e sim de propriedades (props), mas iremos ver isso mais a frente */}
        <button onClick={()=>{console.log("testei esse evento")}}> Clique aqui </button>  
        </div>

      <div>
        <button
            onClick= {()=>{console.clear()}}>
            Limpar console
        </button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Evento01
