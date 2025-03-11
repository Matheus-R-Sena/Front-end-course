import React from 'react'

const ComponenteTeste01 = () => {

const exemplo = (x) => {
    if (x)
        {
            return (<p>Este componente 01 true</p>)
        }
        else {
            return (<p>Este componente 02 False</p>)
        }
}

return (
    <div>
        <h1></h1>
        {10 < 4 && <p>Opa estou aqui</p>}
        {exemplo(true)}
        {exemplo(false)}
    </div>
    
    
)


}

export default ComponenteTeste01