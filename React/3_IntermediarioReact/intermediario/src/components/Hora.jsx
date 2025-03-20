import React, { Component } from 'react'

class Hora extends Component {

    constructor (props){
        super(props);
        this.state = { hora : new Date().toLocaleTimeString()}
    }

    componentDidMount(){
        this.timerID = setInterval(()=> 
            {
                this.setState({ hora : new Date().toLocaleTimeString()})
            }, 1000);
                   
        }

    //podemos pará-lo
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
                        
    render(){

        return (
            <div>
                <p>Horário: {this.state.hora}</p>
            </div>
        )
    }


}

export default Hora