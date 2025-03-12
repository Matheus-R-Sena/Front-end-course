import React from 'react'
import {useState} from 'react'


const Estado = () => {

    const [numero, setNumero] = useState(0);

    return(
        <div>
            <p>Este é o seu número {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Vamos contar</button>
        </div>
    )
}

export default Estado