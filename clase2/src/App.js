import React from 'react';

import UserDetails from './DidMount-DidUpdate';
import Ecma from './Ecma';
import Example from './getSnapshotBeforeUpdate';


function Subtitle(props){

    return (
      <div style={{ color: 'black' }}>
        <p>{props.titulo}</p>
        <p>{props.subtitulo}</p>
        <p></p>
      </div>
    );
  
}

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      titulo: "Estado incial",
      subtitulo: "Estado cambio",
      render: false
    }
  }

  changeState() {
    this.setState({
      render: !this.state.render
    });
  }

  render() {

    return (
      <div>
        {(this.state.render === true) ?
          <p className="text-danger" >{this.state.titulo}</p>
          :
          <p className="text-success">{this.state.subtitulo}</p>
        }
        <button className="btn btn-success btn-xl"
          onClick={this.changeState}>
          Cambiar Estado
        </button>
      </div>
    );

  }

}

function App() {

  return (
    <div>
      <Example />
    </div>
  );
}

export default App;
