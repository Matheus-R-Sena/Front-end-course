import React from 'react'

const Evento01 = () => {
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
    </div>
  )
}

export default Evento01
