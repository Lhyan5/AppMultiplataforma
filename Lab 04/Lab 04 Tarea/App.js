/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Contador from './src/components/Contador';

export default class App extends Component {
  state = {
    valorInicial: '100',
    valorInicial2: '50'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Primer Numero: {this.state.valorInicial}</Text>
        <Text style={styles.welcome}>Segundo Numero: {this.state.valorInicial2}</Text>
        {!isNaN(this.state.valorInicial)?(<View>
        <Contador valor={parseInt(this.state.valorInicial)} valor2={parseInt(this.state.valorInicial2)}/>
        </View>):(<Text>Debe ingresar numeros para realizar las operaciones</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
