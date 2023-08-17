import React, {Component} from 'react';
import Chiste from "./Chiste"

class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {
            valor: this.props.valorInicial
        }
    }

    sumar = () => {
        this.setState({
            valor: this.state.valor + 1
        })
    }

    restar = () => {
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render(){
        return (
            <>
            <button id="sumar" onClick={this.sumar}>
                +
            </button>
            <h1>{this.state.valor}</h1>
            <button id="restar" onClick={this.restar}>
                -
            </button>

            {this.state.valor >= 10 
            ? <Chiste /> 
            : <h1>Debe ser mayor a 10</h1>
            }
            </>
        )
    }
    
}

export default Contador