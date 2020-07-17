// importaciones de las librerias
import React, {Component} from 'react';

// Componente como clase
class ComponenteClase extends Component {
  render(){
    return(
        <div style={{background: 'grey', color: 'white'}} className="App">
        <p>Componente como funcion</p>
      </div>
    );
  }
}

export default ComponenteClase;