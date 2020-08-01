import React, { Fragment } from 'react';

import ApiContext from './Components/Comunicacion/APIContext';
import ObserverPattern from './Components/Comunicacion/ObserverPattern';
import Header from './Components/Header/Header';
import Candidates from './Components/Candidates/Candidates';
import AddCandidate from './Components/Candidates/AddCandidate';
import Skills from './Components/Skills/Skills';

// routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditCandidate from './Components/Candidates/EditCandidate';


function App() {
  return (
    <div>
      <Router>
        <Fragment>

          <Header />
          <Switch>

            <Route exact path='/'>
              <Candidates />
            </Route>

            <Route exact path='/add-candidate'>
              <AddCandidate/>
            </Route>

            <Route exact path='/edit-candidate/:id'>
              <EditCandidate/>
            </Route>


            <Route exact path='/skills'>
              <Skills />
            </Route>

          </Switch>

        </Fragment>
      </Router>
    </div>
  );
}

export default App;

// history.push(`/edit-sucursal/${sucursal.idSucursal}`,{sucursal:sucursal})
// const sucursal = location.state.sucursal;
// history.push('/home');


{/* <div className="form-row">

<div className="form-group col-md-6">
    <label htmlFor="inputNombre">Nombre</label>
    <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupPrepend">
            <FontAwesomeIcon icon={faBuilding} />
        </span>
        <input type="text"
            id="inputNombre"
            name="nombre"
            className="form-control"
            placeholder="Ej. Lacteos, Gaseosas..."
            onChange={e => setNombre(e.target.value)} />
    </div>
</div> */}

// <Link className="nav-link" to="/home">Home</Link>
