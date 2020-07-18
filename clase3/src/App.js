import React, {Fragment} from 'react';

// components
import Hooks from './Components/Hooks/hooks';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

// routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {


  return (
    <div className="App"> 
     <Router>
        <Fragment>
          <Switch>
            <Route exact path='/'>
                <Header/>
            </Route>
            <Route exact path='/header'>
                {/* <Header colorBack={"red"}
                        colorLetra={"white"}/> */}
                <Header style={"bg-primary text-white"}/>
            </Route>
        </Switch>
      </Fragment>
    </Router>
    </div>
  );
}

export default App;
