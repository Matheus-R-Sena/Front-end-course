import React from 'react'



const Evento02 = () => {

    //e é um argumento de evento no react
    const handleClick = (e) => {
        console.clear();
        console.log(e);
        
    }

    return (
        <div>
            <button onClick={handleClick}>Limpar Console</button>
        </div>
  )
}

export default Evento02
