import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        cont1: this.props.valor1,
        cont2: this.props.valor2,
        rpta: this.props.rpta
    }
    sumar = () => {
        this.setState({
            rpta: this.state.cont1 + this.state.cont2
        });
    }
    restar = () => {
        this.setState({
            rpta: this.state.cont1 - this.state.cont2
        });
    }
    dividir = () => {
        this.setState({
            rpta: this.state.cont1 / this.state.cont2
        });
    }
    multiplicar = () => {
        this.setState({
            rpta: this.state.cont1 * this.state.cont2
        });
    }
    porcentaje = () => {
        this.setState({
            rpta: (this.state.cont1 / 100) * this.state.cont2
        });
    }
    render() {
        return (<div>
            <a>Numero 1: {this.props.valor1}<p></p>
            Numero 2: {this.props.valor2}</a>
            <p><h1>Resultado: {this.state.rpta}</h1></p>
            <button onClick={this.sumar}>Sumar</button>
            <button onClick={this.restar}>Restar</button>
            <button onClick={this.dividir}>Dividir</button>
            <button onClick={this.multiplicar}>Multiplicar</button>
            <button onClick={this.porcentaje}>Porcentaje</button>
        </div>);
    }
}