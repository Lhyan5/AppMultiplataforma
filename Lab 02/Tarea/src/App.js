import React, { Component } from 'react';

import Contador from './Componentes/Contador/Contador';

class App extends Component {
  render() {
    return (<div>
      <Contador valor1={50} valor2={100} rpta={0}/>
    </div>);
  }
}

export default App;
