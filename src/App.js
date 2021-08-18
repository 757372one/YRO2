import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Dash from './components/Dash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dash} />
        </Switch>
      </Router>
    );
  }
}

export default App;