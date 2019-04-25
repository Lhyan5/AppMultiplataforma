import React,{Component} from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

class Contador extends Component{
	state = {
		valor: this.props.valor,
		valor2: this.props.valor2,
		rpta: 0
	}
	componentDidUpdate(oldProps,oldState){
		if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
			this.seState({
				valor: this.props.valor
			});
		}
		if(oldProps.valor2!==this.props.valor2 && !isNaN(this.props.valor2)){
			this.seState({
				valor2: this.props.valor2
			});
		}
	}
	sumar = () => {
		this.setState({
			rpta: this.state.valor + this.state.valor2
		});
	}
	restar = () => {
		this.setState({
			rpta: this.state.valor - this.state.valor2
		});
	}
	multiplicar = () => {
		this.setState({
			rpta: this.state.valor * this.state.valor2
		});
	}
	dividir = () => {
		this.setState({
			rpta: this.state.valor / this.state.valor2
		});
	}
	render(){
		return (<View>
			<Text>Respuesta: {this.state.rpta}</Text>
			<Button title='Sumar' onPress={this.sumar}/>
			<Button title='Restar' color='#841584' onPress={this.restar}/>
			<Button title='Multiplicar' onPress={this.multiplicar}/>
			<Button title='Dividir' color='#841584' onPress={this.dividir}/>
			</View>);
	}
}

export default Contador;