import React from 'react'
import MeuComponente from './MeuComponente'

const TemplateExpression = () => {

    const name = "Alice"
    
    return (  

        <div>

            <p>That's my name {name} </p>
            <br></br>
            <MeuComponente/>
        </div>

      )

}

export default TemplateExpression 

