import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Dash from './components/Dash';
import Cryptonauts from './components/Cryptonauts';
import Roadmap from './components/pages/Roadmap/Roadmap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dash} />
          <Route path='/cryptonauts' exact component={Cryptonauts} />
          <Route path='/roadmap' exact component={Roadmap} />
        </Switch>
      </Router>
    );
  }
}

export default App;