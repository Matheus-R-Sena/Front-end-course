import React, {Component} from 'react'

class ComponenteDeClasse extends Component {

    constructor(props){
        super(props)
        this.state = {numero : 0}
    }

    aumentar = () => {
        
    }

    render(){
        return <p>Sou um componente de Classe</p>
    }
    
} 

export default ComponenteDeClasse