import React, { Component } from 'react'

class ContadorAutomatico extends Component {


    constructor(props) {
        super(props);
        this.state = { numero: 2 };

    }

    conta = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

    componentDidMount() {
        this.timerID = setInterval(this.conta, 1000);
    }

    //podemos pará-lo
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

        return (
            <div>
                <p>Contador: {this.state.numero}</p>
            </div>
        )
    }
}

export default ContadorAutomatico