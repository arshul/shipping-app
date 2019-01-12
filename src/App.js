import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter,Redirect,Link, withRouter } from 'react-router-dom'

import GetLocation from './Components/Location'
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path="/locate" component={GetLocation} />
          <Route render={() => (
              <header>
                <h1 data-text="404">404</h1>
              </header>
          )} /> 
        </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
