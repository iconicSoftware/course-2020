// importaciones de las librerias
import React, {Fragment} from 'react';

// importo componentes
import CComponent from './CComponent/CComponent';
import Clomponent from './ClComponent/ClComponent';
import FComponent from './FComponent/FComponent';

function App(){

  return(
    <Fragment>
      <CComponent/>
      <Clomponent/>
      <FComponent/>
    </Fragment>
  
  );

}

export default App;
