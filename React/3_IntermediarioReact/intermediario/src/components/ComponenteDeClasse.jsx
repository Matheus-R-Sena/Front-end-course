import React, {Component} from 'react'

class ComponenteDeClasse extends Component {

    constructor(props){
        super(props)
        this.state = {numero : 0}
    }

    aumentar = () => {
        this.setState(
            
            {
                numero: this.state.numero + 1
            }        
        )       
    }

    render(){

        return (
            <div>
                <p>Sou um componente de Classe que conta </p>
                <button onClick={this.aumentar}>Conte aqui: {this.state.numero}</button>
            </div>
        )    
    }
    
} 

export default ComponenteDeClasse