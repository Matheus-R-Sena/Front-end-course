import React from 'react'
import MeuComponente from './MeuComponente'
//Normalmente os componentes são funções

const FirstComponent = () => {

    //E normalmente retornamos eles no return, colocamos parênteses para retornar objetos. 
    return (
        //Um componente react pode ter somente um elemento pai com todos os elementos internos. 
        <div className="App">
            <h2>That's a comp</h2>
            <MeuComponente/>
        </div>
    )
}

//precisamos exportá-lo 
export default FirstComponent