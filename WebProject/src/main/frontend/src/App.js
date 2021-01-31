<<<<<<< HEAD
import React from 'react';
=======
import React, { Component} from 'react';
>>>>>>> ee323a3... [Test1] frontend
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Result from './Pages/Result';

<<<<<<< HEAD
const App = () => {
=======
class App extends React.Component {
  render() {
>>>>>>> ee323a3... [Test1] frontend
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Question1} />
<<<<<<< HEAD
          <Route exact path="/Question2/:answer" component={Question2} />
          <Route exact path="/Result/:answer" component={Result} />
=======
          <Route exact path="/Question2" component={Question2} />
          <Route exact path="/Result" component={Result} />
>>>>>>> ee323a3... [Test1] frontend
        </Switch>
      </Router>

    )
  }
<<<<<<< HEAD
=======
}
>>>>>>> ee323a3... [Test1] frontend

export default App;
